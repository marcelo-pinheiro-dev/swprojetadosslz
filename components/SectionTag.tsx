export function SectionTag({ children, tone = "dark" }: { children: string; tone?: "dark" | "light" }) {
  return (
    <p
      className={`font-display text-[1.1rem] font-medium uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-gold" : "text-gold-deep"
      }`}
    >
      [ {children} ]
    </p>
  );
}

export function SectionHeader({
  tag,
  title,
  intro,
  tone = "dark",
  align = "left",
}: {
  tag: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <header
      data-reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <SectionTag tone={tone}>{tag}</SectionTag>
      <h2 suppressHydrationWarning className="mt-5 text-[1.9rem] sm:text-[2.4rem] lg:text-[2.85rem]">{title}</h2>
      {intro && (
        <p
          className={`mt-5 max-w-2xl text-[1.05rem] ${align === "center" ? "mx-auto" : ""} ${
            tone === "dark" ? "text-stone" : "text-stone-dark"
          }`}
        >
          {intro}
        </p>
      )}
    </header>
  );
}
