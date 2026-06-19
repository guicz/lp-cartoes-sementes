import { BenefitGrid } from '@/components/landing/BenefitGrid';
import { CardSelector } from '@/components/landing/CardSelector';
import { Hero } from '@/components/landing/Hero';
import { HowToRequest } from '@/components/landing/HowToRequest';
import { PortfolioBand } from '@/components/landing/PortfolioBand';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BenefitGrid />
        <CardSelector />
        <PortfolioBand />
        <HowToRequest />
      </main>
      <Footer />
    </>
  );
}
