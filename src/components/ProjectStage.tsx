import { motion } from 'motion/react'
import type { Project } from '../data/content'

export function ProjectStage({ project }: { project: Project }) {
  const preview = (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: .35 }} className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[1.6rem] border border-white/[.1] bg-black/60 p-3 shadow-2xl shadow-black/40">
      <div className="overflow-hidden rounded-[1.2rem] border border-white/[.07] bg-[#111216]">
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="size-2 rounded-full bg-white/20"/><span className="size-2 rounded-full bg-white/12"/><span className="size-2 rounded-full bg-white/8"/>
        </div>
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full object-cover object-top"
        />
      </div>
    </motion.div>
  )

  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/[.08] bg-[#0c0c0e] p-6 sm:p-9 lg:min-h-[560px] lg:p-12">
      <div className="absolute inset-0 soft-glow opacity-70" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-medium text-[#9fbaff]">{project.eyebrow}</p>
            <h3 className="mt-2 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">{project.title}</h3>
          </div>
          <span className="rounded-full border border-white/[.1] px-3 py-1.5 text-[11px] text-white/45">{project.status}</span>
        </div>

        <div className="mt-16 grid flex-1 items-end gap-10 lg:grid-cols-[.78fr_1.22fr]">
          <div className="max-w-md">
            <p className="text-2xl font-medium tracking-[-.035em] text-white sm:text-3xl">{project.headline}</p>
            <p className="mt-5 text-sm leading-6 text-white/45 sm:text-base">{project.copy}</p>
            <div className="mt-8 flex flex-wrap gap-2 text-[11px] text-white/52">
              {project.stack.map((item) => <span key={item} className="rounded-full border border-white/[.09] bg-white/[.025] px-3 py-1.5">{item}</span>)}
            </div>
            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:scale-[.98]"
                  >
                    Live site
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/[.1] px-4 py-2 text-xs text-white/65 transition hover:bg-white/[.05] hover:text-white"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>

          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live site`}>
              {preview}
            </a>
          ) : preview}
        </div>
      </div>
    </div>
  )
}
