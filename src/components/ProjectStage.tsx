import { motion } from 'motion/react'

export function ProjectStage() {
  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/[.08] bg-[#0c0c0e] p-6 sm:p-9 lg:min-h-[560px] lg:p-12">
      <div className="absolute inset-0 soft-glow opacity-70" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-medium text-[#9fbaff]">Featured system</p>
            <h3 className="mt-2 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Omnime</h3>
          </div>
          <span className="rounded-full border border-white/[.1] px-3 py-1.5 text-[11px] text-white/45">In development</span>
        </div>

        <div className="mt-16 grid flex-1 items-end gap-10 lg:grid-cols-[.78fr_1.22fr]">
          <div className="max-w-md">
            <p className="text-2xl font-medium tracking-[-.035em] text-white sm:text-3xl">Discovery should feel personal.</p>
            <p className="mt-5 text-sm leading-6 text-white/45 sm:text-base">A full-stack anime discovery product built around recommendation logic, preference signals, watched-state filtering, and a UI designed to make the next great show easier to find.</p>
            <div className="mt-8 flex flex-wrap gap-2 text-[11px] text-white/52">
              {['React', 'Java', 'Spring Boot', 'MySQL', 'AniList API'].map((item) => <span key={item} className="rounded-full border border-white/[.09] bg-white/[.025] px-3 py-1.5">{item}</span>)}
            </div>
          </div>

          <motion.div whileHover={{ y: -4 }} transition={{ duration: .35 }} className="relative mx-auto w-full max-w-xl rounded-[1.6rem] border border-white/[.1] bg-black/60 p-3 shadow-2xl shadow-black/40">
            <div className="rounded-[1.2rem] border border-white/[.07] bg-[#111216] p-4 sm:p-6">
              <div className="mb-8 flex items-center gap-2">
                <span className="size-2 rounded-full bg-white/20"/><span className="size-2 rounded-full bg-white/12"/><span className="size-2 rounded-full bg-white/8"/>
              </div>
              <div className="space-y-3">
                <div className="h-3 w-24 rounded-full bg-white/9" />
                <div className="h-8 w-3/4 rounded-lg bg-gradient-to-r from-white/18 to-white/6" />
                <div className="grid grid-cols-3 gap-3 pt-5">
                  {[0,1,2].map((n) => <div key={n} className="aspect-[3/4] rounded-xl border border-white/[.06] bg-gradient-to-b from-white/[.08] to-white/[.025]" />)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
