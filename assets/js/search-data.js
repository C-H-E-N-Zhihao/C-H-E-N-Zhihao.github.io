// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-an-exchange-semester-in-computer-science-at-epfl-and-joined-biorob-prof-auke-jan-ijspeert-to-work-on-context-aware-spatial-action-recognition",
          title: 'Started an exchange semester in Computer Science at EPFL and joined BioRob (Prof....',
          description: "",
          section: "News",},{id: "news-overall-finalist-at-lauzhack-2025-with-mxegg-an-llm-driven-multi-agent-simulation",
          title: 'Overall Finalist at LauzHack 2025 with MXEgg, an LLM-driven multi-agent simulation.',
          description: "",
          section: "News",},{id: "news-joined-lamp-cvc-uab-dr-joost-van-de-weijer-to-work-on-unified-multimodal-continual-learning-and-iri-upc-dr-mariella-dimiccoli-to-work-on-flow-matching-for-action-segmentation-and-anticipation",
          title: 'Joined LAMP, CVC-UAB (Dr. Joost van de Weijer) to work on unified multimodal...',
          description: "",
          section: "News",},{id: "news-received-the-elena-maseras-research-fellowship-at-lamp-cvc-uab",
          title: 'Received the Elena Maseras Research Fellowship at LAMP, CVC-UAB.',
          description: "",
          section: "News",},{id: "news-2nd-prize-in-the-skyscanner-challenge-and-best-use-of-elevenlabs-at-hackupc-2026-with-b2travel",
          title: '2nd Prize in the Skyscanner Challenge and Best Use of ElevenLabs at HackUPC...',
          description: "",
          section: "News",},{id: "news-received-the-santander-360º-excellence-scholarship",
          title: 'Received the Santander 360º Excellence Scholarship.',
          description: "",
          section: "News",},{id: "news-graduated-with-a-bsc-in-artificial-intelligence-from-upc-gpa-9-00-10-top-10",
          title: 'Graduated with a BSc in Artificial Intelligence from UPC (GPA 9.00/10, top 10%)....',
          description: "",
          section: "News",},{id: "news-started-the-msc-in-data-science-at-epfl-and-joined-vilab-prof-amir-zamir-as-a-graduate-student-researcher-working-on-disentangled-multimodal-representation-learning",
          title: 'Started the MSc in Data Science at EPFL and joined VILAB (Prof. Amir...',
          description: "",
          section: "News",},{id: "news-started-as-a-student-teaching-assistant-for-ee-556-mathematics-of-data-from-theory-to-computation-prof-volkan-cevher-at-epfl",
          title: 'Started as a Student Teaching Assistant for EE-556 Mathematics of Data: From Theory...',
          description: "",
          section: "News",},{id: "news-our-paper-continual-adaptation-across-modalities-learning-and-forgetting-in-unified-multimodal-models-was-accepted-to-the-neurips-2026-workshop-on-cl4fmagents",
          title: 'Our paper Continual Adaptation Across Modalities: Learning and Forgetting in Unified Multimodal Models...',
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
