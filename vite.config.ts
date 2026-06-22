import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const fallbackUrl = 'https://cartoes.sicredisementesdosul.com.br/';
const siteUrl = new URL(process.env.APP_URL || process.env.VITE_SITE_URL || fallbackUrl)
  .toString()
  .replace(/\/$/, '');
const canonicalUrl = `${siteUrl}/`;
const socialImageUrl = `${siteUrl}/og-image-v138.png`;

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FinancialService',
      '@id': `${canonicalUrl}#organization`,
      name: 'Sicredi Sementes do Sul',
      alternateName: 'Cooperativa de Crédito Sicredi Sementes do Sul',
      url: canonicalUrl,
      logo: `${siteUrl}/assets/logos/sicredi-logo-official.svg`,
      image: socialImageUrl,
      telephone: '+55-54-3383-3850',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Santo Alves Corrêa, 43',
        addressLocality: 'Espumoso',
        addressRegion: 'RS',
        addressCountry: 'BR',
      },
      areaServed: ['Rio Grande do Sul', 'Minas Gerais'],
    },
    {
      '@type': 'WebSite',
      '@id': `${canonicalUrl}#website`,
      url: canonicalUrl,
      name: 'Cartões Sicredi Sementes do Sul',
      publisher: {
        '@id': `${canonicalUrl}#organization`,
      },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: 'Peça seu cartão Sicredi | Sicredi Sementes do Sul',
      description:
        'Conheça cartões Sicredi para rotina, compras, recompensas e viagens na Sicredi Sementes do Sul.',
      isPartOf: {
        '@id': `${canonicalUrl}#website`,
      },
      about: {
        '@id': `${canonicalUrl}#organization`,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: socialImageUrl,
      },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'OfferCatalog',
      '@id': `${canonicalUrl}#cartoes`,
      name: 'Cartões Sicredi para pessoa física',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Sicredi Mastercard Black',
          itemOffered: {
            '@type': 'Service',
            name: 'Cartão Sicredi Mastercard Black',
            description: 'Cartão com foco em viagens, pontos e benefícios premium.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Sicredi Platinum',
          itemOffered: {
            '@type': 'Service',
            name: 'Cartão Sicredi Platinum',
            description: 'Cartão para compras, planejamento, segurança e viagens.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Sicredi Gold',
          itemOffered: {
            '@type': 'Service',
            name: 'Cartão Sicredi Gold',
            description: 'Cartão para compras do dia a dia com praticidade.',
          },
        },
      ],
    },
  ],
};

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/lp-cartoes-sementes/' : '/',
  plugins: [
    react(),
    {
      name: 'sicredi-seo-html',
      transformIndexHtml(html) {
        return html
          .replaceAll('%SEO_CANONICAL_URL%', canonicalUrl)
          .replaceAll('%SEO_SITE_URL%', siteUrl)
          .replaceAll('%SEO_SOCIAL_IMAGE%', socialImageUrl)
          .replace(
            '%SEO_JSON_LD%',
            JSON.stringify(structuredData).replaceAll('<', '\\u003c'),
          );
      },
    },
  ],
  build: {
    outDir: path.resolve(__dirname, 'build'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
