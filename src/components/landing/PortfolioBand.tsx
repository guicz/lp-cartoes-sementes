import { assetUrl } from '@/lib/assets';

const portfolioCards = [
  {
    src: assetUrl('/assets/cards/black.webp'),
    alt: 'Cartão Sicredi Mastercard Black',
    name: 'Mastercard Black™',
    label: 'Experiências e viagens',
    points: 'Até 2,5 pontos por dólar',
    detail: 'Salas VIP, experiências selecionadas e benefícios para viajar.',
    tone: 'black',
  },
  {
    src: assetUrl('/assets/cards/platinum.webp'),
    alt: 'Cartão Sicredi Platinum',
    name: 'Platinum',
    label: 'Equilíbrio entre rotina e proteção',
    points: '1,5 ponto por dólar',
    detail: 'Versatilidade para compras, planejamento e viagens.',
    tone: 'platinum',
  },
  {
    src: assetUrl('/assets/cards/gold.webp'),
    alt: 'Cartão Sicredi Gold',
    name: 'Gold',
    label: 'Compras do dia a dia',
    points: '1 ponto por dólar',
    detail: 'Praticidade, compras protegidas e benefícios essenciais.',
    tone: 'gold',
  },
];

export function PortfolioBand() {
  return (
    <section className="portfolio-band relative overflow-hidden py-16 text-sicredi-text md:py-24">
      <img
        src={assetUrl('/assets/logos/sicredi-logo.svg')}
        alt=""
        aria-hidden="true"
        className="pinwheel-scroll portfolio-pinwheel"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[0.78fr_1.22fr] md:px-8">
        <div className="portfolio-copy">
          <p className="font-heading text-sm font-bold uppercase tracking-normal text-sicredi-green">
            Cartões participantes
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold italic leading-tight text-sicredi-text md:text-5xl">
            Benefícios para comprar, pontuar e aproveitar melhor.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-sicredi-muted">
            Os cartões Sicredi participantes acumulam pontos que podem ser trocados por produtos,
            viagens ou transferidos para programas parceiros, conforme regras de cada cartão.
          </p>
        </div>
        <div className="portfolio-showcase" aria-label="Cartões Sicredi participantes">
          {portfolioCards.map((card, index) => (
            <article
              key={card.src}
              className={`portfolio-ticket portfolio-ticket--${card.tone}`}
            >
              <span className="portfolio-ticket__number">0{index + 1}</span>
              <div className="portfolio-ticket__visual" aria-hidden="true">
                <span className="portfolio-ticket__glow" />
                <img
                  src={card.src}
                  alt=""
                  width={card.tone === 'black' ? 154 : 238}
                  height={card.tone === 'black' ? 247 : 163}
                  loading="lazy"
                  decoding="async"
                  className="portfolio-ticket__image"
                />
              </div>
              <div className="portfolio-ticket__copy">
                <p className="portfolio-ticket__name">{card.name}</p>
                <h3>{card.label}</h3>
                <p className="portfolio-ticket__points">{card.points}</p>
                <p className="portfolio-ticket__detail">{card.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
