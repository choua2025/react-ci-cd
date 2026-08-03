import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data/content'

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal delay={60}>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="text-secondary measure space-y-6 text-lg md:col-span-8 md:text-xl">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <dl className="border-line space-y-6 border-t pt-6 font-mono text-sm md:col-span-4 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <div>
              <dt className="text-secondary text-xs tracking-widest">ROLE</dt>
              <dd className="mt-1">{profile.role}</dd>
            </div>
            <div>
              <dt className="text-secondary text-xs tracking-widest">BASED</dt>
              <dd className="mt-1">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-secondary text-xs tracking-widest">STATUS</dt>
              <dd className={`mt-1 ${profile.availableForWork ? 'text-accent' : ''}`}>
                {profile.availableForWork
                  ? 'Open to opportunities'
                  : 'Not available'}
              </dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </Section>
  )
}
