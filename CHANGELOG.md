# Changelog

## v1.14

- **Change Type:** Feature
- **Description:** Redesenho da seção de benefícios com fundo branco/verde suave, chamada lateral em verde e cards com acentos visuais Sicredi.
- **Rationale:** Reduzir a sensação cinza e fria da seção mantendo ícones oficiais, contraste e hierarquia.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.13

- **Change Type:** Fix
- **Description:** Separação estrutural entre a cena dos cartões e a faixa translúcida do hero.
- **Rationale:** Eliminar risco de sobreposição por cache, tamanho de imagem ou variação de viewport.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.12

- **Change Type:** Fix
- **Description:** Reserva de faixa inferior no hero para manter a legenda translúcida fora da área dos cartões Black, Platinum e Gold.
- **Rationale:** Corrigir a sobreposição visual em breakpoints reais sem remover o efeito translúcido aprovado.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.11

- **Change Type:** Fix
- **Description:** Restauração da legenda translúcida do hero com área livre para não sobrepor os cartões.
- **Rationale:** Preservar o efeito visual aprovado e corrigir a interferência sobre o cartão Platinum.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.10

- **Change Type:** Fix
- **Description:** Reposicionamento da legenda do hero para não cobrir o cartão Platinum.
- **Rationale:** Corrigir sobreposição visual identificada em revisão de produção.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.9

- **Change Type:** Feature
- **Description:** Refinamento do hero em formato de banner premium e substituição das três caixas cinzas por benefícios com ícones oficiais Sicredi.
- **Rationale:** Melhorar hierarquia visual e aproveitar melhor a direção da arte de referência sem quebrar regras de marca.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.8

- **Change Type:** Feature
- **Description:** Reinterpretação do hero com palco verde escuro, linhas de luz discretas e cartões Black, Platinum e Gold em camadas.
- **Rationale:** Aproveitar a direção visual da arte de referência sem reintroduzir cartões verdes/descontinuados.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.7

- **Change Type:** Fix
- **Description:** Reorganização da seção de cartões para centralizar o grid após a remoção dos cartões verdes.
- **Rationale:** Evitar desequilíbrio visual causado por layout anterior dimensionado para quatro cartões.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.6

- **Change Type:** Fix
- **Description:** Remoção dos cartões verdes/internacional das composições e da lista de cartões, troca do rodapé para fundo branco sem caixa atrás da logo.
- **Rationale:** Corrigir informação de produto descontinuado e eliminar ruído visual no rodapé.
- **Tech Debt:** Validar com a cooperativa a lista final de cartões vigentes antes de tráfego pago.

## v1.5

- **Change Type:** Fix
- **Description:** Correção de roteamento e caminhos de assets no GitHub Pages usando `BASE_URL` do Vite.
- **Rationale:** Evitar tela de "Página não encontrada" e imagens quebradas quando a LP roda em `/lp-cartoes-sementes/`.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.4

- **Change Type:** Fix
- **Description:** Alteração do deploy para publicar o build na branch `gh-pages`, evitando dependência da configuração inicial de GitHub Pages via Actions.
- **Rationale:** Contornar bloqueio de Pages não habilitado nas configurações do repositório sem exigir acesso administrativo pela automação.
- **Tech Debt:** Confirmar no GitHub Settings > Pages se a fonte ficou apontada para `gh-pages`/root.

## v1.3

- **Change Type:** Fix
- **Description:** Ajuste do workflow para `pnpm@10.15.1`, compatível com Node.js 20 LTS no GitHub Actions.
- **Rationale:** Corrigir falha de deploy causada por incompatibilidade entre `pnpm@11` e Node 20.
- **Tech Debt:** Reavaliar upgrade para Node 22/24 e pnpm 11 somente quando o stack padrão do projeto mudar.

## v1.2

- **Change Type:** Config
- **Description:** Configuração de deploy automático no GitHub Pages com workflow de GitHub Actions e `base` condicional do Vite.
- **Rationale:** Permitir execução pública da LP direto no repositório GitHub sem alterar o comportamento local de desenvolvimento.
- **Tech Debt:** O GitHub Pages precisa estar habilitado para GitHub Actions nas configurações do repositório caso a primeira execução falhe por política do repo.

## v1.1

- **Change Type:** Fix
- **Description:** Troca da aplicação visual de logo para PNG oficial aparado por área útil, mantendo o asset original e sem redesenho/recolorização.
- **Rationale:** Correção de legibilidade no cabeçalho e rodapé identificada durante revisão visual.
- **Tech Debt:** Confirmar com a cooperativa se existe versão horizontal oficial preferencial para header compacto.

## v1.0

- **Change Type:** Feature
- **Description:** Criação da landing page React para cartões Sicredi Sementes do Sul.
- **Rationale:** Implementação inicial da campanha com hierarquia clara, assets oficiais e escopo sem backend para reduzir risco operacional.
- **Tech Debt:** Falta configuração real de Firebase Hosting e validação final com equipe Sicredi sobre disponibilidade regional dos cartões/benefícios.

## v0.1

- **Change Type:** Config
- **Description:** Normalização da base Vite, React, TypeScript, Tailwind, ESLint, Prettier e Vitest.
- **Rationale:** Padronização de stack para facilitar manutenção e validação antes de evolução visual.
- **Tech Debt:** Ambiente local usa runtime empacotado do Codex nesta execução porque `node` e `pnpm` não estavam no PATH do sistema.
