# Design System — Developer Portfolio

> ไฟล์นี้เป็นแหล่งอ้างอิงด้าน Visual Identity สำหรับโปรเจกต์นี้
> AI Coding Agent และผู้พัฒนาทุกคนต้องยึดตามไฟล์นี้เมื่อสร้างหน้าใหม่หรือ Component ใหม่
> Stack: React + Tailwind CSS

---

## Design Direction

**Bold Editorial** — โดดเด่นด้วย Typography ขนาดใหญ่และ Layout ที่กล้าหาญ
ไม่ใช่โดดเด่นด้วยเอฟเฟกต์หวือหวา

เว็บนี้ต้องดูเหมือนงานของ Developer ที่มีรสนิยมด้านการออกแบบ
ไม่ใช่ template สำเร็จรูป และไม่ใช่เว็บที่ดูเหมือน AI สร้าง

**บุคลิกที่ต้องการสื่อ:** มั่นใจ · เป็นมืออาชีพ · มีรสนิยม · ตรงไปตรงมา

---

## Design Principles

1. **Recruiter อ่านจบใน 30 วินาที** — ข้อมูลสำคัญ (ชื่อ, ตำแหน่ง, Tech Stack, ผลงานเด่น) ต้องเห็นทันทีโดยไม่ต้องเลื่อน
2. **โดดเด่นด้วยโครงสร้าง ไม่ใช่ด้วยเอฟเฟกต์** — ใช้ขนาดตัวอักษร ความคอนทราสต์ และพื้นที่ว่างสร้างความน่าสนใจ
3. **สม่ำเสมอทุกหน้า** — ปุ่ม สี ระยะห่าง Component ต้องเหมือนกันทั้งระบบ
4. **ผลงานคือพระเอก** — ทุกการตัดสินใจด้านดีไซน์ต้องทำให้ผลงานเด่นขึ้น ไม่ใช่แย่งความสนใจ
5. **เร็วและเข้าถึงได้** — ต้องโหลดเร็ว ใช้งานได้บนมือถือ และผ่านมาตรฐาน Accessibility

---

## Colors (Design Tokens)

ธีมหลักเป็น Dark เพื่อความโดดเด่น พร้อมสี Accent เดียวที่ใช้อย่างมีวินัย

| Token | Value | การใช้งาน |
|---|---|---|
| `bg-base` | `#0A0A0B` | พื้นหลังหลัก |
| `bg-elevated` | `#141416` | Card, Section ที่ยกระดับ |
| `text-primary` | `#FAFAFA` | หัวข้อและข้อความหลัก |
| `text-secondary` | `#A1A1A6` | คำอธิบาย, ข้อความรอง |
| `accent` | `#00E5A0` | CTA, Link, Highlight |
| `border` | `#26262A` | เส้นแบ่ง Section |

**กฎการใช้สี**
- ใช้สี Accent เพียงสีเดียวทั้งเว็บ — ห้ามเพิ่มสี Accent ที่สอง
- สี Accent สงวนไว้สำหรับ CTA หลัก, Link และ Highlight สำคัญเท่านั้น
- ห้ามใช้สี Accent เป็นพื้นหลังผืนใหญ่
- Contrast Ratio ต้องผ่าน WCAG AA เป็นอย่างต่ำ

---

## Typography

| ประเภท | รายละเอียด |
|---|---|
| Display / Hero | Sans-serif น้ำหนัก Bold–Black, `clamp(3rem, 8vw, 6rem)`, tracking แน่น |
| Heading | Bold, ขนาดลดหลั่นชัดเจนจาก Body |
| Body | Sans-serif อ่านง่าย, ไม่ต่ำกว่า 16px, line-height 1.6 |
| Code / Tech Stack | Monospace — ใช้แสดงชื่อเทคโนโลยีเพื่อสื่อบุคลิก Developer |

**กฎ**
- ใช้ Font Family ไม่เกิน 2 ตระกูล (Sans + Mono)
- ความต่างระหว่างหัวข้อกับ Body ต้องชัดเจน — นี่คือแหล่งความ Bold หลักของเว็บ
- ความกว้างบรรทัดของ Body ไม่เกิน 70 ตัวอักษร

---

## Spacing & Layout

