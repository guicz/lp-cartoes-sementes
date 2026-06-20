import fs from 'node:fs';
import path from 'node:path';

const fallbackUrl = 'https://guicz.github.io/lp-cartoes-sementes/';
const rawUrl = process.env.APP_URL || process.env.VITE_SITE_URL || fallbackUrl;
const siteUrl = new URL(rawUrl).toString().replace(/\/$/, '');
const publicDir = path.resolve('public');

fs.mkdirSync(publicDir, { recursive: true });

fs.writeFileSync(
  path.join(publicDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);

fs.writeFileSync(
  path.join(publicDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <url>\n` +
    `    <loc>${siteUrl}/</loc>\n` +
    `    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>\n` +
    `    <changefreq>monthly</changefreq>\n` +
    `    <priority>1.0</priority>\n` +
    `  </url>\n` +
    `</urlset>\n`,
);

fs.writeFileSync(
  path.join(publicDir, 'llms.txt'),
  `# LP Cartões Sicredi Sementes do Sul\n\n` +
    `Landing page da Sicredi Sementes do Sul para orientar pessoas interessadas em cartões de crédito Sicredi Black, Platinum e Gold.\n\n` +
    `## Recursos canônicos\n\n` +
    `- Página principal: ${siteUrl}/\n` +
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
