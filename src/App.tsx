/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CraneTruckScene } from './components/CraneTruckScene';
import { ServicesSection } from './components/ServicesSection';
import { OurApproachSection } from './components/OurApproachSection';
import { OceanFreightScene } from './components/OceanFreightScene';
import { AirFreightTestimonialsSection } from './components/AirFreightTestimonialsSection';
import { ClosingCtaSection } from './components/ClosingCtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedFreightMode, setSelectedFreightMode] = useState<string>('ocean');

  const handleOpenContact = (initialMode: string = 'ocean') => {
    setSelectedFreightMode(initialMode);
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A] font-sans selection:bg-[#0284C7] selection:text-white">
      {/* 1. Compact Navigation Bar */}
      <Navbar onOpenContact={() => handleOpenContact('ocean')} />

      <main>
        {/* 2. Hero — “We move freight. We own the outcome.” */}
        <Hero onOpenContact={() => handleOpenContact('ocean')} />

        {/* 3. Crane & Truck Scrollytelling Scene — “Careful handling. Reliable delivery.” */}
        <CraneTruckScene onOpenContact={() => handleOpenContact('overland')} />

        {/* 4. Services — “Every mode. One coordinated team.” */}
        <ServicesSection onSelectService={(mode) => handleOpenContact(mode)} />

        {/* 5. Our Approach — “Reliability at every milestone.” */}
        <OurApproachSection onOpenContact={() => handleOpenContact('multimodal')} />

        {/* 6. Ocean Freight Scrollytelling Scene — “Global reach. Seamless coordination.” */}
        <OceanFreightScene onOpenContact={(mode) => handleOpenContact(mode || 'ocean')} />

        {/* 7. Air Freight & Testimonials — “Trusted by businesses across the world.” */}
        <AirFreightTestimonialsSection onOpenContact={(mode) => handleOpenContact(mode || 'air')} />

        {/* 8. Closing Call to Action */}
        <ClosingCtaSection onOpenContact={() => handleOpenContact('ocean')} />
      </main>

      {/* 9. Clean Footer */}
      <Footer onOpenContact={() => handleOpenContact('ocean')} />

      {/* Interactive Shipment Inquiry & Consultation Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
        initialMode={selectedFreightMode}
      />
    </div>
  );
}
