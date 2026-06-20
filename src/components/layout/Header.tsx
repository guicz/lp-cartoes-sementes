import { assetUrl } from '@/lib/assets';

const navItems = [
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Cartões', href: '#cartoes' },
  { label: 'Como pedir', href: '#como-pedir' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sicredi-soft/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <a href="#inicio" aria-label="Voltar ao início">
          <img
            src={assetUrl('/assets/logos/sicredi-logo-full.png')}
            alt="Sicredi"
            width="520"
            height="376"
            decoding="async"
            fetchPriority="high"
            className="h-12 w-auto sm:h-14"
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
          href="#como-pedir"
          className="sicredi-box inline-flex items-center justify-center bg-sicredi-green px-4 py-3 text-sm font-extrabold text-white transition hover:bg-sicredi-dark"
        >
          Peça o seu
        </a>
      </div>
    </header>
  );
}
