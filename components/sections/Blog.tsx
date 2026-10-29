import Image from "next/image";
import Link from "next/link";
import { posts } from "@/content/posts";
import { CTAButton } from "../CTAButton";
import { SectionHeader } from "../SectionTag";
import { ArrowRightIcon } from "../icons";

export function Blog() {
  return (
    <section id="inspiracao" className="section-pad grain">
      <div className="container-site">
        <SectionHeader
          tag="Inspire-se"
          title={
            <>
              Ideias para planejar <em>sem errar</em>
            </>
          }
          intro="Medidas, materiais e o momento certo de cada decisão — o que aprendemos em cada projeto, para você planejar o seu."
        />

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <li key={post.slug} data-reveal style={{ "--reveal-delay": i } as React.CSSProperties}>
              <Link href={`/inspiracao/${post.slug}`} className="group block">
                <span className="relative block aspect-[4/3] overflow-hidden rounded-[2px] bg-surface">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-[1.04]"
                  />
                </span>
                <span className="mt-5 block text-[0.72rem] uppercase tracking-[0.2em] text-gold">
                  {post.category} · {post.readingMinutes} min de leitura
                </span>
                <span className="mt-2 block font-serif text-[1.6rem] leading-tight text-cream transition-colors group-hover:text-gold">
                  {post.title}
                </span>
                <span className="mt-3 block text-[0.95rem] text-stone">{post.excerpt}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Ler artigo <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <CTAButton location="blog" />
        </div>
      </div>
    </section>
  );
}
