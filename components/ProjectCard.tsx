import Image from "next/image";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, media, demoUrl, githubUrl, tags } = project;

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-sky-200/80 bg-white shadow-sm transition-all duration-300 hover:border-teal-300 hover:shadow-lg"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-sky-100">
        {media.type === "image" ? (
          <Image
            src={media.src}
            alt={media.alt ?? title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <video
            src={media.src}
            poster={media.poster}
            controls
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            preload="metadata"
          >
            <track kind="captions" />
          </video>
        )}
      </div>
      <div className="flex flex-col gap-3 p-5 sm:p-6">
        <h3
          className="text-xl font-semibold tracking-tight text-slate-800"
          itemProp="name"
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed text-slate-600"
          itemProp="description"
        >
          {description}
        </p>
        {tags && tags.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 underline decoration-teal-300 underline-offset-4 transition-colors hover:text-teal-800"
              itemProp="url"
            >
              Live demo
              <span className="sr-only">(opens in new tab)</span>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 underline decoration-teal-300 underline-offset-4 transition-colors hover:text-teal-800"
            >
              GitHub
              <span className="sr-only">(opens in new tab)</span>
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
