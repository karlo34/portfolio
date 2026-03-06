import Image from "next/image";
import type { Profile } from "@/types";

type HeroProps = {
  profile: Profile;
};

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="about"
      className="relative min-h-[85vh] overflow-hidden bg-sky-50/50"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid min-h-[85vh] max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:px-8">
        {/* Left column: heading, email, years */}
        <div className="flex flex-col justify-center lg:pt-0">
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-5xl xl:text-6xl"
          >
            Hey There,
            <br />
            I&apos;m {profile.name}
          </h1>
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block text-lg font-semibold text-orange-600 hover:text-orange-700"
            >
              {profile.email}
            </a>
          )}
          {profile.yearsExperience != null && (
            <div className="mt-10 flex items-baseline gap-3">
              <span className="text-5xl font-bold text-slate-800 sm:text-6xl">
                {profile.yearsExperience}
              </span>
              <span className="max-w-32 text-sm font-medium uppercase leading-tight text-slate-600">
                Years Experience
              </span>
            </div>
          )}
        </div>

        {/* Center: profile image + brush stroke */}
        <div className="relative pb-10 flex flex-col justify-center lg:order-0">
          <div className="relative mb-10 flex items-center justify-center">
            {/* Large multi-directional brush stroke behind image - visible on all screen sizes */}
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[340px] -translate-x-1/2 -translate-y-1/2 sm:h-[420px] sm:w-[480px] lg:h-[500px] lg:w-[560px]">
              <img
                src="/brush-stroke.svg"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="relative z-10 mx-auto h-56 w-56 overflow-hidden rounded-lg bg-slate-200 shadow-lg sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 224px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 flex flex-row gap-8 justify-center items-center w-full h-10 bg-linear-to-t from-sky-50/50 to-transparent">
            <a href={profile.github}><svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg></a>
            <a href={profile.linkedin}><svg
              className="h-10 w-10"
              fill="currentColor"
              viewBox="0 0 382 382"
              aria-hidden="true"
            >
              <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
              C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z 
              M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403
              c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z 
              M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
              s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z 
              M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168
              c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
              c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593
              c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655
              c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654z" />
            </svg>
            </a>

          </div>
        </div>

        {/* Right column: tagline, certification */}
        <div className="flex flex-col justify-center gap-8 lg:items-end lg:text-right">
          {profile.heroTagline && (
            <p className="max-w-sm text-lg font-light leading-relaxed text-slate-700">
              {profile.heroTagline}
            </p>
          )}
          {profile.certification && (
            <div className="flex flex-col items-center gap-2 lg:items-end">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <p className="max-w-56 text-xs font-medium uppercase leading-tight text-slate-600">
                {profile.certification}
              </p>
            </div>
          )}
        </div>
      </div>

    </section>
  );
}
