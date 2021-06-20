export type TResume = {
  aboutMeDetails: AboutMeDetail[];
  aboutMeLinks: AboutMeDetail[];
};

type AboutMeDetail = {
  label?: string;
  href?: string;
  iconClass: string;
  iconColor?: string;
  iconName?: string;
  key: string;
};

export const RESUME: TResume = {
  aboutMeDetails: [
    {
      key: 'email',
      label: 'gonzaloterzano@gmail.com',
      iconClass: 'material-icons',
      iconName: 'email',
    },
    {
      key: 'github',
      label: 'gonzadk.github.com',
      iconClass: 'material-icons',
      iconName: 'language',
    },
    {
      key: 'skype',
      label: 'gonzaloterzano@hotmail.com',
      iconClass: 'fa fa-skype',
      iconName: '',
    },
    {
      key: 'phone',
      label: '+549 264 464 9709',
      iconClass: 'material-icons',
      iconName: 'phone',
    },
    {
      key: 'city',
      label: 'Córdoba, Argentina',
      iconClass: 'material-icons',
      iconName: 'place',
    },
  ],
  aboutMeLinks: [
    {
      key: 'facebook',
      href: 'https://www.facebook.com/Gonza.Terzano',
      iconColor: 'indigo',
      iconClass: 'fa-facebook',
    },
    {
      key: 'linkedIn',
      href: 'https://www.linkedin.com/in/gonzalo-terzano',
      iconColor: 'blue darken-3',
      iconClass: 'fa-linkedin',
    },
    {
      key: 'github',
      href: 'https://www.github.com/gonzadk',
      iconColor: 'blue darken-3',
      iconClass: 'fa-github',
    },
  ],
};
