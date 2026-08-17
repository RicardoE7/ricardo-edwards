export type Experience = {
  role: string
  company: string
  period: string
  location: string
  summary: string
}

export const experiences: Experience[] = [
  {
    role: 'Customer Advocate',
    company: 'Carvana',
    period: 'Nov 2025 — May 2026',
    location: 'Winston-Salem, NC',
    summary: 'Owned the last mile of the customer journey—coordinating vehicle handoffs, resolving issues across teams, and keeping a high-trust experience moving.'
  },
  {
    role: 'Software Engineering Intern & Project Manager',
    company: 'WeMakeGoodSoftware',
    period: 'Jan 2025 — Oct 2025',
    location: 'Remote',
    summary: 'Translated Figma into 50+ reusable React components, collaborated across Agile sprints, and contributed to code reviews focused on maintainability and consistency.'
  },
  {
    role: 'Delivery Driver',
    company: 'Amazon',
    period: 'Nov 2022 — Dec 2023',
    location: 'Winston-Salem, NC',
    summary: 'Worked independently inside a metrics-heavy operation, adapting routes and priorities while completing 150–250 deliveries per shift.'
  },
  {
    role: 'Assistant General Manager',
    company: 'Bojangles',
    period: 'Sep 2018 — Oct 2022',
    location: 'Winston-Salem, NC',
    summary: 'Led daily operations for a high-volume restaurant and supported a 20+ person team across scheduling, training, inventory, customer recovery, and performance.'
  },
]

export const education = [
  ['Per Scholas', 'Software Engineering Training', 'Expected Oct 2026'],
  ['Western Governors University', 'Degree in progress', 'Expected Jun 2027'],
  ['CodersCampus', 'Full-Stack Java Bootcamp', 'Jan 2024'],
  ['Sabio', 'Full-Stack Web Development Bootcamp', 'Oct 2023'],
] as const

export const toolbox = [
  ['Languages', ['Java', 'TypeScript', 'JavaScript']],
  ['Frontend', ['React', 'HTML5', 'CSS3', 'Responsive UI']],
  ['Backend', ['Spring Boot', 'Node.js', 'REST APIs', 'Hibernate']],
  ['Data', ['MySQL', 'MongoDB', 'Database Design']],
  ['Quality', ['Unit Testing', 'Integration Testing', 'Code Reviews', 'Refactoring']],
  ['Delivery', ['Git', 'GitHub Actions', 'Netlify', 'Render']],
  ['AI', ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'AI-assisted workflows']],
  ['Practice', ['Agile', 'Scrum', 'OWASP', 'API Design']],
] as const
