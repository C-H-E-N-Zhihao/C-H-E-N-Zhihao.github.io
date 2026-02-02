// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-awards",
          title: "Awards",
          description: "Honors and achievements",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "news-started-exchange-semester-at-epfl-in-lausanne-switzerland",
          title: 'Started exchange semester at EPFL in Lausanne, Switzerland 🇨🇭',
          description: "",
          section: "News",},{id: "news-joined-biorob-lab-at-epfl-as-a-visiting-research-student-excited-to-work-on-context-aware-spatial-action-recognition-for-multi-robot-systems",
          title: 'Joined BioRob Lab at EPFL as a Visiting Research Student! 🎉 Excited to...',
          description: "",
          section: "News",},{id: "news-overall-finalist-at-lauzhack-2025-epfl-s-student-run-hackathon",
          title: '🏆 Overall Finalist at LauzHack 2025, EPFL’s student-run hackathon!',
          description: "",
          section: "News",},{id: "news-joined-iri-institut-de-robòtica-i-informàtica-industrial-as-an-undergraduate-researcher-working-on-future-action-prediction-in-video-models",
          title: 'Joined IRI (Institut de Robòtica i Informàtica Industrial) as an Undergraduate Researcher, working...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%69%68%61%6F.%63%68%65%6E@%65%73%74%75%64%69%61%6E%74%61%74.%75%70%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/C-H-E-N-Zhihao", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhihao-chen-584aa52b5", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
