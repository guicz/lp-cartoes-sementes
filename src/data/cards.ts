import { assetUrl } from '@/lib/assets';
import type { Benefit, SicrediCard } from '@/types/cards';

export const cards: SicrediCard[] = [
  {
    id: 'mastercard-black',
    name: 'Sicredi Mastercard Black™',
    subtitle: 'Para quem busca possibilidades de benefícios em viagens e serviços premium.',
    image: assetUrl('/assets/cards/black.webp'),
    imageAlt: 'Cartão Sicredi Mastercard Black colorido',
    tier: 'premium',
    points: 'Até 2,5 pontos por dólar',
    highlights: [
      'Possibilidade de acessos a salas VIP conforme regras',
      'Programa Mastercard Surpreenda',
      'Experiências selecionadas conforme condições',
    ],
    bestFor: 'Quem quer avaliar benefícios de viagem com pontos e conveniência conforme plano e regras vigentes.',
  },
  {
    id: 'platinum',
    name: 'Sicredi Platinum',
    subtitle: 'Para equilibrar rotina, segurança e possibilidades de benefícios em viagens.',
    image: assetUrl('/assets/cards/platinum.webp'),
    imageAlt: 'Cartão Sicredi Platinum colorido',
    tier: 'equilibrio',
    points: '1,5 ponto por dólar',
    highlights: ['Benefícios conforme bandeira', 'Condições de uso no dia a dia', 'Possibilidade de vantagens em viagens'],
    bestFor: 'Quem quer avaliar um cartão versátil para compras, viagens e planejamento cotidiano.',
  },
  {
    id: 'gold',
    name: 'Sicredi Gold',
    subtitle: 'Para compras do dia a dia com praticidade e condições conforme contratação.',
    image: assetUrl('/assets/cards/gold.webp'),
    imageAlt: 'Cartão Sicredi Gold colorido',
    tier: 'rotina',
    points: '1 ponto por dólar',
    highlights: [
      'Possibilidade de garantia estendida conforme regras',
      'Compras com recursos adicionais de proteção',
      'Rotina simples',
    ],
    bestFor: 'Quem quer praticidade e benefícios essenciais conforme condições do cartão contratado.',
  },
];

export const benefits: Benefit[] = [
  {
    title: 'Pagamento por aproximação',
    text: 'Pague de forma rápida e segura apenas aproximando o cartão da maquininha.',
    icon: assetUrl('/assets/icons/cartao-credito.svg'),
  },
  {
    title: 'Carteira digital',
    text: 'Cadastre seu cartão no smartphone ou smartwatch para comprar com mais praticidade.',
    icon: assetUrl('/assets/icons/aplicativo.svg'),
  },
  {
    title: 'Cartão virtual',
    text: 'Use uma opção adicional de segurança para compras online, sem complicar sua rotina.',
    icon: assetUrl('/assets/icons/compras-online.svg'),
  },
  {
    title: 'Programa de recompensas',
    text: 'Acumule pontos em cartões participantes e troque por produtos, viagens ou parceiros conforme regras do programa.',
    icon: assetUrl('/assets/icons/recompensas.svg'),
  },
  {
    title: 'Mais prazo para pagar',
    text: 'Conforme data de compra, vencimento e condições do cartão, você pode ter prazo adicional para pagar.',
    icon: assetUrl('/assets/icons/prazo.svg'),
  },
  {
    title: 'Benefícios para viagens',
    text: 'Opções premium podem contar com vantagens para momentos fora da rotina, conforme plano, bandeira e regras vigentes.',
    icon: assetUrl('/assets/icons/viagem.svg'),
  },
];