- ใช้ Spacing Scale ของ Tailwind: `4, 8, 12, 16, 24, 32, 48, 64, 96`
- ระยะห่างระหว่าง Section: กว้าง (`py-24` ขึ้นไปบน Desktop)
- Container กว้างสุด `max-w-6xl` จัดกึ่งกลาง
- ใช้ Grid ที่ชัดเจน แบ่ง Section ด้วยเส้นบาง (`border`) แทนการซ้อน Card
- Mobile-first — ออกแบบจากจอเล็กขึ้นไปเสมอ

---

## Components

### Button
- มุมโค้งเล็กน้อย (`rounded-md`)
- **Primary CTA:** พื้นสี Accent ตัวอักษรสีเข้ม
- **Secondary:** พื้นโปร่ง มีเส้นขอบ
- ไม่มี Gradient ไม่มีเงาหนา
- มี State ครบ: hover, focus-visible, active

### Project Card
- พื้น `bg-elevated` เส้นขอบบาง
- แสดง: ชื่อโปรเจกต์ · คำอธิบายสั้น · Tech Stack (Mono) · Link ไป Demo และ GitHub
- Hover เปลี่ยนสีเส้นขอบแบบ Subtle — ห้ามยกลอยหรือขยายขนาด

### Tech Stack Badge
- ใช้ Monospace ตัวเล็ก พื้นโปร่ง เส้นขอบบาง
- แสดง Stack จริง: Node.js · Express · PostgreSQL · Vue · React · Tailwind CSS

### Section Header
- ตัวอักษรขนาดใหญ่ ชิดซ้าย
- อาจมีหมายเลขกำกับแบบ Editorial (`01 / Projects`)

---

## Page Structure

หน้าเดียว (Single Page) เลื่อนลงตามลำดับนี้:

1. **Hero** — ชื่อ, ตำแหน่ง (Full-Stack Developer), ประโยคแนะนำตัวสั้น ๆ, CTA (ดูผลงาน / ติดต่อ)
2. **About** — ย่อหน้าสั้น 2–3 ประโยค ตรงไปตรงมา
3. **Tech Stack** — จัดกลุ่ม: Frontend · Backend · Database · Tools
4. **Projects** — 3–6 ชิ้น เรียงจากเด่นที่สุด พร้อม Link ใช้งานจริง
5. **Experience** — Timeline หรือ List เรียบง่าย
6. **Contact** — Email, GitHub, LinkedIn และปุ่มดาวน์โหลด Resume

**สำคัญ:** ปุ่มดาวน์โหลด Resume ต้องหาเจอง่ายเสมอ (Nav หรือ Hero) เพราะเป็นสิ่งที่ Recruiter ต้องการมากที่สุด

---

## Motion & Animation

- ใช้เท่าที่จำเป็น: Fade-in หรือ Slide ระยะสั้นตอน Scroll เข้ามา
- Duration `150–300ms`, easing `ease-out`
- Hover ต้องตอบสนองทันที ไม่หน่วง
- รองรับ `prefers-reduced-motion` เสมอ
- **ห้าม:** Parallax หนัก ๆ, Cursor Effect, Text Animation ทีละตัวอักษร, Loading Screen

---

## Accessibility

- Contrast ผ่าน WCAG AA
- ใช้งานด้วยคีย์บอร์ดได้ครบ มี Focus Indicator ชัดเจน
- ใช้ Semantic HTML (`<main>`, `<section>`, `<nav>`, heading เรียงลำดับถูกต้อง)
- รูปภาพทุกรูปมี `alt`

---

## Avoid — สิ่งที่ห้ามทำเด็ดขาด

- Glassmorphism
- Gradient สีม่วง–น้ำเงิน (ลายเซ็นของ AI Template)
- Floating Card ที่มีเงาหนาจำนวนมาก
- สี Accent มากกว่าหนึ่งสี
- Emoji เป็นไอคอนหลักของ Section
- Hero ที่มีแต่ Animation แต่ไม่บอกว่าคุณคือใครและทำอะไรได้
- Testimonial ปลอมหรือ Logo บริษัทที่ไม่เคยร่วมงานด้วย
- Skill Bar แบบเปอร์เซ็นต์ (เช่น "React 85%") — วัดผลไม่ได้จริงและ Recruiter ไม่เชื่อถือ
