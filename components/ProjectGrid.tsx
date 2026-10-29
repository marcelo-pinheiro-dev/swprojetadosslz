"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projectFilters, projects, type Project } from "@/content/projects";
import { track } from "@/lib/tracking";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon, PlusIcon } from "./icons";

const INITIAL_VISIBLE = 6;

export function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]["id"]>("cozinha");
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<Project | null>(null);

  const filtered = filter === "todos" ? projects : projects.filter((p) => p.environment === filter);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  return (
    <>
      <div role="group" aria-label="Filtrar projetos por ambiente" className="mt-12 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`min-h-[44px] cursor-pointer border px-5 text-sm transition-colors duration-300 ${
              filter === f.id
                ? "border-gold bg-gold text-ink"
                : "border-line text-cream hover:border-gold hover:text-gold"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {visible.map((project) => (
          <li key={project.id} className="group">
            <button
              type="button"
              onClick={() => {
                setActive(project);
                track("project_open", { project_id: project.id });
              }}
              className="block w-full cursor-pointer text-left"
            >
              <span className="relative block aspect-[4/5] overflow-hidden rounded-[2px] bg-surface">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <span>
                    <span className="block text-[0.72rem] uppercase tracking-[0.2em] text-gold">{project.propertyType}</span>
                    <span className="mt-1 block font-serif text-[1.7rem] leading-tight text-cream">{project.title}</span>
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/60 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                    <PlusIcon size={20} />
                  </span>
                </span>
              </span>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Ver projeto <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {filtered.length > INITIAL_VISIBLE && !showAll && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="min-h-[48px] cursor-pointer border border-line px-7 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Ver mais projetos
          </button>
        </div>
      )}

      <Lightbox key={active?.id ?? "closed"} project={active} onClose={() => setActive(null)} />
    </>
  );
}

function Lightbox({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const total = project?.images.length ?? 0;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
    } else if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      aria-label={project ? `Galeria do projeto ${project.title}` : undefined}
      className="m-auto h-[100dvh] max-h-none w-full max-w-none bg-transparent p-0 text-cream backdrop:bg-ink/95 sm:h-[92dvh] sm:w-[min(1100px,94vw)]"
    >
      {project && (
        <div className="flex h-full flex-col bg-ink sm:border sm:border-line">
          <div className="flex items-start justify-between gap-4 border-b border-line p-5">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.2em] text-gold">{project.propertyType}</p>
              <h3 className="mt-1 text-[1.8rem]">{project.title}</h3>
              <p className="mt-1 max-w-2xl text-sm text-stone">{project.summary}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center border border-line hover:border-gold hover:text-gold"
              aria-label="Fechar galeria"
              autoFocus
            >
              <CloseIcon size={22} />
            </button>
          </div>

          <div className="relative min-h-0 flex-1">
            <Image
              key={project.images[index].src}
              src={project.images[index].src}
              alt={project.images[index].alt}
              fill
              sizes="(min-width: 1100px) 1100px, 100vw"
              className="object-contain"
            />
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center bg-ink/70 hover:text-gold"
                  aria-label="Foto anterior"
                >
                  <ChevronLeftIcon size={24} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center bg-ink/70 hover:text-gold"
                  aria-label="Próxima foto"
                >
                  <ChevronRightIcon size={24} />
                </button>
              </>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-line p-4">
            <p className="text-sm text-stone" aria-live="polite">
              Foto {index + 1} de {total}
            </p>
            <div className="flex gap-2 overflow-x-auto">
              {project.images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  aria-current={i === index}
                  className={`relative h-14 w-12 shrink-0 cursor-pointer overflow-hidden border ${
                    i === index ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img.src} alt="" fill sizes="48px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
