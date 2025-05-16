// app/page.tsx
import ClientContent from '@/components/ClientContent';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <ClientContent />
    </main>
  );
}

