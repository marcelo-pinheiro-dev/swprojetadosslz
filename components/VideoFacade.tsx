"use client";

import Image from "next/image";
import { useState } from "react";
import { track } from "@/lib/tracking";
import { PlayIcon } from "./icons";

type Props = {
  src: string;
  poster: string;
  title: string;
  captions?: string | null;
  location: string;
  aspect?: string;
  sizes?: string;
};

export function VideoFacade({ src, poster, title, captions, location, aspect = "aspect-video", sizes = "100vw" }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-[2px] bg-surface ${aspect}`}>
      {playing ? (
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          title={title}
        >
          {captions && <track kind="captions" src={captions} srcLang="pt-BR" label="Português" default />}
        </video>
      ) : (
        <button
          type="button"
          className="group absolute inset-0 h-full w-full cursor-pointer"
          onClick={() => {
            setPlaying(true);
            track("video_play", { video_title: title, video_location: location });
          }}
        >
          <Image src={poster} alt="" fill sizes={sizes} className="object-cover" />
          <span className="absolute inset-0 bg-ink/45 transition-colors duration-300 group-hover:bg-ink/30" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-ink/70 text-gold transition-transform duration-300 group-hover:scale-110">
            <PlayIcon size={28} className="translate-x-0.5" />
          </span>
          <span className="sr-only">Reproduzir vídeo: {title}</span>
        </button>
      )}
    </div>
  );
}
