# Changelog

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
