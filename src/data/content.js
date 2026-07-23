/* ============================================================
   ข้อมูลทั้งหมดของเว็บอยู่ที่ไฟล์นี้ที่เดียว
   แก้ที่นี่ → ทุก Section อัปเดตตาม ไม่ต้องไปแก้ใน Component
   บรรทัดที่มี TODO คือค่าตัวอย่าง ให้แทนที่ด้วยข้อมูลจริงของคุณ
   ============================================================ */

export const profile = {
  name: 'Choua Vang',
  role: 'Full-Stack Developer',
  location: 'Thailand',
  // ประโยคแนะนำตัวสั้น ๆ ใน Hero — ตรงไปตรงมา ไม่ต้องหรูหรา
  tagline:
    'I build web applications end to end — from PostgreSQL schemas and Express APIs to production UIs in React and Vue.',
  // About: 2–3 ประโยค
  about: [
    'I focus on shipping software that actually reaches users. Most of my work sits between the database and the interface, which means I care as much about query plans as I do about spacing and contrast.',
    'Recently I have been working on CI/CD pipelines with GitHub Actions and Vercel, so that every merge to main goes live without anyone touching a terminal.',
  ],
  email: 'vchoua05@gmail.com', // TODO: ตรวจสอบอีเมลที่ใช้รับงาน
  github: 'https://github.com/choua2025', // TODO
  linkedin: 'https://linkedin.com/in/your-handle', // TODO
  // วางไฟล์ resume.pdf ไว้ในโฟลเดอร์ public/ แล้วลิงก์นี้จะใช้งานได้ทันที
  resumeUrl: '/resume.pdf',
  availableForWork: true,
}

/* Tech Stack — จัดกลุ่มตาม design.md: Frontend · Backend · Database · Tools
   ใส่เฉพาะของที่ใช้งานจริงและอธิบายได้ในการสัมภาษณ์ */
export const techStack = [
  {
    group: 'Frontend',
    items: ['React', 'Vue', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML/CSS'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'REST API', 'JWT Auth'],
  },
  {
    group: 'Database',
    items: ['PostgreSQL', 'MySQL', 'Prisma'],
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub Actions', 'Docker', 'Vercel', 'Postman'],
  },
]

/* Projects — 3–6 ชิ้น เรียงจากเด่นที่สุดลงมา
   ทุกชิ้นควรมีลิงก์ที่กดแล้วใช้งานได้จริง ถ้ายังไม่มีให้ปล่อย null (ปุ่มจะไม่แสดง) */
export const projects = [
  {
    title: 'CI/CD Pipeline — React on Vercel',
    year: '2026',
    description:
      'A React app wired to a GitHub Actions pipeline: lint and build on every pull request, preview deploy per branch, production deploy on merge to main.',
    stack: ['React', 'Vite', 'GitHub Actions', 'Vercel'],
    demo: null, // TODO: ใส่ URL production
    repo: 'https://github.com/choua2025', // TODO: ใส่ URL repo จริง
  },
  {
    title: 'Inventory Management API', // TODO
    year: '2025',
    description:
      'REST API for stock, orders and suppliers. Role-based access with JWT, transactional writes in PostgreSQL, and an OpenAPI spec used by two client apps.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    demo: null,
    repo: null,
  },
  {
    title: 'Storefront Dashboard', // TODO
    year: '2025',
    description:
      'Admin dashboard for a small e-commerce shop: product CRUD, order tracking and a sales overview built on server-side aggregation instead of client-side loops.',
    stack: ['Vue', 'Tailwind CSS', 'Express', 'MySQL'],
    demo: null,
    repo: null,
  },
]

/* Experience — เรียงจากใหม่ไปเก่า */
export const experience = [
  {
    role: 'Full-Stack Developer', // TODO
    company: 'Freelance',
    period: '2024 — Present',
    points: [
      'Built and shipped web applications for small businesses, covering database design, API development and frontend delivery.',
      'Set up automated deployment pipelines so clients can ship changes without manual steps.',
    ],
  },
  {
    role: 'Web Developer', // TODO
    company: 'Company Name',
    period: '2023 — 2024',
    points: [
      'Developed and maintained internal tools used daily by the operations team.',
      'Migrated legacy pages to a component-based frontend, cutting page load time roughly in half.',
    ],
  },
]
