import Section from './Section'
import Reveal from './Reveal'
import Badge from './Badge'
import { techStack } from '../data/content'

/* Tech Stack — จัดกลุ่ม ไม่มี skill bar เปอร์เซ็นต์
   แบ่งกลุ่มด้วยเส้นบาง ไม่ใช่ Card ซ้อน Card */
export default function TechStack() {
  return (
    <Section id="stack" index="02" title="Tech Stack">
      <div className="border-line grid border-t md:grid-cols-2">
        {techStack.map((group, i) => (
          <Reveal
            key={group.group}
            delay={i * 60}
            className="border-line border-b p-6 md:p-8 md:odd:border-r"
          >
            <h3 className="text-secondary mb-5 font-mono text-xs tracking-widest">
              {group.group.toUpperCase()}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
