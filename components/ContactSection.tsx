import type { Profile } from "@/types";

type ContactSectionProps = {
  profile: Profile;
};

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="border-t border-sky-200/60 bg-teal-50/60 py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="contact-heading"
          className="mb-4 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl"
        >
          Get in touch
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-slate-600">
          Have a project in mind or want to say hi? I&apos;d love to hear from you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-orange-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email me
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-sky-300 bg-white px-6 py-3 text-base font-medium text-slate-700 transition-colors hover:border-teal-400 hover:bg-teal-50/70"
            >
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-sky-300 bg-white px-6 py-3 text-base font-medium text-slate-700 transition-colors hover:border-teal-400 hover:bg-teal-50/70"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
