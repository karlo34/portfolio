"use client";

import { useState, useCallback } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/types";

const PROJECTS_PER_PAGE = 6;

type ProjectShowcaseProps = {
  projects: Project[];
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const showPagination = projects.length > PROJECTS_PER_PAGE;

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);

  const currentProjects = projects.slice(
    page * PROJECTS_PER_PAGE,
    (page + 1) * PROJECTS_PER_PAGE
  );

  const scrollToProjects = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const goNext = useCallback(() => {
    if (page >= totalPages - 1) return;
    setDirection("next");
    setPage((p) => Math.min(p + 1, totalPages - 1));
    scrollToProjects();
  }, [page, totalPages, scrollToProjects]);

  const goPrev = useCallback(() => {
    if (page <= 0) return;
    setDirection("prev");
    setPage((p) => Math.max(0, p - 1));
    scrollToProjects();
  }, [page, scrollToProjects]);

  const animationClass =
    direction === "next"
      ? "projects-slide-in-from-right"
      : direction === "prev"
        ? "projects-slide-in-from-left"
        : "";

  return (
    <div className="relative">
      {/* Pagination controls - only when more than 6 projects */}
      {showPagination && (
        <div className="mb-10 flex flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            disabled={page <= 0}
            className="inline-flex items-center gap-2 rounded-full border-2 border-sky-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-teal-400 hover:bg-teal-50/70 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
            aria-label="Previous projects"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          <span className="text-sm font-medium text-slate-600">
            Page {page + 1} of {totalPages}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={page >= totalPages - 1}
            className="inline-flex items-center gap-2 rounded-full border-2 border-sky-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-teal-400 hover:bg-teal-50/70 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
            aria-label="Next projects"
          >
            Next
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      {/* Project grid with slide animation */}
      <div className="overflow-hidden">
        <div
          key={page}
          className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ${animationClass}`}
          role="list"
        >
          {currentProjects.map((project) => (
            <li key={project.id} className="list-none" role="listitem">
              <ProjectCard project={project} />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
