import { useLang } from "../i18n";
import Reveal, { Eyebrow, SectionTitle } from "./Reveal";

function Cluster({ label, items }) {
  return (
    <div className="mt-4">
      <p className="text-[10px] uppercase tracking-[0.2em] text-ink-mute">{label}</p>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-[13px] text-ink-soft">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const { t } = useLang();
  const s = t.skills;

  return (
    <section id="cv" className="relative scroll-mt-16 py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <Reveal>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <SectionTitle line1={s.title1} line2={s.title2} />
          <p className="mt-6 max-w-[64ch] text-[14px] leading-relaxed text-ink-mute">
            {s.intro}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {s.experience.map((e) => (
              <div
                key={e.place}
                className="grid gap-1 py-4 sm:grid-cols-[140px_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-moss">
                  {e.period}
                </p>
                <p className="text-[14px] font-medium text-ink">{e.role}</p>
                <p className="text-[12px] uppercase tracking-[0.12em] text-ink-mute">
                  {e.place}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {s.groups.map((g, i) => (
            <Reveal key={g.num} delay={i * 0.06}>
              <div className="card-lift h-full rounded-xl border border-ink/12 bg-paper-200 p-6">
                <p className="display text-3xl text-moss/70">{g.num}</p>
                <h3 className="display mt-2 text-2xl text-ink">{g.title}</h3>
                <p className="mt-1 text-[12px] text-ink-mute">{g.subtitle}</p>
                {g.clusters.map((c) => (
                  <Cluster key={c.label} label={c.label} items={c.items} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-ink/12 p-6">
              <h3 className="display text-2xl text-ink">{s.languages.title}</h3>
              <ul className="mt-3 space-y-2">
                {s.languages.items.map((l) => (
                  <li key={l.name} className="flex items-baseline justify-between gap-4 text-[13px]">
                    <span className="text-ink">{l.name}</span>
                    <span className="text-ink-mute">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-xl border border-ink/12 p-6">
              <h3 className="display text-2xl text-ink">{s.education.title}</h3>
              <ul className="mt-3 space-y-2">
                {s.education.items.map((e) => (
                  <li key={e.name} className="text-[13px]">
                    <span className="text-ink">{e.name}</span>
                    <span className="block text-[12px] text-ink-mute">{e.place}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
