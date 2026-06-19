import { benefits } from '@/data/cards';
import { SectionLabel } from '@/components/landing/SectionLabel';

export function BenefitGrid() {
  return (
    <section id="beneficios" className="bg-sicredi-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Vantagens que combinam com você</SectionLabel>
          <h2 className="mt-3 font-heading text-4xl font-bold italic leading-tight text-sicredi-text md:text-5xl">
            Use do seu jeito, com benefícios para a rotina.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="sicredi-box bg-white p-6 shadow-sm">
              <img src={benefit.icon} alt="" aria-hidden="true" className="h-12 w-12" />
              <h3 className="mt-5 font-heading text-2xl font-bold text-sicredi-text">
                {benefit.title}
              </h3>
              <p className="mt-3 leading-7 text-sicredi-muted">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
