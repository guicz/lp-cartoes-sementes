import { assetUrl } from '@/lib/assets';
import { cooperativeInfo, officialUrls } from '@/lib/official-links';

const navItems = [
  { label: 'Quem somos', href: '/#institucional' },
  { label: 'Benefícios', href: '/#beneficios' },
  { label: 'Cartões', href: '/#cartoes' },
  { label: 'Como pedir', href: '/#como-pedir' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sicredi-soft/70 bg-white/95 backdrop-blur">
      <div className="border-b border-sicredi-soft/60 bg-sicredi-dark text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-2 text-xs font-bold leading-5 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            {cooperativeInfo.shortName} · CNPJ {cooperativeInfo.cnpj} ·{' '}
            {cooperativeInfo.system}
          </p>
          <p className="text-white/82">
            Atendimento e contratação continuam no ambiente oficial sicredi.com.br.
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <a href="/#inicio" aria-label="Voltar ao início">
          <img
            src={assetUrl('/assets/logos/sicredi-logo-official.svg')}
            alt="Sicredi"
            width="1819"
            height="449"
            decoding="async"
            fetchPriority="high"
            className="h-10 w-auto sm:h-11"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold text-sicredi-text md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-sicredi-green">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={officialUrls.cards}
          target="_blank"
          rel="noreferrer"
          data-gtm-trigger="header_cta_site_oficial_cartoes"
          className="sicredi-box inline-flex items-center justify-center bg-sicredi-green px-4 py-3 text-sm font-extrabold text-white transition hover:bg-sicredi-dark"
        >
          Peça o seu
        </a>
      </div>
    </header>
  );
}
