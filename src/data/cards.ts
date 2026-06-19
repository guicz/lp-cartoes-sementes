import { assetUrl } from '@/lib/assets';
import type { Benefit, SicrediCard } from '@/types/cards';

export const cards: SicrediCard[] = [
  {
    id: 'mastercard-black',
    name: 'Sicredi Mastercard Black™',
    subtitle: 'Para quem valoriza viagens e vantagens exclusivas.',
    image: assetUrl('/assets/cards/black.webp'),
    imageAlt: 'Cartão Sicredi Mastercard Black colorido',
    tier: 'premium',
    points: 'Até 2,5 pontos por dólar',
    highlights: ['12 acessos por ano a salas VIP', 'Mastercard Surpreenda', 'Experiências selecionadas'],
    bestFor: 'Quem quer benefícios de viagem com boa combinação entre pontos e conveniência.',
  },
  {
    id: 'platinum',
    name: 'Sicredi Platinum',
    subtitle: 'Para equilibrar rotina, segurança e viagens.',
    image: assetUrl('/assets/cards/platinum.webp'),
    imageAlt: 'Cartão Sicredi Platinum colorido',
    tier: 'equilibrio',
    points: '1,5 ponto por dólar',
    highlights: ['Benefícios para viagens', 'Benefícios de bandeira', 'Uso no dia a dia'],
    bestFor: 'Quem quer um cartão versátil para compras, viagens e planejamento cotidiano.',
  },
  {
    id: 'gold',
    name: 'Sicredi Gold',
    subtitle: 'Para compras do dia a dia com praticidade.',
    image: assetUrl('/assets/cards/gold.webp'),
    imageAlt: 'Cartão Sicredi Gold colorido',
    tier: 'rotina',
    points: '1 ponto por dólar',
    highlights: ['Garantia estendida original', 'Compras mais protegidas', 'Rotina simples'],
    bestFor: 'Quem quer praticidade, benefícios essenciais e segurança nas compras cotidianas.',
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
    text: 'Acumule pontos em cartões participantes e troque por produtos, viagens ou parceiros.',
    icon: assetUrl('/assets/icons/recompensas.svg'),
  },
  {
    title: 'Mais prazo para pagar',
    text: 'Conforme a data de compra e vencimento, você pode ter até 40 dias para pagar.',
    icon: assetUrl('/assets/icons/prazo.svg'),
  },
  {
    title: 'Benefícios para viagens',
    text: 'Opções premium contam com vantagens que ajudam em momentos fora da rotina.',
    icon: assetUrl('/assets/icons/viagem.svg'),
  },
];
