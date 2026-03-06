import type { Service } from "@/types";

type WhatIDoSectionProps = {
  services: Service[];
};

const iconMap = {
  code: (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  paint: (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.38 3.39a15.995 15.995 0 004.769-2.288M9.53 16.122V13.25m0 0v-3.662M12 18.75a2.25 2.25 0 002.25-2.25v-.75a2.25 2.25 0 00-2.25-2.25h-.75a2.25 2.25 0 00-2.25 2.25v.75a2.25 2.25 0 002.25 2.25h.75z" />
    </svg>
  ),
  api: (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  ),
  mobile: (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
};

const cardColors = [
  "bg-teal-50 border-teal-200/80",
  "bg-amber-50 border-amber-200/80",
  "bg-sky-50 border-sky-200/80",
  "bg-rose-50 border-rose-200/80",
];

export function WhatIDoSection({ services }: WhatIDoSectionProps) {
  return (
    <section
      id="what-i-do"
      className="border-t border-sky-200/60 bg-white py-20"
      aria-labelledby="what-i-do-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="what-i-do-heading"
          className="mb-4 text-center text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl"
        >
          What I do
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
          From front-end to backend and deployment, I help bring ideas to life on the web.
        </p>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <li
              key={service.id}
              className={`rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md ${cardColors[i % cardColors.length]}`}
            >
              <div className="mb-4 text-teal-600">
                {iconMap[service.icon]}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-800">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
