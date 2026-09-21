import { useLang } from "../i18n";
import Reveal, { Eyebrow, SectionTitle } from "./Reveal";

export default function Interests() {
  const { t } = useLang();
  const s = t.interests;

  return (
    <section id="intereses" className="relative scroll-mt-16 bg-paper-200 py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <Reveal>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <SectionTitle line1={s.title1} line2={s.title2} />
          <p className="mt-6 max-w-[56ch] text-[14px] text-ink-mute">{s.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((item, i) => (
            <Reveal key={item.title + i} delay={i * 0.07}>
              <div className="card-lift h-full rounded-xl border border-ink/12 bg-paper p-6 hover:border-moss/40">
                <p className="text-[10px] uppercase tracking-[0.22em] text-moss">
                  {item.label}
                </p>
                <h3 className="display mt-3 text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
