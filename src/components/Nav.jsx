import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useLang } from "../i18n";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { label: t.nav.projects, href: "#proyectos" },
    { label: t.nav.cv, href: "#cv" },
    { label: t.nav.interests, href: "#intereses" },
    { label: t.nav.contact, href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "border-ink/10 bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-3 px-5 md:px-10">
        <a href="#top" className="display text-xl text-ink">
          Enrique<span className="text-moss">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-moss"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-full border border-ink/20 text-[11px] font-medium tracking-[0.12em]">
            {["es", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 uppercase transition-colors ${
                  lang === l
                    ? "bg-moss text-paper"
                    : "text-ink-soft hover:bg-paper-300"
                }`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#contacto"
            className="hidden rounded-full bg-ink px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-paper transition-colors hover:bg-moss sm:block"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>

      {/* Scroll progress */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-moss"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
}
