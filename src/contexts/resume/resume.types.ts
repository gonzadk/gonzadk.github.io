import { TimelineItem } from 'components/timeline-list/timeline-list.component.types';

export type TResume = {
  aboutMe: {
    name: string;
    position: string;
    details: AboutMeDetail[];
    links: AboutMeLink[];
  };
  education: TimelineItem[];
  experience: TimelineItem[];
  interest: {
    description: string;
    icons: InterestIcon[];
  };
  skills: SkillColumn[];
};

export type AboutMeLink = {
  href: string;
  iconClass: string;
  iconColor: string;
};

export type AboutMeDetail = {
  label: string;
  iconClass: string;
  iconName: string;
};

export type InterestIcon = {
  icon: string;
  label: string;
};

export type Skill = {
  name: string;
  percent: string;
};

export type SkillColumn = {
  titleInSmall?: string;
  skills: Skill[];
};

export const RESUME: TResume = {
  aboutMe: {
    name: 'Gonzalo Terzano',
    position:
      'Sr Software Engineer | React, Typescript, NextJs, Node, Leadership | Frontend Specialist',
    details: [
      {
        label: 'gonzaloterzano@gmail.com',
        iconClass: 'material-icons',
        iconName: 'email',
      },
      {
        label: 'resume.gonzadk.com.ar',
        iconClass: 'material-icons',
        iconName: 'language',
      },
      {
        label: 'Córdoba, Argentina',
        iconClass: 'material-icons',
        iconName: 'place',
      },
    ],
    links: [
      {
        href: 'https://www.linkedin.com/in/gonzalo-terzano',
        iconColor: 'blue darken-3',
        iconClass: 'fa-linkedin',
      },
      {
        href: 'https://www.github.com/gonzadk',
        iconColor: 'grey darken-3',
        iconClass: 'fa-github',
      },
    ],
  },
  education: [
    {
      mainLetter: 'D',
      title: 'Degree in Computer Science',
      subtitle: 'National University of San Juan - FCEFyN',
      subtitleSmall: true,
      timeline: 'Mar 2009 - Dic 2014',
    },
    {
      mainLetter: 'H',
      title: 'High School - Electronics Technician',
      subtitle: 'National University of San Juan - EIDFS - ARG',
      subtitleSmall: true,
      timeline: 'Mar 2005 - Dic 2008',
    },
  ],
  experience: [
    {
      mainLetter: 'M',
      title: 'Medable',
      titleSmall: true,
      subtitle: 'Sr Developer, Front End',
      timeline: 'Jan 2022 - Present',
      description: [
        '● Led the development of a new internationalization solution that supports over 120 locales, demonstrating ownership and initiative.',
        '● Actively participated in cross-functional discussions and provided expert input to ensure the i18n solution can scale efficiently.',
        '● Implemented a streamlined translation process, including tools for detecting missing translations and importing new ones, improving the efficiency and accuracy of the localization effort.',
        "● Introduced best practices across multiple repositories to enhance the internationalization of the company's products and services, demonstrating a commitment to continuous improvement.",
        '● Defining and enforcing coding standards, best practices, and performance optimization techniques to ensure the maintainability and scalability of the codebase.',
        '● Managing the frontend development process, including prioritizing and tracking project tasks, reviewing code, and ensuring timely delivery.',
      ],
    },
    {
      mainLetter: 'H',
      title: 'Halo Media LLC',
      titleSmall: true,
      subtitle: 'Sr Software Engineer',
      timeline: 'Sep 2021 - Dec 2021',
      description: [
        '● Provided visionary leadership for a highly customizable and generic project, elevating it to new heights through strategic planning and execution.',
        '● Established a CI/CD pipeline for multiple projects, standardizing the process and ensuring consistent, high-quality releases.',
        '● Conducted technical evaluations for React positions, leveraging expertise to identify top talent and build a high-performing frontend team.',
        '● Spearheaded the creation of an internal, reusable library, establishing best practices and streamlining processes to increase efficiency and productivity.',
      ],
    },
    {
      mainLetter: 'R',
      title: 'Raftr',
      titleSmall: true,
      subtitle: 'Sr Frontend Engineer & Web Lead',
      timeline: 'Apr 2020 - Jun 2021',
      description: [
        '● Led a 4 people team working on a three-projects solution.',
        '● Participated in different product definition reviews in order to polish out possible troubles ahead of time.',
        '● Took ownership on solving urgent production issues.',
        '● Led all Agile meetings (dailies, groomings, plannings, retrospective, demo).',
        '● Added CI/CD for all projects.',
        '● Improved web application performance (reducing TTFB, improving SSR, etc).',
        '● Created a new isolated project working as a micro-frontend and a common library to share among those projects (and future ones).',
        '● Pushed different web standards to be the default on the different web projects (Typescript, Pull Request, correct tracking of work, etc).',
      ],
    },
    {
      mainLetter: '24',
      title: '24 Hour Fitness',
      titleSmall: true,
      subtitle: 'Software Engineer',
      timeline: 'Oct 2019 - Apr 2020',
      description: [
        '● Designed and developed a new platform for purchasing Gym memberships, allowing users to add different ancillary products to complement the membership.',
        '● Increased the unit test coverage from 50% to 70%.',
        '● Pushed different Angular development patterns.',
        '● Added CI/CD for the project',
        '● Coordinated a three contractors team to match product owner expectations',
      ],
    },
    {
      mainLetter: 'T',
      title: 'ThirdLove',
      titleSmall: true,
      subtitle: 'Full Stack Engineer',
      timeline: 'Jun 2019 - Sep 2019',
      description: [
        "● Re-designed and developed one the company's insignia app called FitFinder that run as micro frontend project connected to different BE micro services",
        '● Part of the team setting the bases for a shared components library to be used on all projects inside the company',
        '● Worked on different CI/CD Integrations',
        '● Created an application for easy deployments on AWS via cmd',
      ],
    },
    {
      mainLetter: 'M',
      title: 'McAfee',
      titleSmall: true,
      subtitle: 'Software Development Engineer',
      timeline: 'Feb 2017 - May 2019',
      description: [
        '● Led 3 teams of 5-6 people each (shared leadership)',
        '● Designed and developed a common library to be used across different projects on the company (with projects on a "consumer/collaborator" basis and others on a "only consumer" basis)',
        '● Worked side-by-side with PO and UX to make features to reach excellence',
        '● Led features end-to-end (Architectural designs, DB communication, wireframes feedbacks, mocks feedbacks, and productive code deployment)',
        '● Designed and developed an integrated application that will run partially on Angular and partially on AngularJs (to support retro-compatibility)',
      ],
    },
    {
      mainLetter: 'G',
      title: 'Globant',
      titleSmall: true,
      subtitle: 'Web UI Developer',
      timeline: 'Feb 2016 - Jan 2017',
      description:
        'I worked on a busy team, sometimes under pressure, making friendly & interactive projects of eLearning on short periods of time.',
    },
    {
      mainLetter: 'T',
      title: 'TravelPAQ',
      titleSmall: true,
      subtitle: 'Fullstack Web Developer',
      timeline: 'Aug 2015 - Jan 2016',
      description:
        'Great startup Company in which I worked on backend and frontend ' +
        'technologies but where I also had to perform deployments and configuration tasks on the servers.',
    },
    {
      mainLetter: 'A',
      title: 'National University of San Juan, FCEFyN',
      titleSmall: true,
      subtitle: 'Teaching Assistant Professor',
      timeline: 'Apr 2010 - Jan 2016',
      description:
        'Helped on practical classes and gave classes in some cases. ' +
        'It was the place where I discovered that I like teaching and helping people.',
    },
  ],
  interest: {
    description: `I enjoy watching sports and I love play basketball. Also, I love watching series and movies,
      or playing video games. I spend my free time traveling and visiting different places this helps me to keep my mind fresh.`,
    icons: [
      { icon: 'fa-film', label: 'Series & Movies' },
      { icon: 'fa-futbol-o', label: 'Sports' },
      { icon: 'fa-gamepad', label: 'Gaming' },
      { icon: 'fa-plane', label: 'Traveling' },
      { icon: 'fa-music', label: 'Music' },
      { icon: 'fa-car', label: 'Cars' },
    ],
  },
  skills: [
    {
      titleInSmall: 'Professional',
      skills: [
        { name: 'React', percent: '90%' },
        { name: 'TypeScript', percent: '90%' },
        { name: 'Angular', percent: '90%' },
        { name: 'AngularJs', percent: '90%' },
      ],
    },
    {
      skills: [
        { name: 'HTML5/CSS3', percent: '90%' },
        { name: 'CD/CI', percent: '70%' },
        { name: 'Java', percent: '35%' },
        { name: 'NodeJS', percent: '35%' },
      ],
    },
    {
      titleInSmall: 'Personal',
      skills: [
        { name: 'Communication', percent: '75%' },
        { name: 'Teamwork', percent: '90%' },
        { name: 'Creativity', percent: '70%' },
        { name: 'Dedication', percent: '80%' },
      ],
    },
  ],
};
