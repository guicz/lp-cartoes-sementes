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
          <div className="hero-banner__mark" aria-hidden="true" />
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
