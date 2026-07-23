import Section from './Section'
import Reveal from './Reveal'
import Badge from './Badge'
import { projects } from '../data/content'

/* Projects — ผลงานคือพระเอก
   Card: bg-elevated + เส้นขอบบาง, hover เปลี่ยนสีเส้นขอบเท่านั้น
   ห้ามยกลอย ห้ามขยายขนาด */
export default function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 60} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="bg-elevated border-line hover:border-secondary flex h-full flex-col rounded-md border p-6 transition-colors duration-150 ease-out md:p-8">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight md:text-2xl">
          {project.title}
        </h3>
        <span className="text-secondary shrink-0 pt-1 font-mono text-xs">
          {project.year}
        </span>
      </div>

      <p className="text-secondary measure grow">{project.description}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      {(project.demo || project.repo) && (
        <div className="border-line mt-6 flex flex-wrap gap-6 border-t pt-5">
          {project.demo && (
            <ProjectLink href={project.demo}>
              Live demo
              <ArrowIcon />
            </ProjectLink>
          )}
          {project.repo && (
            <ProjectLink href={project.repo}>
              Source
              <ArrowIcon />
            </ProjectLink>
          )}
        </div>
      )}
    </article>
  )
}

function ProjectLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="text-accent inline-flex items-center gap-1.5 text-sm font-medium hover:underline hover:underline-offset-4"
    >
      {children}
    </a>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}
