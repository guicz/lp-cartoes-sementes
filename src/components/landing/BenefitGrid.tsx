import { benefits } from '@/data/cards';
import { SectionLabel } from '@/components/landing/SectionLabel';

export function BenefitGrid() {
  return (
    <section id="beneficios" className="benefits-section relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-4xl">
          <SectionLabel>Vantagens que combinam com você</SectionLabel>
          <h2 className="mt-3 font-heading text-4xl font-bold italic leading-tight text-sicredi-text md:text-5xl">
            Use do seu jeito, com benefícios para a rotina.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="sicredi-box benefit-card group relative overflow-hidden border border-sicredi-soft/70 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="sicredi-box flex h-16 w-16 items-center justify-center bg-sicredi-soft/70 transition group-hover:bg-white">
                  <img src={benefit.icon} alt="" aria-hidden="true" className="h-10 w-10" />
                </span>
                <span className="font-heading text-sm font-bold italic text-sicredi-green">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold text-sicredi-text">
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
