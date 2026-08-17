import { motion } from 'motion/react'

const links = [
  ['Work', '#work'],
  ['Process', '#process'],
  ['Experience', '#experience'],
  ['Toolbox', '#toolbox'],
] as const

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/[.08] bg-black/55 px-4 py-3 backdrop-blur-xl sm:px-5">
        <a href="#top" className="group flex items-center gap-2 text-sm font-medium tracking-tight text-white">
          <span className="grid size-7 place-items-center rounded-full bg-white text-[11px] font-semibold text-black transition-transform duration-300 group-hover:scale-95">RE</span>
          <span className="hidden sm:inline">Ricardo Edwards</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-xs text-white/55 transition-colors hover:text-white">{label}</a>)}
        </div>
        <a href="mailto:ricardo.edwards4899@gmail.com" className="rounded-full border border-white/[.12] bg-white/[.04] px-4 py-2 text-xs font-medium text-white transition hover:bg-white hover:text-black">Contact</a>
      </nav>
    </motion.header>
  )
}
