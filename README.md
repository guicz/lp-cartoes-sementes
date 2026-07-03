# LP Cartões Sicredi Sementes do Sul

Landing page informativa da Sicredi Sementes do Sul para divulgar cartões Sicredi de pessoa física, com foco em benefícios, comparação das opções Black, Platinum e Gold e direcionamento para canais oficiais de atendimento e contratação.

## Active Features

- Hero de campanha com CTA para o site oficial Sicredi.
- Identificação institucional da Sicredi Sementes do Sul, CNPJ e vínculo ao Sistema Sicredi.
- Grade de benefícios: aproximação, carteira digital, cartão virtual, recompensas, prazo e viagens.
- Comparação dos cartões Sicredi Mastercard Black™, Platinum e Gold.
- Filtro por perfil de uso: todos, viagens, equilíbrio e rotina.
- Seção de orientação para solicitação com links oficiais Sicredi e UTM padronizada.
- Assets oficiais locais de logo, cartões e ícones Sicredi.
- Seção de cartões com imagens em halos suaves, sem molduras retangulares atrás dos cartões.
- Vitrine de cartões participantes em fundo claro, com texto escuro legível e composição assimétrica Black/Platinum/Gold.
- Rodapé institucional com logo oficial, razão social, CNPJ, endereço, telefone, SAC, Ouvidoria, links oficiais e disclaimer legal de cartões.
- Servidor Express para Hostinger Node.js Hosting com SPA fallback e `/api/health`.
- SEO técnico no build: title, description, canonical, Open Graph com identificação da cooperativa, Twitter Card, JSON-LD, `robots.txt`, `sitemap.xml` e `llms.txt`.
- Logo oficial Sicredi em SVG, favicon alinhado à referência de Consórcios e imagem Open Graph quadrada dedicada para evitar corte em WhatsApp e compartilhamentos.
- Banner principal humanizado com fotografia de atendimento/planejamento financeiro e cartões em apoio visual.
- Páginas legais: Política de Privacidade, Política de Cookies e Consentimentos.
- Rodapé em três colunas com links legais e disclaimer recolhido por padrão.
- Otimizações de performance: preload do card principal do hero, dimensões fixas nas imagens críticas e cache HTTP para assets versionados.

## Tech Stack

- Vite + React + TypeScript.
- Tailwind CSS com tokens Sicredi.
- React Router para rotas.
- Zustand para estado do filtro de cartões.
- TanStack Query configurado para evolução futura.
- Express para servir o build estático na Hostinger.
- npm + `package-lock.json` para deploy no hPanel.
- Vitest + Testing Library para teste de sanidade.
- ESLint e Prettier para qualidade.

## Quick Start

```bash
npm ci
npm run dev
```

Validação local:

```bash
npm run check
npm run test
npm run build
npm start
```

## Deployment

Deploy alvo: Hostinger Node.js Hosting via hPanel Auto Git.

- Branch: `main`
- Application Root: raiz do repositório
- Node version: `20.x`
- Install command: `npm ci`
- Build command: `npm run build`
- Start command: `npm start`
- Entry point: `server.js`
- Output directory: `build`
- Environment variable recomendada: `APP_URL=https://dominio-final`

O arquivo `deploy.config.json` documenta esses mesmos parâmetros.

`APP_URL` alimenta canonical, sitemap, Open Graph e `llms.txt`. Se não estiver configurada, o build usa `https://cartoes.sicredisementesdosul.com.br/` como fallback.

Para GitHub Pages legado, o Vite ainda respeita `GITHUB_PAGES=true` para base `/lp-cartoes-sementes/`, mas o fluxo principal atual é Hostinger com base `/`.

## Notes

- Não há persistência, autenticação, formulário local, checkout ou coleta de dados nesta versão.
- Atendimento, solicitação, análise de crédito e contratação seguem no ambiente oficial Sicredi.
- Benefícios, pontuações, tarifas, anuidades, limites e disponibilidade devem ser validados com a cooperativa/região e documentos oficiais antes de contratação.
- Ícones visíveis devem permanecer restritos aos SVGs oficiais em `public/assets/icons`.
- Configure `APP_URL` no hPanel com o domínio público final antes do deploy de produção.
- A foto humanizada do banner está versionada como asset local em `public/assets/hero/humanized-service.jpg`.
