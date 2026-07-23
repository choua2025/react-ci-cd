import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-line border-t">
      <div className="text-secondary mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 font-mono text-xs sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React · Tailwind CSS · Vite</p>
      </div>
    </footer>
  )
}
