import Section from './Section'
import Reveal from './Reveal'
import Button from './Button'
import { profile } from '../data/content'

export default function Contact() {
  const channels = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'GitHub', value: shortUrl(profile.github), href: profile.github },
    {
      label: 'LinkedIn',
      value: shortUrl(profile.linkedin),
      href: profile.linkedin,
    },
  ]

  return (
    <Section id="contact" index="05" title="Contact">
      <Reveal delay={60}>
        <p className="text-secondary measure text-lg md:text-xl">
          Looking for a full-stack developer, or want to talk through a project?
          The fastest way to reach me is email.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
          {/* Resume — จุดที่สองที่ Recruiter หาเจอแน่นอน */}
          <Button href={profile.resumeUrl} download variant="secondary">
            Download resume
          </Button>
        </div>

        <ul className="border-line mt-14 grid border-t md:grid-cols-3">
          {channels.map((channel) => (
            <li key={channel.label} className="border-line border-b md:border-r md:last:border-r-0">
              <a
                href={channel.href}
                target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer noopener"
                className="hover:bg-elevated group flex flex-col gap-1 p-6 transition-colors duration-150 ease-out"
              >
                <span className="text-secondary font-mono text-xs tracking-widest">
                  {channel.label.toUpperCase()}
                </span>
                <span className="group-hover:text-accent truncate transition-colors duration-150 ease-out">
                  {channel.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}

function shortUrl(url) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}
