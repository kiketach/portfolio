import { useLang } from "../i18n";
import Reveal, { Eyebrow, SectionTitle } from "./Reveal";

function Tag({ children }) {
  return (
    <span className="rounded-full border border-ink/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-ink-soft">
      {children}
    </span>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="card-lift group flex h-full flex-col rounded-xl border border-ink/12 bg-paper p-6 hover:border-moss/40">
      <h3 className="display text-2xl text-ink transition-colors group-hover:text-moss">
        {p.name}
      </h3>
      <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink-mute">
        {p.tagline}
      </p>
      <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
        {p.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      {p.links.length > 0 && (
        <div className="mt-5 flex gap-4 border-t border-ink/10 pt-4">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-moss hover:underline"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const { t } = useLang();
  const s = t.projects;

  return (
    <section id="proyectos" className="relative scroll-mt-16 bg-paper-200 py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <Reveal>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <SectionTitle line1={s.title1} line2={s.title2} />
          <p className="mt-6 max-w-[56ch] text-[14px] leading-relaxed text-ink-mute">
            {s.intro}
          </p>
        </Reveal>

        {s.groups.map((group) => (
          <div key={group.label} className="mt-14">
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-mute">
                <span className="h-px w-8 bg-moss/60" />
                {group.label}
              </p>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.08}>
                  <ProjectCard p={p} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
