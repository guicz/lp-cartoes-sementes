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
    width: 154,
    height: 247,
    fetchPriority: 'high' as const,
    className:
      'left-[7%] top-[10%] h-36 -rotate-6 sm:h-44 md:left-[8%] md:top-[8%] md:h-56 hero-card-shadow',
  },
  {
    src: assetUrl('/assets/cards/platinum.webp'),
    alt: 'Cartão Sicredi Platinum',
    width: 238,
    height: 163,
    fetchPriority: 'auto' as const,
    className:
      'left-[25%] top-[49%] h-24 -rotate-2 sm:h-28 md:left-[30%] md:top-[50%] md:h-36 hero-card-shadow',
  },
  {
    src: assetUrl('/assets/cards/gold.webp'),
    alt: 'Cartão Sicredi Gold',
    width: 238,
    height: 163,
    fetchPriority: 'auto' as const,
    className:
      'right-[4%] top-[31%] h-24 rotate-6 sm:h-28 md:right-[5%] md:top-[30%] md:h-36 hero-card-shadow',
  },
];

export function Hero() {
  return (
    <section id="inicio" className="hero-section overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-14">
        <div className="hero-banner sicredi-box relative overflow-hidden shadow-soft">
          <img
            src={assetUrl('/assets/hero/humanized-service.jpg')}
            alt="Pessoas conversando sobre planejamento financeiro em atendimento"
            width="1920"
            height="1080"
            decoding="async"
            fetchPriority="high"
            className="hero-banner__photo"
          />
          <div className="hero-banner__veil" />
          <div className="hero-banner__content">
            <p className="font-heading text-sm font-bold uppercase tracking-normal text-sicredi-soft">
              Cartões de crédito
            </p>
            <h1 className="mt-4 max-w-3xl font-heading text-5xl font-bold italic leading-tight text-white sm:text-6xl lg:text-7xl">
              Peça seu cartão Sicredi
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Mais praticidade, segurança e vantagens para comprar, pagar, viajar e aproveitar
              benefícios que combinam com o seu momento.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cartoes"
                className="sicredi-box inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-extrabold text-sicredi-dark transition hover:bg-sicredi-soft"
              >
                Conhecer cartões
              </a>
              <a
                href="#como-pedir"
                className="sicredi-box inline-flex min-h-12 items-center justify-center border border-white/72 bg-white/10 px-6 py-3 font-extrabold text-white backdrop-blur-md transition hover:bg-white/18"
              >
                Falar com o Sicredi
              </a>
            </div>
          </div>
          <div className="hero-card-cluster" aria-label="Cartões Sicredi Black, Platinum e Gold">
            {heroCards.map((card) => (
              <img
                key={card.src}
                src={card.src}
                alt={card.alt}
                width={card.width}
                height={card.height}
                decoding="async"
                fetchPriority={card.fetchPriority}
                className={`absolute w-auto object-contain ${card.className}`}
              />
            ))}
            <div className="sicredi-box hero-card-cluster__caption">
              <p className="font-heading text-xl font-bold italic leading-tight text-white md:text-2xl">
                Black, Platinum e Gold
              </p>
              <p className="mt-1 text-xs font-bold leading-5 text-white/86 md:text-sm">
                Opções para viagens, segurança e compras do dia a dia.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
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
    </section>
  );
}
