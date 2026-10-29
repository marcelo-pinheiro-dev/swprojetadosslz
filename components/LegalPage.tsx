import type { ReactNode } from "react";
import { SectionTag } from "./SectionTag";

export function LegalPage({ tag, title, updatedAt, children }: { tag: string; title: string; updatedAt: string; children: ReactNode }) {
  return (
    <article className="pb-24 pt-32 lg:pt-40">
      <div className="container-site max-w-3xl">
        <SectionTag>{tag}</SectionTag>
        <h1 suppressHydrationWarning className="mt-5 text-[2.4rem] sm:text-[3rem]">{title}</h1>
        <p className="mt-3 text-sm text-stone">Última atualização: {updatedAt}</p>
        <div className="mt-10 space-y-5 text-[1.02rem] leading-[1.75] text-cream/85 [&_h2]:pt-6 [&_h2]:text-[1.7rem] [&_h2]:text-cream [&_li]:ml-5 [&_li]:list-disc [&_a]:text-gold [&_a]:underline">
          {children}
        </div>
      </div>
    </article>
  );
}
