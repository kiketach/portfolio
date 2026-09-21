import { motion } from "framer-motion";
import { useLang } from "../i18n";

function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee hairline-t hairline-b overflow-hidden py-4">
      <div className="marquee-track flex w-max items-center gap-6">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 text-[12px] whitespace-nowrap uppercase tracking-[0.18em] text-ink-soft"
          >
            {item}
            <span aria-hidden="true" className="text-moss">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Each word rises into view from behind an overflow mask.
function AnimatedLine({ text, delay = 0, italic = false }) {
  return (
    <span className="block">
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className={`inline-block ${italic ? "font-light italic text-moss" : ""}`}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < text.split(" ").length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { lang, t } = useLang();
  const h = t.hero;

  const fade = (delay) => ({
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="relative flex min-h-0 flex-col overflow-hidden pt-28 md:min-h-[100svh] md:pt-32">
      {/* Floating orbs */}
      <div
        aria-hidden="true"
        className="orb h-[420px] w-[420px] bg-moss/25"
        style={{ top: "-8%", right: "-6%" }}
      />
      <div
        aria-hidden="true"
        className="orb h-[360px] w-[360px] bg-paper-400/70"
        style={{ bottom: "18%", left: "-10%", animationDelay: "-11s" }}
      />

      <div className="relative mx-auto w-full max-w-[1240px] flex-1 px-5 md:px-10">
        <motion.p
          {...fade(0)}
          className="mb-6 text-[11px] font-medium uppercase tracking-[0.24em] text-moss"
        >
          ◆ {h.eyebrow}
        </motion.p>

        <h1 className="display text-[clamp(3rem,9vw,7.5rem)]">
          <AnimatedLine text={h.line1} delay={0.1} />
          <AnimatedLine text={h.line2} delay={0.3} italic />
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <motion.div {...fade(0.5)}>
            <p className="max-w-[58ch] text-[15px] leading-relaxed text-ink-soft">
              {h.bio1}
            </p>
            <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-ink-soft">
              {h.bio2}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-ink-mute">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-moss" />
              {h.availability}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#proyectos"
                className="rounded-full bg-ink px-6 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-paper transition-all hover:bg-moss active:scale-[0.97]"
              >
                {h.ctaProjects}
              </a>
              <a
                href={t.links.cv[lang]}
                download
                className="rounded-full border border-ink/25 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-all hover:border-moss hover:text-moss active:scale-[0.97]"
              >
                {h.ctaCv} ↓
              </a>
              <a
                href="#contacto"
                className="px-2 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft underline decoration-moss/60 underline-offset-4 transition-colors hover:text-moss"
              >
                {h.ctaContact}
              </a>
            </div>
          </motion.div>

          <motion.div {...fade(0.6)} className="flex flex-col gap-3 md:items-end">
            {h.badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
                className="w-full max-w-xs rounded-lg border border-ink/12 bg-paper-200/80 px-4 py-3 backdrop-blur-sm md:text-right"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                  {b.label}
                </p>
                <p className="mt-1 text-[13px] font-medium text-ink">{b.value}</p>
              </motion.div>
            ))}
            <motion.div {...fade(0.9)} className="mt-1 flex gap-5">
              <a
                href={t.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium uppercase tracking-[0.16em] text-moss hover:underline"
              >
                LinkedIn →
              </a>
              <a
                href={t.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium uppercase tracking-[0.16em] text-moss hover:underline"
              >
                GitHub →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div {...fade(1)} className="relative mt-14 md:mt-auto">
        <Marquee items={h.marquee} />
      </motion.div>
    </section>
  );
}
