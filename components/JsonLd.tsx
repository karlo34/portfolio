import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourportfolio.com";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    description: profile.tagline,
    url: siteUrl,
    image: `${siteUrl}${profile.image}`,
    sameAs: [profile.github, profile.linkedin, profile.twitter].filter(Boolean),
    email: profile.email,
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.demoUrl ?? project.githubUrl,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </>
  );
}
