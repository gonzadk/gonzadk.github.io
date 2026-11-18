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
    /** Closing line under the contact links. */
    outro: string
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
    position: 'Staff Software Engineer · Tech Lead · AI-native products',
    description:
      'I build the interfaces where people and AI agents work together — agentic platforms, AI-powered workflows and the frontend architecture that makes them feel effortless. Remote from Córdoba, Argentina.',
    email: 'gonzaloterzano@gmail.com',
    location: 'Córdoba, AR',
    links: [
      { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/gonzalo-terzano' },
      { label: 'GitHub ↗', href: 'https://www.github.com/gonzadk' },
      { label: 'Resume PDF ↓', href: 'resume.pdf' },
    ],
    outro: 'Designed with AI, reviewed by a human. Hallucinations detected: 0 — that we know of.',
  },
  profile: {
    title: 'Engineering for the agentic era.',
    lead: '11+ years shipping products — now focused on the layer where AI meets people: agent platforms, AI-powered workflows and the UX that turns powerful models into products people actually trust and use.',
    body: 'I work AI-first, treating agents as part of the toolchain for building, reviewing and testing, while bringing the architecture, technical leadership and mentoring that keep quality high as teams move faster.',
  },
  impact: [
    { value: '$20.4M', caption: 'Enterprise contract — Medable Studio' },
    { value: '$18M+', caption: 'Enterprise commitments — Agent Studio (agentic AI)' },
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
        'Lead frontend architecture for **Agent Studio**, Medable’s **agentic AI platform** — capabilities backing **$18M+** in enterprise commitments',
        'Led the launch of **Medable Studio**, contributing to a **$20.4M** enterprise contract',
        'E2E + CI that cut validation from **1–2 weeks to 1–2 days**',
        'Technical direction across AI-powered product experiences, monorepos and APIs',
        'Sr FE (2022) → Tech Lead (2024) → **Staff & Tech Lead (2026)**',
      ],
      skills: ['Agentic AI', 'AI UX', 'React', 'TypeScript', 'Next.js', 'Playwright', 'NX'],
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
