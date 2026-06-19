import { SectionLabel } from '@/components/landing/SectionLabel';
import { assetUrl } from '@/lib/assets';

export function PortfolioBand() {
  return (
    <section className="bg-sicredi-dark py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 md:px-8">
        <div>
          <SectionLabel>Cartões participantes</SectionLabel>
          <h2 className="mt-3 font-heading text-4xl font-bold italic leading-tight md:text-5xl">
            Benefícios para comprar, pontuar e aproveitar melhor.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/82">
            Os cartões Sicredi participantes acumulam pontos que podem ser trocados por produtos,
            viagens, cashback ou transferidos para programas parceiros.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src={assetUrl('/assets/cards/visa-portfolio.png')}
            alt="Portfólio de cartões Sicredi Visa"
            className="sicredi-box h-full w-full object-cover"
          />
          <img
            src={assetUrl('/assets/cards/mastercard-portfolio.png')}
            alt="Portfólio de cartões Sicredi Mastercard"
            className="sicredi-box h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
