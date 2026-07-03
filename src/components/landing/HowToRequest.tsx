import { assetUrl } from '@/lib/assets';
import { officialUrls } from '@/lib/official-links';

const requestSteps = [
  {
    text: 'Confira as opções e benefícios que fazem sentido para sua rotina.',
    icon: assetUrl('/assets/icons/cartao-credito.svg'),
  },
  {
    text: 'Converse com o Sicredi para validar disponibilidade e análise de crédito.',
    icon: assetUrl('/assets/icons/aplicativo.svg'),
  },
  {
    text: 'Após a aprovação, acompanhe o uso pelo app e conte com cartão virtual e carteiras digitais.',
    icon: assetUrl('/assets/icons/compras-online.svg'),
  },
];

export function HowToRequest() {
  return (
    <section id="como-pedir" className="request-section relative overflow-hidden py-16 md:py-24">
      <img
        src={assetUrl('/assets/logos/sicredi-logo.svg')}
        alt=""
        aria-hidden="true"
        className="pinwheel-scroll request-pinwheel"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.8fr_1fr] md:px-8">
        <div className="sicredi-box request-hero p-8 text-white md:p-10">
          <p className="font-heading text-sm font-bold uppercase tracking-normal text-white/86">
            Como pedir
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold italic leading-tight md:text-5xl">
            Escolha o cartão que combina com você.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/90">
            Confira as opções e siga para o ambiente oficial Sicredi para atendimento,
            solicitação, análise de crédito e contratação, conforme disponibilidade e condições.
          </p>
        </div>
        <div className="grid content-center gap-4">
          {requestSteps.map((step, index) => (
            <div key={step.text} className="sicredi-box request-step-card p-5">
              <div className="flex gap-4">
                <span className="sicredi-box flex h-12 w-12 shrink-0 items-center justify-center bg-sicredi-soft/72">
                  <img src={step.icon} alt="" aria-hidden="true" className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-sicredi-green">Passo {index + 1}</p>
                  <p className="mt-2 text-lg font-bold leading-7 text-sicredi-text">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <a
              href={officialUrls.cards}
              target="_blank"
              rel="noreferrer"
              data-gtm-trigger="como_pedir_cta_site_oficial_cartoes"
              className="sicredi-box inline-flex min-h-12 items-center justify-center bg-sicredi-green px-6 py-3 font-extrabold text-white transition hover:bg-sicredi-dark"
            >
              Ir para o site oficial
            </a>
            <a
              href={officialUrls.agency}
              target="_blank"
              rel="noreferrer"
              data-gtm-trigger="como_pedir_cta_encontrar_atendimento"
              className="sicredi-box inline-flex min-h-12 items-center justify-center border border-sicredi-green bg-white px-6 py-3 font-extrabold text-sicredi-dark transition hover:bg-sicredi-soft"
            >
              Encontrar atendimento
            </a>
          </div>
          <p className="flex items-center gap-2 text-sm leading-6 text-sicredi-muted">
            <img
              src={assetUrl('/assets/icons/cartao-credito.svg')}
              alt=""
              aria-hidden="true"
              className="h-5 w-5 shrink-0"
            />
            <span>
              <strong className="font-extrabold text-sicredi-text">Ambiente oficial:</strong> você
              será encaminhado ao site sicredi.com.br.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
