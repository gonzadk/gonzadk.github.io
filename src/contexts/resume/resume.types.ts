import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type TResume = {
  aboutMe: {
    name: string
    position: string
    description: string
    details: AboutMeDetail[]
    links: AboutMeLink[]
  }
  description: string[]
  education: Education[]
  experience: Experience[]
}

export type Experience = {
  company: string
  description: string[]
  role: string
  timeline: string
  website: string
  skills: string[]
}

export type Education = {
  title: string
  place: string
  timeline: string
}

export type AboutMeLink = {
  href: string
  icon: IconDefinition
}

export type AboutMeDetail = {
  label: string
  iconClass: string
  iconName: string
}

export const RESUME: TResume = {
  aboutMe: {
    name: 'Gonzalo Terzano',
    position:
      'Staff Software Engineer & Tech Lead @ Medable | AI & Product Frontend | React, TypeScript, Next.js',
    description:
      "Remotely working from Argentina, I'm building AI-powered products and crafting pixel-perfect designs into interactive web experiences, prioritizing performance and simplicity.",
    details: [
      {
        label: 'gonzaloterzano@gmail.com',
        iconClass: 'material-icons',
        iconName: 'email',
      },
      {
        label: 'Córdoba, Argentina',
        iconClass: 'material-icons',
        iconName: 'place',
      },
    ],
    links: [
      { href: 'https://www.linkedin.com/in/gonzalo-terzano', icon: faLinkedin },
      { href: 'https://www.github.com/gonzadk', icon: faGithub },
    ],
  },
  description: [
    'Staff Software Engineer and Tech Lead with 11+ years of experience building scalable, user-focused products.',
    'I specialize in turning complex technical and product challenges into intuitive experiences, combining hands-on engineering with architecture, technical leadership, and mentoring.',
    'Throughout my career, I’ve helped build and launch products used by thousands of users, contributed to significant enterprise revenue, and led teams through complex product and platform initiatives.',
    'I’m especially interested in product engineering, frontend architecture, and AI-powered experiences where strong technical decisions can directly improve the product and the business.',
  ],
  education: [
    {
      title: 'Degree in Computer Science',
      place: 'National University of San Juan - FCEFyN',
      timeline: 'Mar 2009 - Dic 2014',
    },
    {
      title: 'High School - Electronics Technician',
      place: 'National University of San Juan - EIDFS - ARG',
      timeline: 'Mar 2005 - Dic 2008',
    },
  ],
  experience: [
    {
      company: 'Medable',
      website: 'https://www.medable.com/',
      role: 'Staff Software Engineer & Tech Lead',
      timeline: 'Jan 2022 - Present',
      description: [
        '● Career path: Sr Developer, Front End (2022) → Tech Lead, Software Engineer II (2024) → Staff Software Engineer & Tech Lead (2026).',
        '● Lead frontend architecture and development for Agent Studio, Medable’s agentic AI platform, helping deliver capabilities supporting $18M+ in enterprise customer commitments.',
        '● Led the development and launch of Medable Studio, directly contributing to a $20.4M enterprise contract and supporting additional enterprise deals.',
        '● Built and scaled automated E2E testing and CI workflows, reducing validation cycles from 1–2 weeks to 1–2 days.',
        '● Drove technical direction across complex frontend initiatives, working hands-on with React, TypeScript, Next.js, monorepos, APIs, and AI-powered product experiences.',
        '● Mentored engineers, led architecture and code reviews, and raised engineering standards across the team.',
      ],
      skills: [
        'Leadership',
        'AI',
        'React',
        'Typescript',
        'Next.js',
        'Playwright',
        'Tailwind',
        'Framer Motion',
        'NX',
        'Jest',
        'Localization',
      ],
    },
    {
      company: 'Halo Media LLC',
      website: 'https://halopowered.com/',
      role: 'Sr Software Engineer',
      timeline: 'Sep 2021 - Dec 2021',
      description: [
        '● Directed frontend strategy for a highly customizable platform.',
        '● Set up CI/CD pipelines across projects for consistent, automated releases.',
        '● Conducted React technical interviews and supported team hiring.',
        '● Built reusable internal library to standardize components and workflows.',
      ],
      skills: ['React', 'Typescript', 'Node.js', 'Leadership'],
    },
    {
      company: 'Raftr',
      website: 'https://www.raftr.com/',
      role: 'Sr Frontend Engineer & Web Lead',
      timeline: 'Apr 2020 - Jun 2021',
      description: [
        '● Led a 4-person team across 3 interconnected web projects.',
        '● Owned resolution of critical production issues and performance improvements.',
        '● Initiated CI/CD across all apps and introduced web standards (TypeScript, PR flows).',
        '● Built micro-frontend and shared library to improve modularity and reuse.',
        '● Led all Agile meetings (dailies, groomings, plannings, retrospective, demo).',
        '● Added CI/CD for all projects.',
        '● Improved web application performance (reducing TTFB, improving SSR, etc).',
        '● Pushed different web standards to be the default on the different web projects (Typescript, Pull Request, correct tracking of work, etc).',
      ],
      skills: ['React', 'Next.js', 'Typescript', 'Lerna', 'Leadership'],
    },
    {
      company: '24 Hour Fitness',
      website: 'https://www.24hourfitness.com/',
      role: 'Software Engineer',
      timeline: 'Oct 2019 - Apr 2020',
      description: [
        '● Designed and developed a new platform for purchasing Gym memberships, allowing users to add different ancillary products to complement the membership.',
        '● Increased the unit test coverage from 50% to 70%.',
        '● Pushed different Angular development patterns.',
        '● Added CI/CD for the project',
        '● Coordinated a three contractors team to match product owner expectations',
      ],
      skills: ['Angular', 'Typescript', 'Jest'],
    },
    {
      company: 'ThirdLove',
      website: 'https://www.thirdlove.com/',
      role: 'Full Stack Engineer',
      timeline: 'Jun 2019 - Sep 2019',
      description: [
        "● Re-designed and developed one the company's insignia app called FitFinder that run as micro frontend project connected to different BE micro services",
        '● Part of the team setting the bases for a shared components library to be used on all projects inside the company',
        '● Worked on different CI/CD Integrations',
        '● Created an application for easy deployments on AWS via cmd',
      ],
      skills: ['React', 'Node.js', 'Typescript', 'Jest'],
    },
    {
      company: 'McAfee',
      website: 'https://www.mcafee.com/',
      role: 'Software Development Engineer',
      timeline: 'Feb 2017 - May 2019',
      description: [
        '● Led 3 teams of 5-6 people each (shared leadership)',
        '● Designed and developed a common library to be used across different projects on the company (with projects on a "consumer/collaborator" basis and others on a "only consumer" basis)',
        '● Worked side-by-side with PO and UX to make features to reach excellence',
        '● Led features end-to-end (Architectural designs, DB communication, wireframes feedbacks, mocks feedbacks, and productive code deployment)',
        '● Designed and developed an integrated application that will run partially on Angular and partially on AngularJs (to support retro-compatibility)',
      ],
      skills: ['Angular', 'Typescript', 'Jest', 'Leadership'],
    },
  ],
}
