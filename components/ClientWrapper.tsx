// components/ClientWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

const LoadingScreen = dynamic(() => import('./loading-screen'), { ssr: false });
const ParticleBackground = dynamic(() => import('./particle-background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black"></div>,
});
const EducationSection = dynamic(() => import('./education-section'), {
  loading: () => <div className="py-20 animate-pulse bg-gray-900/20 rounded-lg h-96"></div>,
});
const PWAInstallPrompt = dynamic(() => import('./pwa-install-prompt'), {
  ssr: false,
});

export default function ClientWrapper() {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <EducationSection />
      <PWAInstallPrompt />
    </>
  );
}
