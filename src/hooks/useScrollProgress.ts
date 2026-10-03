import { useState, useEffect, useRef, useCallback } from 'react';

interface ScrollProgressOptions {
  offsetStart?: number; // 0 to 1
  offsetEnd?: number;   // 0 to 1
}

export function useScrollProgress<T extends HTMLElement = HTMLDivElement>(
  options: ScrollProgressOptions = {}
) {
  const containerRef = useRef<T | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const calculateProgress = useCallback(() => {
    if (!containerRef.current) return;
    const element = containerRef.current;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // The scrollable distance is element height minus the sticky viewport height (windowHeight)
    const scrollDistance = element.offsetHeight - windowHeight;

    if (scrollDistance <= 0) {
      setProgress(0);
      setIsInView(rect.top < windowHeight && rect.bottom > 0);
      return;
    }

    // When rect.top is 0 (element top is at top of screen), currentScroll = 0
    // When rect.bottom is windowHeight, currentScroll = scrollDistance
    const currentScroll = -rect.top;
    const rawProgress = currentScroll / scrollDistance;
    const clampedProgress = Math.max(0, Math.min(1, rawProgress));

    setProgress(clampedProgress);
    setIsInView(rect.top < windowHeight && rect.bottom > 0);
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    const onResize = () => {
      calculateProgress();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    calculateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [calculateProgress]);

  // Programmatic scroll helper to jump to a specific progress in this section
  const scrollToProgress = useCallback((targetProgress: number) => {
    if (!containerRef.current) return;
    const element = containerRef.current;
    const windowHeight = window.innerHeight;
    const scrollDistance = element.offsetHeight - windowHeight;
    const elementTopOffset = element.getBoundingClientRect().top + window.scrollY;
    const targetScrollY = elementTopOffset + targetProgress * scrollDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  }, []);

  return {
    containerRef,
    progress,
    isInView,
    prefersReducedMotion,
    scrollToProgress,
  };
}
