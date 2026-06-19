import { assetUrl } from '@/lib/assets';

export function Footer() {
  return (
    <footer className="border-t border-sicredi-soft bg-white text-sicredi-text">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 py-12 text-center md:px-8">
        <img
          src={assetUrl('/assets/logos/sicredi-logo-full.png')}
          alt="Sicredi"
          className="h-16 w-auto"
        />

        <div className="mt-5 max-w-3xl text-sm leading-6 text-sicredi-muted">
          <p className="text-base font-extrabold text-sicredi-text">Sicredi Sementes do Sul</p>
          <p className="mt-1">
            Rua Santo Alves Corrêa, 43, Centro, Espumoso/RS · Fone: (54) 3383 3850
          </p>
          <p>Nº da Cooperativa: 0218 · Presente no Rio Grande do Sul e em Minas Gerais.</p>
        </div>

        <div className="mt-8 max-w-4xl text-xs leading-6 text-sicredi-muted">
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
