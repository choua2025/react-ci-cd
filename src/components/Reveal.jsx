import { useEffect, useRef, useState } from 'react'

/* Reveal — Fade + Slide สั้น ๆ ตอน scroll เข้ามา (300ms, ease-out)
   ถ้าผู้ใช้เปิด prefers-reduced-motion จะแสดงทันทีโดยไม่มี animation
   (จัดการใน index.css) */
export default function Reveal({
  as = 'div',
  delay = 0,
  className = '',
  children,
  ...props
}) {
  const Tag = as
  const ref = useRef(null)
  // IntersectionObserver ไม่มีใน environment เก่า/SSR — แสดงเลยเพื่อความปลอดภัย
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}
