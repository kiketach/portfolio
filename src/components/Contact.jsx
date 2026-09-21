import { useLang } from "../i18n";
import Reveal, { Eyebrow, SectionTitle } from "./Reveal";

function Row({ label, children }) {
  return (
    <div className="flex flex-col gap-1 border-b border-ink/10 py-4 sm:flex-row sm:items-baseline sm:justify-between">
      <p className="text-[11px] uppercase tracking-[0.2em] text-ink-mute">{label}</p>
      <div className="text-[14px] text-ink">{children}</div>
    </div>
  );
}

export default function Contact() {
  const { t } = useLang();
  const s = t.contact;

  return (
    <section id="contacto" className="relative scroll-mt-16 py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <SectionTitle line1={s.title1} line2={s.title2} />
            <a
              href={`mailto:${t.links.email}`}
              className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-paper transition-colors hover:bg-moss"
            >
              {s.cta}
            </a>
            <p className="mt-4 text-[12px] text-ink-mute">{s.note}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-ink/10">
              <Row label={s.emailLabel}>
                <a
                  href={`mailto:${t.links.email}`}
                  className="text-moss hover:underline"
                >
                  {t.links.email}
                </a>
              </Row>
              <Row label={s.phoneLabel}>{t.links.phone}</Row>
              <Row label={s.locationLabel}>{s.location}</Row>
              <Row label={s.availabilityLabel}>{s.availability}</Row>
              <Row label="LINKEDIN">
                <a
                  href={t.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-moss hover:underline"
                >
                  in/enrique-abril-contreras ↗
                </a>
              </Row>
              {t.links.github && (
                <Row label="GITHUB">
                  <a
                    href={t.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-moss hover:underline"
                  >
                    {t.links.github.replace("https://", "")} ↗
                  </a>
                </Row>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
