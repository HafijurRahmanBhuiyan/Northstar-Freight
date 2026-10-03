export type FreightMode = 'air' | 'ocean' | 'overland' | 'customs' | 'multimodal';

export interface ServiceItem {
  id: string;
  mode: FreightMode;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string };
  transitTime: string;
  coverage: string;
}

export interface MilestoneItem {
  number: string;
  title: string;
  subtitle: string;
  detail: string;
  status: 'completed' | 'active' | 'upcoming';
}

export interface OceanFeatureCallout {
  id: string;
  title: string;
  description: string;
  progressThreshold: [number, number]; // [start, end]
  badge: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  verifiedMetric: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  company: string;
  mode: FreightMode;
  origin: string;
  destination: string;
  estimatedVolume: string;
  notes: string;
}
