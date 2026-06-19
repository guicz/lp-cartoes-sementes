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
        <p className="text-sm leading-6 text-sicredi-muted">
          Benefícios, pontuações, disponibilidade de cartões e condições estão sujeitos à análise,
          contratação, regras das bandeiras e disponibilidade na cooperativa/região. Consulte sua
          unidade de atendimento Sicredi antes de contratar.
        </p>
      </div>
    </footer>
  );
}
