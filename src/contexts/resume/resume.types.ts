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
    position: 'Sr Fullstack Developer (Frontend Focus)',
    details: [
      {
        label: 'gonzaloterzano@gmail.com',
        iconClass: 'material-icons',
        iconName: 'email',
      },
      {
        label: 'gonzadk.github.io',
        iconClass: 'material-icons',
        iconName: 'language',
      },
      {
        label: 'gonzaloterzano@hotmail.com',
        iconClass: 'fa fa-skype',
        iconName: '',
      },
      {
        label: '+549 264 464 9709',
        iconClass: 'material-icons',
        iconName: 'phone',
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
      description: `Thesis still pending. Current GPA: 8.6 of 10`,
    },
    {
      mainLetter: 'H',
      title: 'High School - Electronics Technician',
      subtitle: 'National University of San Juan - EIDFS - ARG',
      subtitleSmall: true,
      timeline: 'Mar 2005 - Dic 2008',
      description: 'GPA: 8.57 of 10',
    },
  ],
  experience: [
    {
      mainLetter: 'R',
      title: 'Raftr',
      titleSmall: true,
      subtitle: 'Sr Frontend Engineer & Web Lead',
      timeline: 'Apr 2020 - Jun 2021',
      description:
        'Improved web application performance (reducing TTFB, improving SSR, etc). ' +
        'Created a new isolated project working as a micro-frontend and a common library to share among those projects (and future ones). ' +
        'Pushed different web standards to be the default on the different web projects (Typescript, Pull Request, correct tracking of work, etc). ' +
        'Tech stack: React and NextJs',
    },
    {
      mainLetter: '24',
      title: '24 Hour Fitness',
      titleSmall: true,
      subtitle: 'Software Engineer',
      timeline: 'Oct 2019 - Apr 2020',
      description:
        'In charge of designing and developing a new platform for purchasing Gym memberships, allowing users to add different ancillary products to complement the membership. ' +
        'Tech stack: Angular 9 and NGXS',
    },
    {
      mainLetter: 'T',
      title: 'Thirdlove',
      titleSmall: true,
      subtitle: 'Full Stack Engineer',
      timeline: 'Jun 2019 - Sep 2019',
      description:
        "Re-designed and developed one the company's insignia app called FitFinder that run as micro frontend project connected to different BE micro services\n" +
        'Part of the team setting the bases for a shared components library to be used on all projects inside the company. ' +
        'Tech stack: ReactJs, NodeJs, and GraphQL',
    },
    {
      mainLetter: 'M',
      title: 'McAfee',
      titleSmall: true,
      subtitle: 'Software Development Engineer',
      timeline: 'Feb 2017 - May 2019',
      description:
        'Leading 3 teams of 5-6 people each (shared leadership). ' +
        'Designed and developed a common library to be used across different projects on the company (with projects on a "consumer/collaborator" basis and others on a "only consumer" basis). ' +
        'Designed and developed an integrated application that will run partially on Angular and partially on AngularJs (to support retro-compatibility). ' +
        'Tech stack: Angular, AngularJs, Java, Karma/Jasmine for testing, among others',
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
    description:
      'I enjoy watching sports and I love play basketball. Also, I love watching' +
      'series and movies, or playing video games. I spend my free time traveling and visiting different places,' +
      'this helps me to keep my mind fresh.',
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
