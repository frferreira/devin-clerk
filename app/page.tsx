import Link from "next/link";
import { appConfig } from "@/app.config";

const highlights = [
  "Cobranças e inadimplência sob controle",
  "Despesas e relatórios transparentes",
  "Ocorrências registradas e acompanhadas",
];

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
      <span className="text-6xl" aria-hidden>
        {appConfig.emoji}
      </span>
      <h1 className="text-5xl font-bold tracking-tight">{appConfig.name}</h1>
      <p className="max-w-xl text-lg text-black/70">
        A gestão do seu condomínio em um só lugar: custos, condôminos,
        cobranças, despesas, relatórios, painéis de acompanhamento e registro de
        ocorrências.
      </p>
      <ul className="flex flex-wrap justify-center gap-2 text-sm">
        {highlights.map((item) => (
          <li
            key={item}
            className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-accent"
          >
            {item}
          </li>
        ))}
      </ul>
      <Link
        href="/dashboard"
        className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
      >
        Quero acesso antecipado →
      </Link>
    </section>
  );
}
