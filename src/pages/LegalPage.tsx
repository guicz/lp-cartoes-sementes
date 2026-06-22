import { Link, Navigate, useParams } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

const legalPages = {
  privacidade: {
    label: 'Política de Privacidade',
    title: 'Política de Privacidade',
    intro:
      'Esta página explica, de forma simples, como esta landing page de cartões Sicredi Sementes do Sul trata informações durante a navegação.',
    sections: [
      {
        title: 'Dados tratados nesta landing page',
        body: 'Esta página não possui formulário, login, checkout ou contratação direta. A navegação pode gerar dados técnicos básicos, como endereço IP, dispositivo, navegador, data e páginas acessadas, conforme ferramentas de hospedagem, segurança e estatísticas configuradas no ambiente.',
      },
      {
        title: 'Finalidades',
        body: 'Os dados técnicos podem ser usados para manter a página disponível, proteger o ambiente, medir desempenho, entender acessos agregados e melhorar a experiência de navegação.',
      },
      {
        title: 'Links externos',
        body: 'Ao clicar em links para páginas oficiais do Sicredi ou canais de atendimento, você será direcionado para ambientes externos, sujeitos às respectivas políticas, termos e controles de privacidade.',
      },
      {
        title: 'Direitos do titular',
        body: 'Nos termos da legislação aplicável, você pode solicitar informações, correção, eliminação ou revisão sobre dados pessoais tratados pelos canais oficiais de atendimento do Sicredi.',
      },
    ],
  },
  consentimentos: {
    label: 'Consentimentos',
    title: 'Consentimentos',
    intro:
      'Esta página resume como consentimentos e preferências podem ser tratados em campanhas digitais vinculadas à Sicredi Sementes do Sul.',
    sections: [
      {
        title: 'Consentimento para comunicações',
        body: 'Esta landing page não coleta consentimentos diretamente por formulário. Quando houver cadastro, simulação, atendimento ou contratação em canais oficiais, o consentimento será solicitado no ambiente correspondente, quando necessário.',
      },
      {
        title: 'Preferências e revogação',
        body: 'Preferências de comunicação, autorizações e eventuais revogações devem ser administradas pelos canais oficiais Sicredi, observando regras de segurança, identificação e registros aplicáveis.',
      },
      {
        title: 'Uso de informações agregadas',
        body: 'Informações técnicas agregadas podem apoiar melhorias de conteúdo, desempenho e segurança, sem substituir as regras de consentimento dos canais oficiais de relacionamento.',
      },
    ],
  },
  cookies: {
    label: 'Política de Cookies',
    title: 'Política de Cookies',
    intro:
      'Cookies e tecnologias semelhantes ajudam a manter páginas funcionando, proteger acessos e compreender a navegação de forma técnica.',
    sections: [
      {
        title: 'O que são cookies',
        body: 'Cookies são pequenos arquivos ou identificadores armazenados no navegador para reconhecer preferências, manter recursos técnicos e apoiar medições de uso.',
      },
      {
        title: 'Tipos de cookies',
        body: 'Esta landing page pode usar cookies estritamente necessários, cookies de desempenho ou tecnologias semelhantes fornecidas pela hospedagem, analytics ou segurança, conforme configuração do ambiente publicado.',
      },
      {
        title: 'Como gerenciar',
        body: 'Você pode bloquear ou apagar cookies nas configurações do navegador. Algumas funcionalidades técnicas podem ser afetadas dependendo das permissões escolhidas.',
      },
      {
        title: 'Atualizações',
        body: 'Esta política pode ser atualizada para refletir mudanças de tecnologia, legislação, ferramentas de medição ou canais oficiais de atendimento.',
      },
    ],
  },
} as const;

type LegalSlug = keyof typeof legalPages;

function isLegalSlug(value: string | undefined): value is LegalSlug {
  return Boolean(value && value in legalPages);
}

export function LegalPage() {
  const { slug } = useParams();

  if (!isLegalSlug(slug)) {
    return <Navigate to="/" replace />;
  }

  const page = legalPages[slug];

  return (
    <>
      <Header />
      <main className="legal-page bg-white">
        <section className="legal-hero border-b border-sicredi-soft/70">
          <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
            <Link
              to="/"
              className="font-heading text-sm font-bold uppercase tracking-normal text-sicredi-green hover:text-sicredi-dark"
            >
              Voltar para a LP
            </Link>
            <h1 className="mt-5 font-heading text-4xl font-bold italic leading-tight text-sicredi-text md:text-6xl">
              {page.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-sicredi-muted">{page.intro}</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-5">
            {page.sections.map((section) => (
              <article
                key={section.title}
                className="sicredi-box border border-sicredi-soft/80 bg-white p-6 shadow-sm"
              >
                <h2 className="font-heading text-2xl font-bold text-sicredi-text">
                  {section.title}
                </h2>
                <p className="mt-3 leading-7 text-sicredi-muted">{section.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-sicredi-muted">
            Conteúdo informativo para esta landing page. Para solicitações formais, contratações,
            dúvidas regulatórias ou exercício de direitos, utilize os canais oficiais do Sicredi.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
