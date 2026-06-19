export function HowToRequest() {
  return (
    <section id="como-pedir" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.8fr_1fr] md:px-8">
        <div className="sicredi-box bg-sicredi-green p-8 text-white md:p-10">
          <p className="font-heading text-sm font-bold uppercase tracking-normal">Como pedir</p>
          <h2 className="mt-3 font-heading text-4xl font-bold italic leading-tight md:text-5xl">
            Escolha o cartão que combina com você.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/90">
            Fale com a sua unidade Sicredi Sementes do Sul para confirmar disponibilidade,
            condições e o próximo passo da solicitação.
          </p>
        </div>
        <div className="grid content-center gap-4">
          {[
            'Confira as opções e benefícios que fazem sentido para sua rotina.',
            'Converse com o Sicredi para validar disponibilidade e análise de crédito.',
            'Após a aprovação, acompanhe o uso pelo app e conte com cartão virtual e carteiras digitais.',
          ].map((step, index) => (
            <div key={step} className="sicredi-box border border-sicredi-soft bg-sicredi-surface p-5">
              <p className="text-sm font-extrabold text-sicredi-green">Passo {index + 1}</p>
              <p className="mt-2 text-lg font-bold leading-7 text-sicredi-text">{step}</p>
            </div>
          ))}
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.sicredi.com.br/site/cartoes/cartao-para-voce/"
              target="_blank"
              rel="noreferrer"
              className="sicredi-box inline-flex min-h-12 items-center justify-center bg-sicredi-green px-6 py-3 font-extrabold text-white transition hover:bg-sicredi-dark"
            >
              Abrir página oficial
            </a>
            <a
              href="https://www.sicredi.com.br/site/atendimento/encontre-uma-agencia/"
              target="_blank"
              rel="noreferrer"
              className="sicredi-box inline-flex min-h-12 items-center justify-center border border-sicredi-green bg-white px-6 py-3 font-extrabold text-sicredi-dark transition hover:bg-sicredi-soft"
            >
              Encontrar atendimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
