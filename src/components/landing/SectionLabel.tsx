import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-heading text-sm font-bold uppercase tracking-normal text-sicredi-green">
      {children}
    </p>
  );
}
