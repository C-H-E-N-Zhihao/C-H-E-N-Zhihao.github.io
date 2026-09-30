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
        },{id: "nav-publications",
          title: "Publications",
          description: "Research publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-awards",
          title: "Awards",
          description: "Honors and achievements",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "news-joined-biorob-lab-at-epfl-as-a-visiting-research-student-working-on-context-aware-spatial-action-recognition-for-multi-robot-systems",
          title: 'Joined BioRob Lab at EPFL as a Visiting Research Student, working on context-aware...',
          description: "",
          section: "News",},{id: "news-started-an-exchange-semester-in-computer-science-at-epfl-in-lausanne-switzerland",
          title: 'Started an exchange semester in Computer Science at EPFL in Lausanne, Switzerland.',
          description: "",
          section: "News",},{id: "news-overall-finalist-at-lauzhack-2025-epfl-s-student-run-hackathon",
          title: '🏆 Overall Finalist at LauzHack 2025, EPFL’s student-run hackathon!',
          description: "",
          section: "News",},{id: "news-joined-iri-institut-de-robòtica-i-informàtica-industrial-as-an-undergraduate-researcher-working-on-future-action-prediction-in-video-models",
          title: 'Joined IRI (Institut de Robòtica i Informàtica Industrial) as an Undergraduate Researcher, working...',
          description: "",
          section: "News",},{id: "news-joined-lamp-at-cvc-uab-for-my-bachelor-thesis-under-the-supervision-of-joost-van-de-weijer-on-continual-learning-in-unified-multimodal-models",
          title: 'Joined LAMP at CVC-UAB for my bachelor thesis, under the supervision of Joost...',
          description: "",
          section: "News",},{id: "news-received-the-elena-maseras-research-scholarship-2026-for-academic-excellence-at-lamp-cvc-uab-the-scholarship-has-a-13-acceptance-rate",
          title: 'Received the Elena Maseras Research Scholarship 2026 for academic excellence at LAMP, CVC-UAB....',
          description: "",
          section: "News",},{id: "news-won-second-prize-in-the-skyscanner-challenge-and-the-best-use-award-of-elevenlabs-at-hackupc-2026",
          title: 'Won Second Prize in the Skyscanner Challenge and the Best Use Award of...',
          description: "",
          section: "News",},{id: "news-received-the-santander-excellence-scholarship-an-award-recognizing-top-academic-performance-as-well-as-participation-in-cultural-social-and-professional-development-activities-only-77-recipients-selected-nationwide-across-all-fields",
          title: 'Received the Santander Excellence Scholarship, an award recognizing top academic performance as well...',
          description: "",
          section: "News",},{id: "news-defended-my-bachelor-thesis-and-graduated-with-a-bsc-in-artificial-intelligence-from-upc",
          title: 'Defended my bachelor thesis and graduated with a BSc in Artificial Intelligence from...',
          description: "",
          section: "News",},{id: "news-started-the-msc-in-data-science-at-epfl",
          title: 'Started the MSc in Data Science at EPFL.',
          description: "",
          section: "News",},{id: "news-joined-vilab-as-a-graduate-student-researcher-working-on-unified-multimodal-modelling",
          title: 'Joined VILAB as a Graduate Student Researcher, working on unified multimodal modelling.',
          description: "",
          section: "News",},{id: "news-our-paper-continual-adaptation-across-modalities-learning-and-forgetting-in-unified-multimodal-models-was-accepted-to-the-neurips-2026-workshop-on-cl4fmagents-the-work-studies-how-unified-multimodal-models-retain-and-forget-capabilities-across-visual-reasoning-and-image-synthesis",
          title: 'Our paper, “Continual Adaptation Across Modalities: Learning and Forgetting in Unified Multimodal Models”,...',
          description: "",
          section: "News",},{
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
