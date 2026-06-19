import { SectionLabel } from '@/components/landing/SectionLabel';
import { assetUrl } from '@/lib/assets';

const portfolioCards = [
  {
    src: assetUrl('/assets/cards/black.webp'),
    alt: 'Cartão Sicredi Mastercard Black',
    label: 'Experiências e viagens',
  },
  {
    src: assetUrl('/assets/cards/platinum.webp'),
    alt: 'Cartão Sicredi Platinum',
    label: 'Equilíbrio entre rotina e proteção',
  },
  {
    src: assetUrl('/assets/cards/gold.webp'),
    alt: 'Cartão Sicredi Gold',
    label: 'Compras do dia a dia',
  },
];

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
            viagens ou transferidos para programas parceiros, conforme regras de cada cartão.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {portfolioCards.map((card) => (
            <article key={card.src} className="sicredi-box bg-white p-5 text-sicredi-text">
              <div className="flex h-40 items-center justify-center bg-sicredi-surface p-4">
                <img src={card.src} alt={card.alt} className="max-h-32 w-auto object-contain" />
              </div>
              <p className="mt-4 text-sm font-extrabold leading-5">{card.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
