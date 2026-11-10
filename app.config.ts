export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Condomínio App",
  description:
    "Crie um sistema de condomínio, para gerenciar os custos do condomínio, condôminos, cobranças de condomínio, registros de despesas, relatórios, painéis de acompanhamento, registro de ocorrências.",
  emoji: "🏢",
  accent: "#0f766e",
  upcomingFeatures: [
    {
      title: "Cadastro de condôminos",
      description:
        "Cadastre e liste os moradores com unidade, telefone e e-mail.",
    },
    {
      title: "Registro de despesas",
      description:
        "Lance as despesas do condomínio com categoria, valor e data.",
    },
    {
      title: "Cobranças mensais",
      description:
        "Gere a taxa mensal de cada unidade e marque como paga ou pendente.",
    },
    {
      title: "Registro de ocorrências",
      description:
        "Moradores registram ocorrências e acompanham o status de cada uma.",
    },
    {
      title: "Painel financeiro",
      description:
        "Veja receitas, despesas e inadimplência do mês em um só painel.",
    },
    {
      title: "Relatórios mensais",
      description:
        "Gere um resumo mensal das finanças para imprimir ou exportar em CSV.",
    },
  ] satisfies Feature[],
};
