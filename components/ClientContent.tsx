// components/ClientContent.tsx
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import CustomCursor from '@/components/custom-cursor';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import SocialLinks from '@/components/social-links';

const LoadingScreen = dynamic(() => import('@/components/loading-screen'), { ssr: false });

const ParticleBackground = dynamic(() => import('@/components/particle-background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black"></div>,
});

const EducationSection = dynamic(() => import('@/components/education-section'), {
  loading: () => <div className="py-20 animate-pulse bg-gray-900/20 rounded-lg h-96"></div>,
});

const ProjectsSection = dynamic(() => import('@/components/projects-section'), {
  loading: () => <div className="py-20 animate-pulse bg-gray-900/20 rounded-lg h-96"></div>,
});

const NewsletterSection = dynamic(() => import('@/components/newsletter-section'), {
  loading: () => <div className="py-20 animate-pulse bg-gray-900/20 rounded-lg h-96"></div>,
});

const ContactSection = dynamic(() => import('@/components/contact-section'), {
  loading: () => <div className="py-20 animate-pulse bg-gray-900/20 rounded-lg h-96"></div>,
});

const PWAInstallPrompt = dynamic(() => import('@/components/pwa-install-prompt'), {
  ssr: false,
});

export default function ClientContent() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />

      <Suspense fallback={<div className="fixed inset-0 bg-black"></div>}>
        <ParticleBackground />
      </Suspense>

      <Suspense fallback={null}>
        <PWAInstallPrompt />
      </Suspense>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />

        <Suspense fallback={<div className="py-20 animate-pulse bg-gray-900/20 rounded-lg h-96"></div>}>
          <EducationSection />
        </Suspense>

        <Suspense fallback={<div className="py-20 animate-pulse bg-gray-900/20 rounded-lg h-96"></div>}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<div className="py-20 animate-pulse bg-gray-900/20 rounded-lg h-96"></div>}>
          <NewsletterSection />
        </Suspense>

        <Suspense fallback={<div className="py-20 animate-pulse bg-gray-900/20 rounded-lg h-96"></div>}>
          <ContactSection />
        </Suspense>

        <SocialLinks />
      </div>
    </>
  );
}
