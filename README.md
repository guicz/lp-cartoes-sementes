# LP Cartões Sicredi Sementes do Sul

Landing page de campanha para divulgar os cartões Sicredi de pessoa física, com foco em benefícios, comparação das opções Black, Platinum e Gold e caminhos de atendimento.

## Active Features

- Hero de campanha com CTA para conhecer cartões e falar com o Sicredi.
- Grade de benefícios: aproximação, carteira digital, cartão virtual, recompensas, prazo e viagens.
- Comparação dos cartões Sicredi Mastercard Black™, Platinum e Gold.
- Filtro por perfil de uso: todos, viagens, equilíbrio e rotina.
- Seção de orientação para solicitação com links oficiais Sicredi.
- Assets oficiais locais de logo, cartões e ícones Sicredi.
- Seção de cartões com imagens em halos suaves, sem molduras retangulares atrás dos cartões.
- Vitrine de cartões participantes em fundo claro, com texto escuro legível e composição assimétrica Black/Platinum/Gold.
- Rodapé centralizado com logo oficial, dados da Sicredi Sementes do Sul e disclaimer sem caixa visual.
- Servidor Express para Hostinger Node.js Hosting com SPA fallback e `/api/health`.

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

O arquivo `deploy.config.json` documenta esses mesmos parâmetros.

Para GitHub Pages legado, o Vite ainda respeita `GITHUB_PAGES=true` para base `/lp-cartoes-sementes/`, mas o fluxo principal atual é Hostinger com base `/`.

## Notes

- Não há persistência, autenticação ou coleta de dados nesta versão.
- Benefícios e disponibilidade devem ser validados com a cooperativa/região antes de produção.
- Ícones visíveis devem permanecer restritos aos SVGs oficiais em `public/assets/icons`.
- Configure `APP_URL` no hPanel se o domínio final for usado por monitoramento ou integrações futuras.
