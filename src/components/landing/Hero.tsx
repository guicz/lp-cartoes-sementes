import { assetUrl } from '@/lib/assets';

const heroBenefits = [
  {
    title: 'Aproximação',
    text: 'Pague rápido no dia a dia',
    icon: assetUrl('/assets/icons/cartao-credito.svg'),
  },
  {
    title: 'Carteira digital',
    text: 'Use no celular ou relógio',
    icon: assetUrl('/assets/icons/aplicativo.svg'),
  },
  {
    title: 'Recompensas',
    text: 'Acumule pontos em cartões participantes',
    icon: assetUrl('/assets/icons/recompensas.svg'),
  },
];

const heroCards = [
  {
    src: assetUrl('/assets/cards/black.webp'),
    alt: 'Cartão Sicredi Mastercard Black',
    className:
      'left-[7%] top-[12%] h-52 -rotate-6 md:left-[9%] md:top-[10%] md:h-72 hero-card-shadow',
  },
  {
    src: assetUrl('/assets/cards/platinum.webp'),
    alt: 'Cartão Sicredi Platinum',
    className:
      'left-[50%] bottom-[17%] h-32 -rotate-2 md:left-[42%] md:bottom-[15%] md:h-48 hero-card-shadow',
  },
  {
    src: assetUrl('/assets/cards/gold.webp'),
    alt: 'Cartão Sicredi Gold',
    className:
      'right-[3%] top-[32%] h-32 rotate-6 md:right-[5%] md:top-[33%] md:h-48 hero-card-shadow',
  },
];

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-[0.82fr_1.18fr] md:px-8 md:pb-24 md:pt-16">
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
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className="sicredi-box hero-benefit group border border-sicredi-soft bg-white p-4 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-none bg-sicredi-soft/65">
                  <img src={benefit.icon} alt="" aria-hidden="true" className="h-6 w-6" />
                </span>
                <h2 className="mt-3 text-sm font-extrabold text-sicredi-text">{benefit.title}</h2>
                <p className="mt-1 text-xs font-bold leading-5 text-sicredi-muted">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-16 top-8 h-72 w-72 rounded-full bg-sicredi-soft blur-3xl" />
          <div className="sicredi-box hero-stage relative min-h-[390px] overflow-hidden p-5 shadow-soft md:min-h-[520px] md:p-8">
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
            <div className="sicredi-box hero-stage__caption absolute bottom-5 left-5 z-30 max-w-36 bg-white/12 p-4 text-white backdrop-blur-md md:bottom-7 md:left-7 md:max-w-56 md:p-5">
              <p className="font-heading text-2xl font-bold italic leading-tight md:text-3xl">
                Black, Platinum e Gold
              </p>
              <p className="mt-2 text-xs font-bold leading-5 text-white/86 md:text-sm">
                Opções para viagens, segurança e compras do dia a dia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
