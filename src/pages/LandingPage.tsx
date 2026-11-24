import React from 'react';
import { Hero } from '../components/hero/Hero';
import { LocationSearch } from '../components/search/LocationSearch';
import { HowItWorks } from '../components/how-it-works/HowItWorks';
import { CommunityCharging } from '../components/community/CommunityCharging';
import { DiscoveryPreview } from '../components/discovery/DiscoveryPreview';

export const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#080A09] text-white">
      {/* 1. Hero Section (Includes EV Visual & Multi-Network Aggregation) */}
      <Hero />

      {/* 2. Location Search Section */}
      <LocationSearch />

      {/* 3. Compare & Discovery Preview */}
      <DiscoveryPreview />

      {/* 4. How It Works Section */}
      <HowItWorks />

      {/* 5. Community Charging Section */}
      <CommunityCharging />
    </main>
  );
};
