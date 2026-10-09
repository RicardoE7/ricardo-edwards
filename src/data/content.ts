import omnime from '../images/omnime.png'
import storyVault from '../images/story-vault.png'
import realtorPage from '../images/realtor-page.png'

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

export type Project = {
  eyebrow: string
  title: string
  status: string
  headline: string
  copy: string
  stack: string[]
  image: string
  imageAlt: string
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    eyebrow: 'Featured system',
    title: 'Omnime',
    status: 'In development',
    headline: 'Discovery should feel personal.',
    copy: 'A full-stack AI-powered anime discovery platform that learns from user preferences, ratings, and watch history to deliver personalized recommendations and make finding your next great show effortless. *in development* ',
    stack: ['React', 'Java', 'Spring Boot', 'MySQL', 'AniList API'],
    image: omnime,
    imageAlt: 'Omnime anime discovery interface with recommendations, watchlist, and genre filters',
    liveUrl: 'https://getomnime.com/',
    githubUrl: 'https://github.com/RicardoE7/omnime',
  },
  {
    eyebrow: 'Live product',
    title: 'Story Vault',
    status: 'Live',
    headline: 'Keep your stories. Build your worlds.',
    copy: 'A private worldbuilding workspace for writers. Create and manage stories, then organize characters, locations, events, factions, and items in one place — with accounts, Cloudinary image uploads, and a responsive editorial interface.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Express', 'MongoDB', 'Cloudinary'],
    image: storyVault,
    imageAlt: 'Story Vault sign-in screen for a private worldbuilding workspace',
    liveUrl: 'https://story-vault-omega.vercel.app/',
    githubUrl: 'https://github.com/RicardoE7/story-vault',
  },
  {
    eyebrow: 'Client work',
    title: 'Destiney Sells',
    status: 'Live',
    headline: 'Luxury real estate deserves a luxury experience.',
    copy: 'A marketing site for Destiney Stiles, a luxury real estate advisor in the Triad. Built with HTML, CSS, and JavaScript — listings, testimonials, contact, and a refined presentation for buyers and sellers.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: realtorPage,
    imageAlt: 'Destiney Stiles realtor homepage with luxury branding, navigation, and hero portrait',
    liveUrl: 'https://destiney-stiles-realtor-page.vercel.app/',
    githubUrl: 'https://github.com/RicardoE7/destiney-stiles-realtor-page',
  },
]

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
