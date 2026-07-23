import Reveal from './Reveal'

/* Section — โครงมาตรฐานของทุก Section
   - container max-w-6xl จัดกึ่งกลาง
   - แบ่ง Section ด้วยเส้นบาง (border-t) ไม่ใช่การซ้อน Card
   - py-24 ขึ้นไปบน Desktop */
export default function Section({ id, index, title, children }) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-line scroll-mt-20 border-t"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeader id={headingId} index={index} title={title} />
        </Reveal>
        {children}
      </div>
    </section>
  )
}

/* Section Header — ตัวใหญ่ ชิดซ้าย พร้อมหมายเลขกำกับแบบ Editorial */
function SectionHeader({ id, index, title }) {
  return (
    <header className="mb-10 md:mb-16">
      <p className="text-secondary mb-3 font-mono text-xs tracking-widest">
        <span className="text-accent">{index}</span> / {title.toUpperCase()}
      </p>
      <h2
        id={id}
        className="text-3xl font-extrabold tracking-tight md:text-5xl"
      >
        {title}
      </h2>
    </header>
  )
}
