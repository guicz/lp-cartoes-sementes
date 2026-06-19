export function Footer() {
  return (
    <footer className="bg-sicredi-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_1.4fr] md:px-8">
        <div>
          <img
            src="/assets/logos/sicredi-logo-full.png"
            alt="Sicredi"
            className="h-16 w-auto bg-white p-2"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/85">
            Sicredi Sementes do Sul. Cartões para acompanhar diferentes momentos da sua vida.
          </p>
        </div>
        <p className="text-sm leading-6 text-white/80">
          Benefícios, pontuações, disponibilidade de cartões e condições estão sujeitos à análise,
          contratação, regras das bandeiras e disponibilidade na cooperativa/região. Consulte sua
          unidade de atendimento Sicredi antes de contratar.
        </p>
      </div>
    </footer>
  );
}
