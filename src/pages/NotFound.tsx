import { Link } from 'react-router-dom';
import { assetUrl } from '@/lib/assets';

export function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-sicredi-surface px-5 text-center">
      <div>
        <img
          src={assetUrl('/assets/logos/sicredi-logo-full.png')}
          alt="Sicredi"
          width="520"
          height="376"
          decoding="async"
          className="mx-auto h-20 w-auto"
        />
        <h1 className="mt-8 font-heading text-4xl font-bold italic text-sicredi-text">
          Página não encontrada
        </h1>
        <Link
          to="/"
          className="sicredi-box mt-6 inline-flex bg-sicredi-green px-6 py-3 font-extrabold text-white"
        >
          Voltar para a LP
        </Link>
      </div>
    </main>
  );
}
