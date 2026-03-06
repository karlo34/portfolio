import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SkillsSection } from "@/components/SkillsSection";
import { WhatIDoSection } from "@/components/WhatIDoSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white page-gradient">
      <Header />
      <main className="flex-1">
        <Hero profile={profile} />
        {profile.skills && profile.skills.length > 0 && (
          <SkillsSection skills={profile.skills} />
        )}
        <WhatIDoSection services={services} />
        <section
          id="projects"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 bg-sky-50/50"
          aria-labelledby="projects-heading"
        >
          <h2
            id="projects-heading"
            className="mb-6 text-center text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl"
          >
            Projects
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
            A selection of things I&apos;ve built—from full-stack apps to small tools and demos.
          </p>
          <ProjectShowcase projects={projects} />
        </section>
        <ContactSection profile={profile} />
      </main>
      <Footer />
    </div>
  );
}
