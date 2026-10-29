import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTAButton } from "@/components/CTAButton";
import { JsonLdScript } from "@/components/JsonLd";
import { SectionTag } from "@/components/SectionTag";
import { ArrowRightIcon } from "@/components/icons";
import { posts } from "@/content/posts";
import { siteConfig } from "@/site.config";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/inspiracao/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/inspiracao/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function PostPage(props: PageProps<"/inspiracao/[slug]">) {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@id": `${siteConfig.url}/#empresa` },
  };

  return (
    <article className="pb-24 pt-32 lg:pt-40">
      <JsonLdScript data={articleJsonLd} />
      <div className="container-site max-w-3xl">
        <nav aria-label="Trilha" className="text-sm text-stone">
          <Link href="/" className="hover:text-gold">Início</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/#inspiracao" className="hover:text-gold">Inspiração</Link>
        </nav>
        <div className="mt-8">
          <SectionTag>{post.category}</SectionTag>
        </div>
        <h1 suppressHydrationWarning className="mt-5 text-[2.4rem] sm:text-[3.2rem]">{post.title}</h1>
        <p className="mt-5 text-lg text-stone">{post.excerpt}</p>
        <p className="mt-4 text-sm text-stone">
          <time dateTime={post.publishedAt}>
            {new Date(`${post.publishedAt}T12:00:00`).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
          </time>{" "}
          · {post.readingMinutes} min de leitura
        </p>
      </div>

      <div className="container-site mt-10 max-w-5xl">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2px]">
          <Image src={post.image} alt={post.alt} fill priority sizes="(min-width: 1024px) 1000px, 100vw" className="object-cover" />
        </div>
      </div>

      <div className="container-site mt-12 max-w-3xl space-y-6 text-[1.1rem] leading-[1.75] text-cream/90">
        {post.body.map((block, i) => {
          if (block.type === "h2") return <h2 suppressHydrationWarning key={i} className="pt-6 text-[1.9rem] text-cream">{block.text}</h2>;
          if (block.type === "ul")
            return (
              <ul key={i} className="space-y-3 border-l border-gold/40 pl-6">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          return <p key={i}>{block.text}</p>;
        })}

        <aside className="mt-14 border border-line bg-surface p-8">
          <p className="font-serif text-[1.7rem] leading-snug text-cream">
            Quer aplicar isso no seu projeto? <em>Um projetista ajuda você.</em>
          </p>
          <div className="mt-6">
            <CTAButton location={`artigo-${post.slug}`} />
          </div>
        </aside>
      </div>

      <div className="container-site mt-20 max-w-5xl">
        <h2 suppressHydrationWarning className="text-[1.8rem]">Continue lendo</h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-2">
          {others.map((p) => (
            <li key={p.slug}>
              <Link href={`/inspiracao/${p.slug}`} className="group flex gap-5">
                <span className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-[2px]">
                  <Image src={p.image} alt="" fill sizes="112px" className="object-cover" />
                </span>
                <span>
                  <span className="block font-serif text-[1.35rem] leading-tight text-cream group-hover:text-gold">{p.title}</span>
                  <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Ler artigo <ArrowRightIcon size={16} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
