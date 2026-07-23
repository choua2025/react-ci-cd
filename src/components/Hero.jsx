import Button from './Button'
import { profile, techStack } from '../data/content'

/* Hero — ต้องตอบให้ครบใน 30 วินาที: คุณคือใคร ทำอะไรได้ ดูผลงานที่ไหน
   ความโดดเด่นมาจากขนาดตัวอักษร ไม่ใช่เอฟเฟกต์ */
export default function Hero() {
  const primaryStack = techStack.flatMap((g) => g.items).slice(0, 6)
  const [firstName, ...rest] = profile.name.split(' ')

  return (
    <section id="top" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-16 md:px-8 md:pt-28 md:pb-24">
        <p className="text-secondary mb-6 flex items-center gap-3 font-mono text-xs tracking-widest md:mb-8">
          {profile.availableForWork && (
            <span className="bg-accent inline-block size-2 rounded-full" />
          )}
          {profile.role.toUpperCase()} · {profile.location.toUpperCase()}
        </p>

        <h1 id="hero-heading" className="text-display">
          {firstName}
          <br />
          <span className="text-secondary">{rest.join(' ')}</span>
        </h1>

        <p className="text-secondary measure mt-8 text-lg md:mt-10 md:text-xl">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 md:mt-12">
          <Button href="#projects">View projects</Button>
          <Button href="#contact" variant="secondary">
            Get in touch
          </Button>
        </div>

        <ul className="border-line mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t pt-6 md:mt-20">
          {primaryStack.map((item) => (
            <li
              key={item}
              className="text-secondary font-mono text-xs md:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
