module.exports = {
  siteTitle: 'Nikhil Reddy',
  siteDescription:
    '',
  siteKeywords:
    'Nikhil Reddy, software developer, software engineer, content freelancer, NightKing , NightKing-CMS , web developer, react, jamshedpur, amrita',
  siteUrl: 'https://n1ghtk1ng.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Dasari Nikhil Reddy',
  location: 'Jamshedpur, India',
  email: 'dn.reddy@hotmail.com',
  github: 'https://github.com/n1ght-k1ng',
  twitterHandle: '@n1ght_k7ng',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/n1ght-k1ng',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dnikhil-reddy/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nick.hiill',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/n1ght_k7ng',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
