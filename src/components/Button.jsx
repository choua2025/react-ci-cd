/* Button — rounded-md, ไม่มี gradient, ไม่มีเงาหนา, มี state ครบ
   variant: 'primary' = พื้น accent ตัวอักษรเข้ม | 'secondary' = พื้นโปร่ง มีเส้นขอบ */

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold ' +
  'transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'focus-visible:outline-accent'

const variants = {
  primary: 'bg-accent text-base hover:bg-accent/85 active:bg-accent/70',
  secondary:
    'border border-line text-primary hover:border-secondary hover:bg-elevated active:bg-elevated/70',
}

export default function Button({
  as = 'a',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const Tag = as
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
