/**
 * Resume content. Text inside `**double asterisks**` is rendered bold.
 */
export type TResume = {
  aboutMe: {
    name: string
    shortRole: string
    position: string
    description: string
    email: string
    location: string
    links: AboutMeLink[]
  }
  profile: {
    title: string
    lead: string
    body: string
  }
  impact: Impact[]
  education: Education[]
  experience: Experience[]
}

export type Experience = {
  company: string
  website: string
  role: string
  timeline: string
  startYear: string
  current?: boolean
  highlights: string[]
  skills: string[]
}

export type Education = {
  title: string
  place: string
  timeline: string
}

export type Impact = {
  value: string
  caption: string
}

export type AboutMeLink = {
  label: string
  href: string
}

export const RESUME: TResume = {
  aboutMe: {
    name: 'Gonzalo Terzano',
    shortRole: 'Staff Engineer',
    position: 'Staff Software Engineer · Tech Lead · AI Product Frontend',
    description:
      'Building AI-powered products and crafting pixel-perfect designs into interactive web experiences — remotely, from Córdoba, Argentina.',
    email: 'gonzaloterzano@gmail.com',
    location: 'Córdoba, AR',
    links: [
      { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/gonzalo-terzano' },
      { label: 'GitHub ↗', href: 'https://www.github.com/gonzadk' },
      { label: 'Resume PDF ↓', href: 'resume.pdf' },
    ],
  },
  profile: {
    title: '11+ years turning hard problems into simple products.',
    lead: 'I combine hands-on engineering with architecture, technical leadership and mentoring — and I’ve helped launch products used by thousands of users and backed by significant enterprise revenue.',
    body: 'Most interested in product engineering, frontend architecture and AI-powered experiences — where strong technical decisions directly move the product and the business.',
  },
  impact: [
    { value: '$20.4M', caption: 'Enterprise contract — Medable Studio' },
    { value: '$18M+', caption: 'Commitments — Agent Studio' },
    { value: '2w→2d', caption: 'Validation cycles via E2E + CI' },
    { value: '11+', caption: 'Years shipping products' },
  ],
  education: [
    {
      title: 'Degree in Computer Science',
      place: 'National University of San Juan - FCEFyN',
      timeline: 'Mar 2009 - Dic 2014',
    },
    {
      title: 'Electronics Technician',
      place: 'National University of San Juan - EIDFS',
      timeline: 'Mar 2005 - Dic 2008',
    },
  ],
  experience: [
    {
      company: 'Medable',
      website: 'https://www.medable.com/',
      role: 'Staff Software Engineer & Tech Lead',
      timeline: 'Jan 2022 — Present',
      startYear: '2022',
      current: true,
      highlights: [
        'Sr FE (2022) → Tech Lead (2024) → **Staff & Tech Lead (2026)**',
        'Frontend architecture for **Agent Studio**, the agentic AI platform — **$18M+** in commitments',
        'Led the launch of **Medable Studio**, contributing to a **$20.4M** contract',
        'E2E + CI that cut validation from **1–2 weeks to 1–2 days**',
        'Mentoring, architecture and code reviews across the team',
      ],
      skills: ['AI', 'React', 'TypeScript', 'Next.js', 'Playwright', 'NX', 'Framer Motion'],
    },
    {
      company: 'Halo Media',
      website: 'https://halopowered.com/',
      role: 'Sr Software Engineer',
      timeline: 'Sep 2021 — Dec 2021',
      startYear: '2021',
      highlights: [
        'Directed **frontend strategy** for a highly customizable platform',
        'CI/CD pipelines across projects',
        'React technical interviews & hiring',
        'Reusable internal component library',
      ],
      skills: ['React', 'TypeScript', 'Node.js', 'Leadership'],
    },
    {
      company: 'Raftr',
      website: 'https://www.raftr.com/',
      role: 'Sr Frontend Engineer & Web Lead',
      timeline: 'Apr 2020 — Jun 2021',
      startYear: '2020',
      highlights: [
        'Led a **4-person team** across 3 interconnected web projects',
        'Performance: TTFB, SSR, critical production issues',
        'Introduced CI/CD, TypeScript and PR standards',
        'Micro-frontend + shared library',
      ],
      skills: ['React', 'Next.js', 'TypeScript', 'Lerna'],
    },
    {
      company: '24 Hour Fitness',
      website: 'https://www.24hourfitness.com/',
      role: 'Software Engineer',
      timeline: 'Oct 2019 — Apr 2020',
      startYear: '2019',
      highlights: [
        'New platform for buying **gym memberships** + add-ons',
        'Unit test coverage **50% → 70%**',
        'Angular patterns, CI/CD, coordinated three contractors',
      ],
      skills: ['Angular', 'TypeScript', 'Jest'],
    },
    {
      company: 'ThirdLove',
      website: 'https://www.thirdlove.com/',
      role: 'Full Stack Engineer',
      timeline: 'Jun 2019 — Sep 2019',
      startYear: '2019',
      highlights: [
        'Re-designed **FitFinder**, a flagship micro-frontend',
        'Foundations of a company-wide component library',
        'CI/CD + a CLI for AWS deployments',
      ],
      skills: ['React', 'Node.js', 'TypeScript'],
    },
    {
      company: 'McAfee',
      website: 'https://www.mcafee.com/',
      role: 'Software Development Engineer',
      timeline: 'Feb 2017 — May 2019',
      startYear: '2017',
      highlights: [
        'Shared leadership of **3 teams** of 5–6 people',
        'Common library used across the company',
        'Features end to end with PO & UX',
        'Hybrid Angular / AngularJS application',
      ],
      skills: ['Angular', 'TypeScript', 'Leadership'],
    },
  ],
}
