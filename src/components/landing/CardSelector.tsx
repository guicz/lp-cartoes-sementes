import { cards } from '@/data/cards';
import { cn } from '@/lib/utils';
import { type CardFilter, useCardFilterStore } from '@/stores/card-filter-store';
import { SectionLabel } from '@/components/landing/SectionLabel';

const filters: Array<{ value: CardFilter; label: string }> = [
  { value: 'todos', label: 'Todos' },
  { value: 'premium', label: 'Viagens' },
  { value: 'equilibrio', label: 'Equilíbrio' },
  { value: 'rotina', label: 'Rotina' },
];

export function CardSelector() {
  const { filter, setFilter } = useCardFilterStore();
  const visibleCards = filter === 'todos' ? cards : cards.filter((card) => card.tier === filter);

  return (
    <section id="cartoes" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>Escolha o melhor cartão para você</SectionLabel>
            <h2 className="mt-3 font-heading text-4xl font-bold italic leading-tight text-sicredi-text md:text-5xl">
              Do dia a dia às viagens, tem um cartão para o seu momento.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Filtrar cartões por perfil">
            {filters.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setFilter(item.value)}
                className={cn(
                  'sicredi-box min-h-11 px-5 py-2 text-sm font-extrabold transition',
                  filter === item.value
                    ? 'bg-sicredi-green text-white'
                    : 'border border-sicredi-soft bg-white text-sicredi-dark hover:bg-sicredi-soft',
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleCards.map((card) => (
            <article
              key={card.id}
              className="sicredi-box flex min-h-[560px] flex-col border border-sicredi-soft bg-white p-5 shadow-sm"
            >
              <div className="flex min-h-44 items-center justify-center bg-sicredi-surface p-4">
                <img src={card.image} alt={card.imageAlt} className="max-h-40 w-auto object-contain" />
              </div>
              <div className="flex flex-1 flex-col pt-6">
                <h3 className="font-heading text-2xl font-bold text-sicredi-text">{card.name}</h3>
                <p className="mt-2 leading-6 text-sicredi-muted">{card.subtitle}</p>
                <p className="mt-5 font-extrabold text-sicredi-dark">{card.points}</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-sicredi-muted">
                  {card.highlights.map((highlight) => (
                    <li key={highlight} className="border-l-4 border-sicredi-green pl-3">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-5 text-sm font-bold leading-6 text-sicredi-text">
                  {card.bestFor}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
