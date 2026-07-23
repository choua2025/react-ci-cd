import Section from './Section'
import Reveal from './Reveal'
import { experience } from '../data/content'

/* Experience — List เรียบง่าย แบ่งด้วยเส้นบาง */
export default function Experience() {
  return (
    <Section id="experience" index="04" title="Experience">
      <ol className="border-line border-t">
        {experience.map((job, i) => (
          <Reveal
            key={`${job.company}-${job.period}`}
            as="li"
            delay={i * 60}
            className="border-line block border-b py-8 md:py-10"
          >
            <div className="grid gap-4 md:grid-cols-12 md:gap-8">
              <p className="text-secondary font-mono text-xs tracking-widest md:col-span-3 md:pt-1">
                {job.period.toUpperCase()}
              </p>

              <div className="md:col-span-9">
                <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                  {job.role}
                </h3>
                <p className="text-accent mt-1 font-mono text-sm">
                  {job.company}
                </p>

                <ul className="text-secondary measure mt-4 space-y-2">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3">
                      <span
                        className="text-secondary shrink-0 select-none"
                        aria-hidden="true"
                      >
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
