import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  threejs,
  iti,
  bootstrap,
  angular,
  firebase,
  portfolioPage,
  cloudServices,
  HotelsReact,
  HotelsAngular,
  TodoList,
  prayerTimes,
  TravelApp,
  facebookIcon,
  twitterIcon,
  githubIcon,
  linkedinIcon,
  nextjs,
  firoz,
  rayagate,
  animeVault,
  library,
  whatsappIcon,
  telegramIcon,
  weatherApp,
  login,
  dashboard,
  appleClone,
  nodejs,
  redux,
  material,
  gsap,
  framer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];
const icons = [
  {
    title: "Facebook",
    icon: facebookIcon,
    link: 'https://web.facebook.com/mahmoud.alaa.123829',
  },
  {
    title: "Twitter",
    icon: twitterIcon,
    link: 'https://twitter.com/MahmoudAladdin9',
  },
  {
    title: "Linkedin",
    icon: linkedinIcon,
    link: 'https://www.linkedin.com/in/mahmoud-alaa-eldeen-14baa0245/',
  },
  {
    title: "Github",
    icon: githubIcon,
    link: 'https://github.com/Mahmoud6867',
  },
  {
    title: "Whatsapp",
    icon: whatsappIcon,
    link: 'https://Wa.me/201065106930',
  },
  {
    title: "Telegram",
    icon: telegramIcon,
    link: 'https://t.me/mahmoud6867',
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "Material UI",
    icon: material,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GSAP Animations",
    icon: gsap,
  },
  {
    name: "Framer Animations",
    icon: framer,
  },
];

const experiences = [
  {
    title: "Front-End & Cross Platform Web Designer & Developer",
    company_name: "Information Technology Institute",
    icon: iti,
    iconBg: "#383E56",
    date: "March 2023 - july 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End & Cross Platform Web Designer & Developer",
    company_name: "Rayagate",
    icon: rayagate,
    iconBg: "#383E56",
    date: "january 2024 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Web-based platform that allows users to see my skills, experience and projects",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioPage,
    source_code_link: "https://github.com/Mahmoud6867/Portfolio-page.git",
    website_link:
    "https://mahmoud-alaa-portfolio.netlify.app/",
  },
  {
    name: "Cloud Services",
    description:
      "Web-based platform that I made for learning and testing my tailwind and react skills",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cloudServices,
    source_code_link:
      "https://github.com/Mahmoud6867/React.js-project-using-tailwind",
    website_link:
      "https://template-for-a-cloud-service.netlify.app/",
  },
  {
    name: "Hotels.com mimic",
    description:
      "This is the graduation project from ITI of me and my colleagues where we made a replica of the website hotels.com using react.js and we also made it using firestore as our backend and made it with 2 languages arabic and english",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: HotelsReact,
    source_code_link:
      "https://github.com/Mahmoud6867/Graduation-Project-using-react.js.git",
      website_link:
      "https://mockup-site-for-hotels.netlify.app/",
  },
  {
    name: "Admin dashboard of the Hotels.com mimic",
    description:
      "This is the rest of my graduation project from ITI of me and my colleagues where we made an admin dashboard to control the website we made as admins using angular",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: HotelsAngular,
    source_code_link:
      "https://github.com/Mahmoud6867/Graduation-Project-using-angular.git",
      website_link:
      "https://angular-admin-dashboard.netlify.app/",
  },
  {
    name: "Prayers Time",
    description:
      "This is a site that tells the prayers times all over the Arab world",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: prayerTimes,
    source_code_link:
      "https://github.com/Mahmoud6867/prayersTimes",
      website_link:
      "https://prayers-time-in-the-arab-world.netlify.app/",
  },
  {
    name: "TODO List",
    description:
      "This is a simple todo list used to track your tasks",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: TodoList,
    source_code_link:
      "https://github.com/Mahmoud6867/ToDoList",
      website_link:
      "https://todolistbymahmoud.netlify.app/",
  },
  {
    name: "Travel App",
    description:
      "This is a responsive design which I used it to learn Next.ts and Tailwind",
    tags: [
      {
        name: "Next.ts",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: TravelApp,
    source_code_link:
      "https://github.com/Mahmoud6867/Travel-App",
      website_link:
      "https://travel-app-by-mahmoud.netlify.app/",
  },
  {
    name: "Firoz",
    description:
      "This is a responsive design which is a mockup of a website called firoz",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: firoz,
    source_code_link:
      "https://github.com/Mahmoud6867/firoz-mockup-project",
      website_link:
      "https://firoz-mockup.netlify.app/",
  },
  {
    name: "Anime Vault",
    description:
      "This is a project that I made to learn server side rendering the owner of this project is JSmastery youtube channel",
    tags: [
      {
        name: "Next.ts",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: animeVault,
    source_code_link:
      "https://github.com/Mahmoud6867/Anime-Vault",
      website_link:
      "https://main--anime-vault-mahmoud.netlify.app/",
  },
  {
    name: "Library",
    description:
      "This is a project that I made with next.js using server side rendering the code and designs are all mine",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: library,
    source_code_link:
      "https://github.com/Mahmoud6867/Xapprika-task",
      website_link:
      "https://mahmoud-library.netlify.app/",
  },
  {
    name: "Weather App",
    description:
      "This is an app I made using next.js to display weather from open weather api",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weatherApp,
    source_code_link:
      "https://github.com/Mahmoud6867/Weather-app",
      website_link:
      "https://mahmoud-weather-app.netlify.app/",
  },
  {
    name: "Login Page",
    description:
      "This is a static page that I made to demonstrate part of my css skills",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: login,
    source_code_link:
      "https://github.com/Mahmoud6867/simple-login-page",
      website_link:
      "https://login-page-sample-mahmoud.netlify.app/",
  },
  {
    name: "Dashboard",
    description:
      "This is a static page that I made to demonstrate part of my css skills",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link:
      "https://github.com/Mahmoud6867/Dashboard-dummy",
      website_link:
      "https://mahmoud-dashboard-test.netlify.app/",
  },
  {
    name: "Apple Website",
    description:
      "This is a clone for the apple website that uses 3D animations to display the iPhones",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP Animation",
        color: "green-text-gradient",
      },
    ],
    image: appleClone,
    source_code_link:
      "https://github.com/Mahmoud6867/Apple-clone-page",
      website_link:
      "https://apple-clone-page.netlify.app/",
  },

];



export { services, technologies, experiences, testimonials, projects, icons };
