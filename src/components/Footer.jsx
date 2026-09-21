import { useLang } from "../i18n";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="bg-ink py-16 text-paper md:py-24">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display text-3xl">
              Enrique Abril<span className="text-paper/60">.</span>
            </p>
            <p className="mt-4 max-w-[40ch] text-[13px] leading-relaxed text-paper/70">
              {f.tagline}
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-paper/50">
              {f.navigate}
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { label: t.nav.projects, href: "#proyectos" },
                { label: t.nav.cv, href: "#cv" },
                { label: t.nav.interests, href: "#intereses" },
                { label: t.nav.contact, href: "#contacto" },
              ].map((i) => (
                <li key={i.href}>
                  <a
                    href={i.href}
                    className="text-[13px] text-paper/80 transition-colors hover:text-paper"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-paper/50">
              {f.contactTitle}
            </p>
            <ul className="mt-4 space-y-2 text-[13px] text-paper/80">
              <li>
                <a href={`mailto:${t.links.email}`} className="hover:text-paper">
                  {t.links.email}
                </a>
              </li>
              <li>{t.links.phone}</li>
              <li>
                <a
                  href={t.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-paper"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={t.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-paper"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-paper/15 pt-6 text-[11px] uppercase tracking-[0.16em] text-paper/50">
          <p>{f.rights}</p>
        </div>
      </div>
    </footer>
  );
}
