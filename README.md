# LP Cartões Sicredi Sementes do Sul

Landing page de campanha para divulgar os cartões Sicredi de pessoa física, com foco em benefícios, comparação das opções coloridas e caminhos de atendimento.

## Active Features

- Hero de campanha com CTA para conhecer cartões e falar com o Sicredi.
- Grade de benefícios: aproximação, carteira digital, cartão virtual, recompensas, prazo e viagens.
- Comparação dos cartões Sicredi Mastercard Black™, Platinum e Gold.
- Filtro por perfil de uso: todos, viagens, equilíbrio e rotina.
- Seção de orientação para solicitação com links oficiais Sicredi.
- Assets oficiais locais de logo, cartões e ícones Sicredi.
- Layout responsivo validado em desktop e mobile via screenshot local.
- Roteamento e assets compatíveis com GitHub Pages em subdiretório.
- Remoção de cartões verdes/internacional das composições visuais.
- Grid de cartões centralizado para a linha atual Black, Platinum e Gold.
- Hero visual inspirado na arte de referência, recriado sem cartões descontinuados.
- Legenda translúcida do hero posicionada em área reservada, sem cobrir os cartões.
- Benefícios principais do hero com ícones oficiais Sicredi e microcards.
- Seção de benefícios com fundo branco/verde e cards com acentos de marca.
- Seção de cartões com imagens em halos suaves, sem molduras retangulares atrás dos cartões.

- Seções de cartões participantes e como pedir com camadas translúcidas, catavento de fundo animado no scroll e ícones oficiais nos passos.
- Vitrine de cartões participantes em fundo claro, com texto escuro legível e composição assimétrica Black/Platinum/Gold.

- Rodapé centralizado com logo oficial, dados da Sicredi Sementes do Sul e disclaimer sem caixa visual.

## Tech Stack

- Vite + React + TypeScript.
- Tailwind CSS com tokens Sicredi.
- React Router para rotas.
- Zustand para estado do filtro de cartões.
- TanStack Query configurado para evolução futura.
- Vitest + Testing Library para teste de sanidade.
- ESLint e Prettier para qualidade.

## Quick Start

```bash
pnpm install
pnpm dev
```

Build de produção:

```bash
pnpm build
pnpm preview
```

## Deployment

A LP atual é estática e não usa backend. O deploy principal está configurado por GitHub Actions para GitHub Pages:

```bash
git push origin main
```

URL esperada após o workflow: `https://guicz.github.io/lp-cartoes-sementes/`.

Para publicar em Firebase Hosting futuramente, criar `firebase.json` e rodar:

```bash
gcloud auth login
firebase deploy --only hosting
```

## Notes

- Não há persistência, autenticação ou coleta de dados nesta versão.
- Benefícios e disponibilidade devem ser validados com a cooperativa/região antes de produção.
- Ícones visíveis devem permanecer restritos aos SVGs oficiais em `public/assets/icons`.
