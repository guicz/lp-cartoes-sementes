export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-[1fr_0.9fr] md:px-8 md:pb-24 md:pt-16">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-normal text-sicredi-green">
            Cartões de crédito e débito
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
          <div className="sicredi-box relative bg-sicredi-green p-5 shadow-soft md:p-8">
            <img
              src="/assets/cards/hero-cartoes.webp"
              alt="Cartões Sicredi coloridos para pessoa física"
              className="mx-auto w-full max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
