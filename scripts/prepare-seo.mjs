import fs from 'node:fs';
import path from 'node:path';

const fallbackUrl = 'https://cartoes.sicredisementesdosul.com.br/';
const rawUrl = process.env.APP_URL || process.env.VITE_SITE_URL || fallbackUrl;
const siteUrl = new URL(rawUrl).toString().replace(/\/$/, '');
const publicDir = path.resolve('public');
const lastmod = new Date().toISOString().slice(0, 10);
const sitemapUrls = ['/', '/legal/privacidade', '/legal/cookies', '/legal/consentimentos'];

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
    `Landing page da Sicredi Sementes do Sul para orientar pessoas interessadas em cartões de crédito Sicredi Black, Platinum e Gold.\n\n` +
    `## Recursos canônicos\n\n` +
    `- Página principal: ${siteUrl}/\n` +
    `- Política de Privacidade: ${siteUrl}/legal/privacidade\n` +
    `- Política de Cookies: ${siteUrl}/legal/cookies\n` +
    `- Consentimentos: ${siteUrl}/legal/consentimentos\n` +
    `- Sitemap: ${siteUrl}/sitemap.xml\n` +
    `- Cartões oficiais Sicredi: https://www.sicredi.com.br/site/cartoes/cartao-para-voce/\n\n` +
    `## Conteúdo principal\n\n` +
    `- Benefícios: pagamento por aproximação, carteira digital, cartão virtual, recompensas, mais prazo para pagar e benefícios para viagens.\n` +
    `- Cartões destacados: Sicredi Mastercard Black, Sicredi Platinum e Sicredi Gold.\n` +
    `- Atendimento: a contratação depende de análise de crédito, disponibilidade regional e regras da cooperativa.\n\n` +
    `## Observações para agentes\n\n` +
    `Não há coleta de dados, login, checkout ou formulário transacional nesta versão. Use os links oficiais da página para atendimento e confirmação de disponibilidade.\n`,
);

console.log(`SEO files generated for ${siteUrl}`);
