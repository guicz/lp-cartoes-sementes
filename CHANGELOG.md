# Changelog

## v1.31

- **Change Type:** Fix
- **Description:** Geração de fallbacks estáticos para `/legal/privacidade`, `/legal/cookies` e `/legal/consentimentos` no build.
- **Rationale:** Evitar 404 em hospedagem estática quando o domínio não passa subrotas pelo fallback SPA do Express.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.30

- **Change Type:** Feature
- **Description:** Criação das páginas de Política de Privacidade, Política de Cookies e Consentimentos, revisão do rodapé em três colunas no modelo da referência e disclaimer recolhido por padrão com controle de abertura.
- **Rationale:** Completar a base legal/informativa da LP e reduzir peso visual do disclaimer sem ocultar seu conteúdo.
- **Tech Debt:** Recomenda-se validação jurídica/compliance da redação final antes de tráfego pago.

## v1.29

- **Change Type:** Feature
- **Description:** Revisão visual de marca com troca para o asset oficial `Ativo 1.svg`, favicon igual ao da LP de Consórcios Sicredi Sementes do Sul e hero/banner humanizado com fotografia de atendimento e cartões em apoio.
- **Rationale:** Reforçar fidelidade de marca, aproximar a LP da referência visual indicada e tornar o primeiro impacto mais humano, cooperativo e crível.
- **Tech Debt:** Validar a foto final com a equipe de marca caso haja preferência por banco de imagem proprietário ou sessão local.

## v1.28

- **Change Type:** Fix
- **Description:** Troca da imagem Open Graph para composição quadrada 1200x1200 com logo oficial em área segura.
- **Rationale:** Evitar corte visual nas miniaturas quadradas usadas por WhatsApp e outros previews compactos.
- **Tech Debt:** Revalidar preview após atualização de cache externo do WhatsApp/Facebook.

## v1.27

- **Change Type:** Fix
- **Description:** Substituição do favicon customizado pela logo oficial Sicredi já existente nos assets do projeto.
- **Rationale:** Evitar uso de símbolo reconstruído e manter fidelidade ao asset oficial da marca.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.26

- **Change Type:** Fix
- **Description:** Correção do fallback público de SEO/Open Graph para `https://cartoes.sicredisementesdosul.com.br/`, evitando imagem social apontando para GitHub Pages.
- **Rationale:** Garantir que `og:image`, sitemap, robots e `llms.txt` usem o domínio real da LP quando `APP_URL` não estiver configurada no ambiente de build.
- **Tech Debt:** Revalidar o preview social após o deploy e limpeza de cache do WhatsApp/Facebook.

## v1.25

- **Change Type:** Fix
- **Description:** Ajuste do favicon para usar apenas o catavento Sicredi em verde, sem fundo colorido.
- **Rationale:** Atender à preferência visual da marca no ícone da aba, removendo a caixa verde anterior.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.24

- **Change Type:** Fix
- **Description:** Inclusão de favicon SVG e troca da imagem Open Graph para arte dedicada em 1200x630, com metadados de largura, altura, tipo e texto alternativo.
- **Rationale:** Evitar corte da logo em prévias de WhatsApp/redes sociais e garantir identificação visual da página na aba do navegador.
- **Tech Debt:** Revalidar o preview no WhatsApp/Facebook após o cache externo atualizar a URL pública.

## v1.23

- **Change Type:** Feature
- **Description:** Implementação de SEO técnico e otimizações de performance para produção, incluindo metatags completas, canonical, Open Graph, Twitter Card, JSON-LD, geração de `robots.txt`, `sitemap.xml`, `llms.txt`, preload da imagem principal, dimensões explícitas em imagens e cache HTTP no servidor Express.
- **Rationale:** Melhorar indexação, compartilhamento social, legibilidade para mecanismos de busca/LLMs e estabilidade visual/performance da LP em produção.
- **Tech Debt:** Configurar `APP_URL` no hPanel com o domínio final da campanha antes do deploy definitivo para evitar canonical e sitemap apontando para o fallback do GitHub Pages.

## v1.22

- **Change Type:** Config
- **Description:** Preparação do projeto para Hostinger Node.js Hosting com npm, `package-lock.json`, `server.js`, fallback `index.js`, output `build/`, `deploy.config.json` e scripts `build/start/check`.
- **Rationale:** Adequar o deploy ao padrão hPanel Auto Git, reduzindo falhas de autodetecção e garantindo SPA fallback em produção.
- **Tech Debt:** O deploy real ainda depende da configuração manual no hPanel com branch `main`, Node 20.x, entry point `server.js` e output `build`.

## v1.21

- **Change Type:** Fix
- **Description:** Revisão das seções de comparação e cartões participantes, removendo fundos retangulares atrás dos cartões e trocando a vitrine verde poluída por composição clara com texto escuro.
- **Rationale:** Corrigir problemas visuais apontados em screenshots: fundos quadrados nos cartões, baixa legibilidade e excesso de textura competindo com o conteúdo.
- **Tech Debt:** A solução mantém CSS customizado para halos e vitrine; validar novamente se as imagens dos cartões forem substituídas.

## v1.20

- **Change Type:** Feature
- **Description:** Redesenho da vitrine de cartões participantes com composição assimétrica, Black em destaque e Platinum/Gold em peças laterais translúcidas.
- **Rationale:** Substituir cards brancos simples por uma solução visual mais editorial e alinhada à presença de marca Sicredi, mantendo legibilidade e assets oficiais.
- **Tech Debt:** A seção usa CSS customizado mais específico; manter validação visual em desktop/mobile ao alterar imagens ou textos dos cartões.

## v1.19

- **Change Type:** Fix
- **Description:** Centralização do rodapé com logo oficial, dados da Sicredi Sementes do Sul e disclaimer sem caixa visual.
- **Rationale:** Atender ao ajuste de hierarquia solicitado, reduzindo peso visual no rodapé e mantendo dados institucionais rastreáveis.
- **Tech Debt:** CNPJ da cooperativa não foi inserido porque a fonte oficial consultada listou endereço, telefone e nº da cooperativa, mas não o CNPJ da cooperativa no cadastro público do Sicredi.

## v1.18

- **Change Type:** Docs
- **Description:** Inclusão de disclaimer legal ampliado no rodapé da LP.
- **Rationale:** Deixar mais explícitas as condições de análise de crédito, contratação, disponibilidade e variação de benefícios.
- **Tech Debt:** Validar redação final com jurídico/compliance antes de uso em mídia paga ou campanha regulada.

## v1.17

- **Change Type:** Feature
- **Description:** Redesenho das seções de cartões participantes e como pedir com camadas translúcidas, catavento de fundo com animação no scroll e ícones oficiais nos passos.
- **Rationale:** Remover verde chapado e fundos cinza simples, elevando a hierarquia visual sem sair do sistema Sicredi.
- **Tech Debt:** O catavento animado usa o SVG local existente como grafismo decorativo; manter validação de marca se houver revisão formal do manual.

## v1.16

- **Change Type:** Fix
- **Description:** Remoção das tags da seção de benefícios e troca do fundo cinza das imagens dos cartões por superfície branca/verde suave.
- **Rationale:** Reduzir elementos redundantes e eliminar aparência opaca na seção de cartões mantendo a identidade Sicredi.
- **Tech Debt:** Nenhum débito novo identificado.

## v1.15

- **Change Type:** Fix
- **Description:** Substituição da caixa verde da seção de benefícios por marcadores leves abaixo do título.
- **Rationale:** Reduzir peso visual e manter a seção mais equilibrada sem perder presença de marca.
- **Tech Debt:** Nenhum débito novo identificado.

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
