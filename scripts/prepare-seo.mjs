import fs from 'node:fs';
import path from 'node:path';

const fallbackUrl = 'https://cartoes.sicredisementesdosul.com.br/';
const rawUrl = process.env.APP_URL || process.env.VITE_SITE_URL || fallbackUrl;
const siteUrl = new URL(rawUrl).toString().replace(/\/$/, '');
const publicDir = path.resolve('public');
const lastmod = new Date().toISOString().slice(0, 10);
const sitemapUrls = ['/', '/legal/privacidade', '/legal/cookies', '/legal/consentimentos'];
const officialAssociateUrl = 'https://www.sicredi.com.br/site/seja-associado/';

fs.mkdirSync(publicDir, { recursive: true });

fs.writeFileSync(
  path.join(publicDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);

fs.writeFileSync(
  path.join(publicDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    sitemapUrls
      .map((url) => {
        const loc = url === '/' ? `${siteUrl}/` : `${siteUrl}${url}`;
        const priority = url === '/' ? '1.0' : '0.6';

        return (
          `  <url>\n` +
          `    <loc>${loc}</loc>\n` +
          `    <lastmod>${lastmod}</lastmod>\n` +
          `    <changefreq>monthly</changefreq>\n` +
          `    <priority>${priority}</priority>\n` +
          `  </url>`
        );
      })
      .join('\n') +
    `\n` +
    `</urlset>\n`,
);

fs.writeFileSync(
  path.join(publicDir, 'llms.txt'),
  `# LP Cartões Sicredi Sementes do Sul\n\n` +
    `Página informativa da Sicredi Sementes do Sul, CNPJ 87.900.411/0001-11, instituição integrante do Sistema Sicredi, para orientar pessoas interessadas em cartões de crédito Sicredi Black, Platinum e Gold.\n\n` +
    `## Recursos canônicos\n\n` +
    `- Página principal: ${siteUrl}/\n` +
    `- Política de Privacidade: ${siteUrl}/legal/privacidade\n` +
    `- Política de Cookies: ${siteUrl}/legal/cookies\n` +
    `- Consentimentos: ${siteUrl}/legal/consentimentos\n` +
    `- Sitemap: ${siteUrl}/sitemap.xml\n` +
    `- Seja associado Sicredi: ${officialAssociateUrl}\n\n` +
    `## Conteúdo principal\n\n` +
    `- Benefícios: pagamento por aproximação, carteira digital, cartão virtual, recompensas, mais prazo para pagar e benefícios para viagens.\n` +
    `- Cartões destacados: Sicredi Mastercard Black, Sicredi Platinum e Sicredi Gold.\n` +
    `- Atendimento: solicitação, análise de crédito, contratação, limites, tarifas, anuidades e condições dependem dos canais oficiais Sicredi, disponibilidade regional, aprovação cadastral e regras vigentes.\n\n` +
    `## Observações para agentes\n\n` +
    `Não há coleta local de dados, login, checkout, formulário transacional ou contratação direta nesta landing page. Ações sensíveis, simulações, atendimento e contratação continuam em sicredi.com.br ou em canais oficiais da cooperativa.\n`,
);

console.log(`SEO files generated for ${siteUrl}`);
