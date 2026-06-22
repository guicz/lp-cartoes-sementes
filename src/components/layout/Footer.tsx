import { Link } from 'react-router-dom';
import { assetUrl } from '@/lib/assets';

type FooterLink =
  | { kind: 'internal'; label: string; to: string }
  | { kind: 'external'; label: string; href: string };

const legalLinks: FooterLink[] = [
  { kind: 'internal', label: 'Política de Privacidade', to: '/legal/privacidade' },
  { kind: 'internal', label: 'Política de Cookies', to: '/legal/cookies' },
  { kind: 'internal', label: 'Consentimentos', to: '/legal/consentimentos' },
  {
    kind: 'external',
    label: 'Telefones e atendimento',
    href: 'https://www.sicredi.com.br/site/atendimento/',
  },
];

const quickLinks = [
  {
    label: 'Atendimento',
    icon: assetUrl('/assets/icons/aplicativo.svg'),
    href: 'https://www.sicredi.com.br/site/atendimento/',
  },
  {
    label: 'Encontrar unidade',
    icon: assetUrl('/assets/icons/viagem.svg'),
    href: 'https://www.sicredi.com.br/site/atendimento/encontre-uma-agencia/',
  },
  {
    label: 'Cartões',
    icon: assetUrl('/assets/icons/cartao-credito.svg'),
    href: 'https://www.sicredi.com.br/site/cartoes/cartao-para-voce/',
  },
];

export function Footer() {
  return (
    <footer className="border-t border-sicredi-soft bg-white text-sicredi-text">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1fr_0.78fr_1fr] md:px-8 md:py-16">
        <div>
          <img
            src={assetUrl('/assets/logos/sicredi-logo-official.svg')}
            alt="Sicredi"
            width="1819"
            height="449"
            loading="lazy"
            decoding="async"
            className="h-10 w-auto"
          />

          <div className="mt-7 text-sm leading-7 text-sicredi-muted">
            <p className="text-lg font-bold text-sicredi-text">Sicredi Sementes do Sul</p>
            <p className="mt-4">Rua Santo Alves Corrêa, 43, Centro, Espumoso/RS</p>
            <p>SAC Sicredi: 0800 724 7220</p>
            <p>Ouvidoria Sicredi: 0800 646 2519</p>
            <p>Fone: (54) 3383 3850 · Nº da Cooperativa: 0218</p>
          </div>

          <div className="mt-6 flex gap-3">
            {quickLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="sicredi-box flex h-10 w-10 items-center justify-center bg-sicredi-soft transition hover:bg-sicredi-green"
              >
                <img src={item.icon} alt="" aria-hidden="true" className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Links Sicredi">
          <h2 className="font-heading text-lg font-bold text-sicredi-text">Links Sicredi</h2>
          <ul className="mt-5 space-y-4 text-sm text-sicredi-muted">
            {legalLinks.map((item) => (
              <li key={item.label}>
                {item.kind === 'internal' ? (
                  <Link to={item.to} className="transition hover:text-sicredi-green">
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-sicredi-green"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-lg font-bold text-sicredi-text">Informações legais</h2>
          <details className="sicredi-box footer-disclaimer mt-5 border border-sicredi-soft bg-white">
            <summary className="cursor-pointer px-5 py-4 text-sm font-extrabold text-sicredi-dark">
              Ver disclaimer completo
            </summary>
            <div className="border-t border-sicredi-soft/70 px-5 py-4 text-xs leading-6 text-sicredi-muted">
              <p>
                A solicitação e a concessão dos cartões estão sujeitas à análise de crédito,
                aprovação cadastral, disponibilidade na cooperativa/região, contratação e regras das
                bandeiras.
              </p>
              <p className="mt-2">
                Benefícios, pontuações, limites, tarifas, anuidades, prazos e condições podem variar
                conforme o cartão contratado e ser alterados sem aviso prévio. Consulte sua unidade
                de atendimento Sicredi antes de contratar.
              </p>
            </div>
          </details>
          <p className="mt-6 text-sm text-sicredi-muted">
            © 2026 Sicredi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
