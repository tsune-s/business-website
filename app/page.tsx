import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Footer />
      {/* 他のセクションは後で追加 */}
    </main>
  );
} 