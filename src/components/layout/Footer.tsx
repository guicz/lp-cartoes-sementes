import { assetUrl } from '@/lib/assets';

export function Footer() {
  return (
    <footer className="border-t border-sicredi-soft bg-white text-sicredi-text">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_1.4fr] md:px-8">
        <div>
          <img
            src={assetUrl('/assets/logos/sicredi-logo-full.png')}
            alt="Sicredi"
            className="h-16 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-sicredi-muted">
            Sicredi Sementes do Sul. Cartões para acompanhar diferentes momentos da sua vida.
          </p>
        </div>
        <div className="sicredi-box border border-sicredi-soft bg-sicredi-surface/70 p-5 text-sm leading-6 text-sicredi-muted">
          <p className="font-extrabold text-sicredi-text">Disclaimer</p>
          <p className="mt-2">
            A solicitação e a concessão dos cartões estão sujeitas à análise de crédito, aprovação
            cadastral, disponibilidade na cooperativa/região, contratação e regras das bandeiras.
          </p>
          <p className="mt-2">
            Benefícios, pontuações, limites, tarifas, anuidades, prazos e condições podem variar
            conforme o cartão contratado e ser alterados sem aviso prévio. Consulte sua unidade de
            atendimento Sicredi antes de contratar.
          </p>
        </div>
      </div>
    </footer>
  );
}
