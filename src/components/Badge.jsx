/* Tech Stack Badge — Monospace ตัวเล็ก พื้นโปร่ง เส้นขอบบาง */

export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`border-line text-secondary inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs ${className}`}
    >
      {children}
    </span>
  )
}
