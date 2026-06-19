import { assetUrl } from '@/lib/assets';

const heroCards = [
  {
    src: assetUrl('/assets/cards/black.webp'),
    alt: 'Cartão Sicredi Mastercard Black',
    className:
      'left-[12%] top-[12%] h-48 -rotate-6 md:left-[10%] md:top-[10%] md:h-64 hero-card-shadow',
  },
  {
    src: assetUrl('/assets/cards/platinum.webp'),
    alt: 'Cartão Sicredi Platinum',
    className:
      'left-[8%] bottom-[18%] h-32 -rotate-2 md:left-[12%] md:bottom-[18%] md:h-44 hero-card-shadow',
  },
  {
    src: assetUrl('/assets/cards/gold.webp'),
    alt: 'Cartão Sicredi Gold',
    className:
      'right-[8%] top-[34%] h-32 rotate-6 md:right-[8%] md:top-[34%] md:h-44 hero-card-shadow',
  },
];

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-[1fr_0.9fr] md:px-8 md:pb-24 md:pt-16">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-normal text-sicredi-green">
            Cartões de crédito
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl font-bold italic leading-tight text-sicredi-text sm:text-6xl lg:text-7xl">
            Peça seu cartão Sicredi
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-sicredi-muted">
            Mais praticidade, segurança e vantagens para comprar, pagar, viajar e aproveitar
            benefícios que combinam com o seu momento.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cartoes"
              className="sicredi-box inline-flex min-h-12 items-center justify-center bg-sicredi-green px-6 py-3 font-extrabold text-white transition hover:bg-sicredi-dark"
            >
              Conhecer cartões
            </a>
            <a
              href="#como-pedir"
              className="sicredi-box inline-flex min-h-12 items-center justify-center border border-sicredi-green bg-white px-6 py-3 font-extrabold text-sicredi-dark transition hover:bg-sicredi-soft"
            >
              Falar com o Sicredi
            </a>
          </div>
          <div className="mt-10 grid gap-3 text-sm font-bold text-sicredi-text sm:grid-cols-3">
            <span className="sicredi-box bg-sicredi-surface p-4">Aproximação</span>
            <span className="sicredi-box bg-sicredi-surface p-4">Carteira digital</span>
            <span className="sicredi-box bg-sicredi-surface p-4">Recompensas</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-16 top-8 h-72 w-72 rounded-full bg-sicredi-soft blur-3xl" />
          <div className="sicredi-box hero-stage relative min-h-[380px] overflow-hidden p-5 shadow-soft md:min-h-[500px] md:p-8">
            <div className="hero-stage__beam hero-stage__beam--top" />
            <div className="hero-stage__beam hero-stage__beam--base" />
            <div className="hero-stage__outline" />
            <div className="hero-stage__platform hero-stage__platform--back" />
            <div className="hero-stage__platform hero-stage__platform--front" />
            {heroCards.map((card) => (
              <img
                key={card.src}
                src={card.src}
                alt={card.alt}
                className={`absolute z-20 w-auto object-contain ${card.className}`}
              />
            ))}
            <div className="absolute bottom-8 left-8 z-30 max-w-56 text-white md:bottom-10 md:left-10">
              <p className="font-heading text-3xl font-bold italic leading-tight">
                Black, Platinum e Gold
              </p>
              <p className="mt-3 text-sm font-bold leading-5 text-white/85">
                Opções para viagens, segurança e compras do dia a dia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
