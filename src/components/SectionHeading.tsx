type Props = { eyebrow: string; title: string; copy?: string }

export function SectionHeading({ eyebrow, title, copy }: Props) {
  return (
    <div className="max-w-3xl">
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[.24em] text-white/38">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl md:text-6xl">{title}</h2>
      {copy && <p className="mt-6 max-w-2xl text-base leading-7 text-white/48 sm:text-lg">{copy}</p>}
    </div>
  )
}
