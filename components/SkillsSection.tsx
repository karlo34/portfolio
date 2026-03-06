type SkillsSectionProps = {
  skills: string[];
};

const skillColors = [
  "bg-teal-100 text-teal-800",
  "bg-amber-100 text-amber-800",
  "bg-sky-100 text-sky-800",
  "bg-rose-100 text-rose-800",
  "bg-emerald-100 text-emerald-800",
  "bg-violet-100 text-violet-800",
];

function getSkillColor(index: number) {
  return skillColors[index % skillColors.length];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="border-t border-sky-200/60 bg-amber-50/50 py-20"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="skills-heading"
          className="mb-10 text-center text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl"
        >
          Skills & tools
        </h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <li key={skill}>
              <span
                className={`inline-block rounded-full px-4 py-2 text-sm font-medium ${getSkillColor(i)}`}
              >
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
