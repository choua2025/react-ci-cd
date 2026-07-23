import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          <div className="mb-8">
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
              CI/CD Pipeline Active
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
            React + Tailwind
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            This application is deployed automatically using GitHub Actions
            and Vercel.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Count is {count}
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-800"
            >
              GitHub
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="font-semibold">React</h2>
              <p className="mt-2 text-sm text-slate-400">
                Frontend framework
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="font-semibold">Tailwind</h2>
              <p className="mt-2 text-sm text-slate-400">
                Utility-first CSS
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="font-semibold">Vercel</h2>
              <p className="mt-2 text-sm text-slate-400">
                Automatic deployment
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Version 1.0 • Deployed with CI/CD 🚀
          </p>
        </div>
      </section>
    </main>
  )
}

export default App