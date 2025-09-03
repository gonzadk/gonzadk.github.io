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
      'Sr Software Engineer | React, Typescript, NextJs, Node, Leadership | Frontend Specialist',
    description:
      "Remotely working from Argentina, I'm an enthusiast crafting pixel-perfect designs into interactive web experiences, prioritizing performance and simplicity.",
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
    'With over 11 years of experience in software engineering, I have a wealth of knowledge and expertise in developing and delivering high-performance, scalable, and secure applications. I am a Senior Software Engineer focused on Frontend side, with a deep understanding of modern technologies, architecture patterns, and software development methodologies.',
    'My experience has given me the ability to lead and mentor teams, work collaboratively with cross-functional teams, and deliver projects on time and on budget. I am always seeking new opportunities to learn, grow, and make a positive impact on the projects and teams I work with.',
    'My ultimate goal is to deliver innovative and user-friendly software solutions that exceed the expectations of my clients and stakeholders.',
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
      role: 'Sr Developer, Front End',
      timeline: 'Jan 2022 - Present',
      description: [
        '● Currently leading UI architecture and development for Agent Studio, a next-generation product projected to generate $35M+ in contracts upon release.',
        '● Led development and release of Medable Studio, enabling its successful launch and directly contributing to securing a $20.4M enterprise contract.',
        '● Built a robust E2E test suite, reducing our testing time from 1-2 weeks to 1-2 days, considering existing manual executions.',
        '● Directed frontend lifecycle: architecture, planning, implementation, and deployment.',
        '● Mentored engineers and enforced coding standards to ensure scalability and maintainability.',
        '● Optimized frontend performance and user experience for long-term reliability.',
      ],
      skills: [
        'Leadership',
        'React',
        'Typescript',
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
