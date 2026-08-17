import { motion, useScroll, useTransform } from 'motion/react'
import { Nav } from './components/Nav'
import { ProjectStage } from './components/ProjectStage'
import { Reveal } from './components/Reveal'
import { SectionHeading } from './components/SectionHeading'
import { education, experiences, toolbox } from './data/content'
import ricardo from './images/ricardo.png'

function App() {
  const { scrollYProgress } = useScroll()
  const glowY = useTransform(scrollYProgress, [0, .45], [0, 280])

  return (
    <div id="top" className="overflow-clip bg-ink text-white">
      <Nav />
      <motion.div aria-hidden style={{ y: glowY }} className="pointer-events-none fixed left-1/2 top-[-18rem] z-0 size-[44rem] -translate-x-1/2 rounded-full bg-[#6e94ff]/[.10] blur-[130px]" />

      <main className="relative z-10">
        <section className="relative flex min-h-screen items-center border-b border-white/[.06] px-5 pb-16 pt-32 sm:px-8 lg:px-12">
  <div
    aria-hidden
    className="ambient-grid absolute inset-0 opacity-50"
  />

  <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1fr_420px]">

    <Reveal>
      <p className="mb-8 flex items-center gap-3 text-xs text-white/45">
        <span className="size-1.5 rounded-full bg-[#8aaaff] shadow-[0_0_16px_rgba(138,170,255,.9)]" />
        Winston-Salem, North Carolina
      </p>

      <h1 className="max-w-5xl text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[.92] tracking-[-.065em]">
        Software built
        <br />
        <span className="text-white/34">
          with intention.
        </span>
      </h1>

      <p className="mt-10 max-w-xl text-lg leading-8 text-white/55">
        I'm Ricardo Edwards, a full-stack software engineer
        focused on designing thoughtful web applications with
        Java, Spring Boot, React, and TypeScript.
      </p>

      <div className="mt-12 flex flex-wrap gap-3">

        <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
          Java
        </span>

        <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
          Spring Boot
        </span>

        <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
          React
        </span>

        <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
          TypeScript
        </span>

      </div>

      <div className="mt-12 flex gap-5">

        <a className="..." href="#work">
          View Work
        </a>

        <a className="..." href="/resume.pdf">
          Resume
        </a>

      </div>

    </Reveal>

    <Reveal delay={0.2}>
      <div className="relative mx-auto aspect-square w-full max-w-[420px] border-radius">

        <div className="absolute inset-0 rounded-full bg-[#8aaaff]/10 blur-3xl" />

        <img
          src={ricardo}
          alt="Ricardo Edwards"
          className="relative h-full w-full object-contain scale-140 portrait:scale-100 border-radius"
        />

      </div>
    </Reveal>

  </div>
</section>

        <section id="toolbox" className="px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
          <div className="mx-auto max-w-6xl">
            <Reveal><SectionHeading eyebrow="Technical Toolbox" title="Use the tool the problem deserves." copy="Technologies are implementation details. The useful skill is knowing where each one earns its place. Here are the skills in my toolbox:" /></Reveal>
            <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {toolbox.map(([group, items], index) => (
                <Reveal key={group} delay={(index%4)*.04} className="rounded-2xl border border-white/[.075] bg-white/[.018] p-6 transition hover:bg-white/[.03]">
                  <p className="text-xs font-medium text-white/65">{group}</p>
                  <div className="mt-8 space-y-2">{items.map(item => <p key={item} className="text-sm text-white/36">{item}</p>)}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
          <div className="mx-auto max-w-6xl">
            <Reveal><SectionHeading eyebrow="Selected Work" title="Products, not exercises." copy="The work I care about most starts with a real problem, then earns its complexity one decision at a time." /></Reveal>
            <Reveal className="mt-16"><ProjectStage /></Reveal>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {[
                ['Production UI System', 'WeMakeGoodSoftware', '50+ reusable React components translated from Figma into a consistent production interface.'],
                ['Next system', 'Reserved', 'The bar for the next project is simple: it has to teach me something worth keeping.'],
              ].map(([title, label, copy]) => (
                <Reveal key={title} className="group rounded-[1.75rem] border border-white/[.08] bg-[#0b0b0d] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/[.14] sm:p-10">
                  <p className="text-[11px] text-white/32">{label}</p>
                  <h3 className="mt-20 text-2xl font-medium tracking-[-.035em]">{title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/42">{copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
          <div className="mx-auto max-w-6xl">
            <Reveal><SectionHeading eyebrow="Experience" title="Software is technical. Work is human." copy="Engineering sharpened the craft. Operations, leadership, and customer-facing work shaped how I communicate, prioritize, and take ownership." /></Reveal>
            <div className="mt-20 divide-y divide-white/[.08] border-y border-white/[.08]">
              {experiences.map((item, index) => (
                <Reveal key={item.company} delay={index*.05} className="grid gap-5 py-8 sm:py-10 md:grid-cols-[1fr_1.3fr_2fr] md:items-start">
                  <div><p className="text-sm font-medium">{item.company}</p><p className="mt-1 text-xs text-white/30">{item.location}</p></div>
                  <div><p className="text-sm text-white/72">{item.role}</p><p className="mt-1 text-xs text-white/30">{item.period}</p></div>
                  <p className="max-w-2xl text-sm leading-6 text-white/42">{item.summary}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
          <div className="mx-auto max-w-6xl">
            <Reveal><SectionHeading eyebrow="Education" title="Still becoming." /></Reveal>
            <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/[.08] bg-white/[.08] sm:grid-cols-2">
              {education.map(([school, program, period]) => (
                <Reveal key={school} className="min-h-52 bg-[#0b0b0d] p-8 sm:p-9">
                  <p className="text-xs text-white/30">{period}</p>
                  <h3 className="mt-16 text-xl font-medium tracking-[-.025em]">{school}</h3>
                  <p className="mt-2 text-sm text-white/40">{program}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-6 pt-24 sm:px-8 sm:pt-32 lg:px-12">
          <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-white/[.08] bg-[#0c0c0f] px-7 py-16 text-center sm:px-12 sm:py-24 lg:py-32">
            <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-white/30">Contact</p>
            <h2 className="mx-auto mt-7 max-w-4xl text-balance text-5xl font-semibold tracking-[-.055em] sm:text-6xl lg:text-7xl">Good software starts with a good problem.</h2>
            <p className="mx-auto mt-7 max-w-xl text-sm leading-6 text-white/43 sm:text-base">If you’re building something useful and care about how it’s made, I’d like to hear about it.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="mailto:ricardo.edwards4899@gmail.com" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[.98]">Start a conversation</a>
              <a href="https://www.linkedin.com/in/ricardo-edwards-software-engineer/" target="_blank" rel="noreferrer" className="rounded-full border border-white/[.1] px-5 py-3 text-sm text-white/65 transition hover:bg-white/[.05] hover:text-white">LinkedIn</a>
              <a href="https://github.com/RicardoE7" target="_blank" rel="noreferrer" className="rounded-full border border-white/[.1] px-5 py-3 text-sm text-white/65 transition hover:bg-white/[.05] hover:text-white">GitHub</a>
            </div>
          </Reveal>
          <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-1 py-8 text-[11px] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Ricardo Edwards</p>
            <p>Complex problems. Simple software .</p>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
