import { assetUrl } from '@/lib/assets';

const heroCards = [
  {
    src: assetUrl('/assets/cards/black.webp'),
    alt: 'Cartão Sicredi Mastercard Black',
    className: 'left-7 top-8 h-48 -rotate-6 md:left-10 md:top-10 md:h-64',
  },
  {
    src: assetUrl('/assets/cards/platinum.webp'),
    alt: 'Cartão Sicredi Platinum',
    className: 'right-7 top-24 h-32 rotate-3 md:right-12 md:top-32 md:h-44',
  },
  {
    src: assetUrl('/assets/cards/gold.webp'),
    alt: 'Cartão Sicredi Gold',
    className: 'bottom-8 right-14 h-32 rotate-6 md:bottom-10 md:right-20 md:h-44',
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
          <div className="sicredi-box relative min-h-[360px] overflow-hidden bg-sicredi-green p-5 shadow-soft md:min-h-[470px] md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.34),transparent_30%),radial-gradient(circle_at_75%_80%,rgba(20,110,55,0.45),transparent_34%)]" />
            {heroCards.map((card) => (
              <img
                key={card.src}
                src={card.src}
                alt={card.alt}
                className={`absolute w-auto object-contain drop-shadow-2xl ${card.className}`}
              />
            ))}
            <div className="absolute bottom-8 left-8 max-w-56 text-white md:bottom-10 md:left-10">
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
