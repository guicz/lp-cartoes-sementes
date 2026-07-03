const utmParams = {
  utm_source: 'google',
  utm_medium: 'lp',
  utm_campaign: '0218_comunicação-e-marketing-coop_prod-cartoes_dg5_google_lp_conversao',
  utm_content: 'conversao',
  utm_term: 'cartoes',
};

export const cooperativeInfo = {
  shortName: 'Sicredi Sementes do Sul',
  legalName: 'Cooperativa de Crédito, Poupança e Investimento Sicredi Sementes do Sul RS/MG',
  cnpj: '87.900.411/0001-11',
  system: 'Instituição integrante do Sistema Sicredi',
  address: 'Rua Santo Alves Corrêa, 43, Centro, Espumoso/RS',
  phone: '(54) 3383 3850',
  cooperativeNumber: '0218',
};

export const officialUrls = {
  cards: withUtm('https://www.sicredi.com.br/site/cartoes/cartao-para-voce/'),
  attendance: withUtm('https://www.sicredi.com.br/site/atendimento/'),
  agency: withUtm('https://www.sicredi.com.br/site/atendimento/encontre-uma-agencia/'),
};

export function withUtm(url: string) {
  const parsedUrl = new URL(url);

  Object.entries(utmParams).forEach(([key, value]) => {
    parsedUrl.searchParams.set(key, value);
  });

  return parsedUrl.toString();
}
