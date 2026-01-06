'use client';

// Isolated Marketing Layer – No Core Access
// Landing page - Professional marketing presentation for Hotel AI SaaS

import { HeroSection, ValueSection, HowItWorksSection, CtaSection } from '@/components/sections';

// Value cards for Hotel Owners
const ownerCards = [
  { key: 'revenue', icon: '💰' },
  { key: 'costs', icon: '📉' },
  { key: 'insights', icon: '📊' },
  { key: 'control', icon: '🏢' },
];

// Value cards for Hotel Managers & Staff
const staffCards = [
  { key: 'dashboard', icon: '🖥️' },
  { key: 'automation', icon: '⚡' },
  { key: 'requests', icon: '🎯' },
  { key: 'reports', icon: '📋' },
];

// Value cards for Guest Experience
const guestCards = [
  { key: 'concierge', icon: '🤖' },
  { key: 'multilang', icon: '🌍' },
  { key: 'contactless', icon: '📱' },
  { key: 'satisfaction', icon: '⭐' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Target: Hotel Owners */}
      <HeroSection />

      {/* Value Section - For Hotel Owners */}
      <ValueSection 
        translationPrefix="valueOwners" 
        cards={ownerCards}
        bgColor="bg-white"
      />

      {/* Value Section - For Hotel Managers & Staff */}
      <ValueSection 
        translationPrefix="valueStaff" 
        cards={staffCards}
        bgColor="bg-gray-50"
      />

      {/* Value Section - For Guest Experience */}
      <ValueSection 
        translationPrefix="valueGuests" 
        cards={guestCards}
        bgColor="bg-white"
      />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Bottom CTA Section */}
      <CtaSection />
    </div>
  );
}
