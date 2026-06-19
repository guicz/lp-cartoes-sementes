import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-sicredi-surface px-5 text-center">
      <div>
        <img src="/assets/logos/sicredi-logo-full.png" alt="Sicredi" className="mx-auto h-20 w-auto" />
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
