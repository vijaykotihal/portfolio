/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vijay Kotihal",
  title: "Hi all, I'm Vijay",
  subTitle: emoji(
    // "Results-driven Software Engineer with 7 months of hands-on experience in full-stack development and backend engineering.Proven expertise in building scalable financial trading platforms using Python, FastAPI, Kafka, Redis, and TimescaleDB.Skilled in real - time data processing, RESTful API development, and system design.Demonstrated ability to deliver high - performance solutions in fast - paced startup environments"
    "Results-driven Software Engineer with 7 months of hands-on experience in full-stack and backend development. Built scalable financial trading systems using Python, FastAPI, Kafka, Redis, and TimescaleDB. Passionate about real-time data processing and system design in fast-paced environments."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vijaykotihal",
  linkedin: "https://www.linkedin.com/in/vijay-kotihal-94501331b/",
  gmail: "vijayskotihal@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "FULL STACK DEVELOPER EXPERIENCED IN MERN, JAVA SPRING BOOT, AND PYTHON BACKEND — BUILDING SCALABLE, DATA-DRIVEN, AND CLOUD-READY SYSTEMS",
  skills: [
    emoji("⚡ Develop responsive front-end interfaces using React.js, JavaScript, HTML5, and CSS3."),
    emoji("⚡ Build robust backend systems with Java (Spring Boot), Node.js (Express.js), and Python (FastAPI)."),
    emoji("⚡ Design and integrate RESTful APIs with Swagger/OpenAPI documentation."),
    emoji("⚡ Work with databases and real-time systems using MongoDB, PostgreSQL, TimescaleDB, Redis, and Kafka."),
    emoji("⚡ Implement cloud and storage solutions using AWS S3, MinIO, and Docker for scalable deployments."),
    emoji("⚡ Manage CI/CD pipelines and collaboration with Git, Bitbucket, Jenkins, and Jira."),
    emoji("⚡ Passionate about creating high-performance, secure, and fault-tolerant systems."),
  ],

  softwareSkills: [
    // Languages
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "C", fontAwesomeClassname: "fas fa-code" },

    // Frontend
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },

    // Backend Frameworks
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js" },
    { skillName: "Express.js", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },

    // APIs & Integration
    { skillName: "RESTful APIs", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "OpenAPI", fontAwesomeClassname: "fas fa-book" },

    // Databases & Data Systems
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "TimescaleDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Kafka", fontAwesomeClassname: "fas fa-stream" },

    // Storage & Cloud Infrastructure
    { skillName: "MinIO", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "AWS S3", fontAwesomeClassname: "fab fa-aws" },
    // { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },

    // DevOps & Collaboration
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Bitbucket", fontAwesomeClassname: "fab fa-bitbucket" },
    // { skillName: "Jenkins", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Jira", fontAwesomeClassname: "fas fa-tasks" },

    // Tools & IDEs
    { skillName: "Postman", fontAwesomeClassname: "fas fa-paper-plane" },
    { skillName: "VS Code", fontAwesomeClassname: "fas fa-code" },
    { skillName: "IntelliJ IDEA", fontAwesomeClassname: "fas fa-laptop-code" },
  ],
  display: true,
};





// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "G M Institute of Technology, Davangere",
      logo: require("./assets/images/gmit.png"),
      subHeader: "Bachelor of Engineering in Information Science and Engineering",
      duration: "2021 – 2025",
      desc: "CGPA: 8.1",
      descBullets: [
        "Completed core courses in Data Structures, Algorithms, Operating Systems, and Database Management Systems.",
        "Developed multiple projects in full-stack web development and backend engineering."
      ]
    },
    {
      schoolName: "Rural Polytechnic, Haunsbhavi",
      logo: require("./assets/images/rural_polyt.avif"),
      subHeader: "Diploma in Electrical and Electronics Engineering",
      duration: "2019 – 2021",
      desc: "Percentage: 85%",
      descBullets: [
        "Studied electrical systems and circuit design fundamentals.",
        "Awarded for strong academic performance and project excellence."
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (React.js / MERN UI)",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend (Spring Boot / FastAPI / Node.js)",
      progressPercentage: "80%"
    },
    {
      Stack: "Database & Real-Time Systems (PostgreSQL / MongoDB / Kafka / Redis)",
      progressPercentage: "75%"
    },
    {
      Stack: "Cloud & DevOps (AWS / Docker / MinIO / CI-CD)",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming Fundamentals (Data Structures, OOP, DSA)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true, // Set to true to show Work Experience section
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Byterains Technologies Pvt Ltd",
      companylogo: require("./assets/images/byterains.png"), // add company logo in assets/images/
      date: "April 2025 – October 2025",
      desc: "Worked as a backend and full-stack developer intern, focusing on building high-performance trading systems and data pipelines.",
      descBullets: [
        "Developed and maintained a real-time Forex trading platform with sub-100ms latency using FastAPI, Kafka, Redis, and TimescaleDB.",
        "Integrated Saxo Bank REST APIs for live FX data streaming and asynchronous order placement.",
        "Built scalable data pipelines for streaming, caching, and storing financial tick data with performance monitoring.",
        "Collaborated with the engineering team using Git, Bitbucket, and Docker to deploy backend services efficiently."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "KEY PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/carpooling.png"),
      projectName: "Decentralized Carpooling Platform",
      projectDesc:
        "Designed a blockchain-based ride-sharing platform using Ethereum, React.js, and Web3.js. Implemented smart contracts, MetaMask integration, and secure P2P payment validation using Solidity."
    },
    {
      image: require("./assets/images/forex.jpg"),
      projectName: "End-to-End Forex Trading Platform",
      projectDesc:
        "Developed a full-scale trading system in Java with integrated REST APIs for order placement, account tracking, and position management. Utilized Kafka, Redis, and PostgreSQL for live data streaming and transaction logging."
    },
    {
      image: require("./assets/images/real_time.png"),
      projectName: "Real-Time Forex Trading System",
      projectDesc:
        "Built an asynchronous trading platform using FastAPI, Kafka, Redis, and TimescaleDB. Implemented live FX tick streaming, multi-order placement, and latency monitoring for sub-100ms execution."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         { name: "Certification", url: "" },
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Blogs Section
const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle:
    "Certifications and accomplishments reflecting my hands-on experience and technical expertise.",

  achievementsCards: [
    {
      title: "Full Stack Developer Internship",
      subtitle:
        "Successfully completed a 7-month internship at Byterains Technologies Pvt Ltd, contributing to real-time Forex trading platforms using FastAPI, Kafka, and TimescaleDB.",
      image: require("./assets/images/byterains.png"),
      imageAlt: "Byterains Logo",
      footerLink: [] // ✅ Added empty array to prevent map() error
    },
    {
      title: "NPTEL Certified: Programming in Java (Elite)",
      subtitle:
        "Achieved an Elite certification from NPTEL for completing the Programming in Java course.",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [] // ✅ Added empty array
    },
    {
      title: "MERN Stack Development Internship",
      subtitle:
        "Completed MERN Stack Development Internship at Aurelia Technologies, gaining full-stack experience with React.js and Node.js.",
      image: require("./assets/images/aurelia.png"),
      imageAlt: "Aurelia Technologies Logo",
      footerLink: [] // ✅ Added empty array
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const blogSection = {
  display: false
};

const talkSection = {
  display: false
};

const podcastSection = {
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to Me ☎️"),
  subtitle:
    "My inbox is always open.",
  number: "+91-9036999314",
  email_address: "vijayskotihal@gmail.com",
  location: "Bangalore, India", // ✅ Add comma here
  display: true // optional flag, but syntactically valid
};





// Twitter Section (optional)
const twitterDetails = {
  userName: "twitter", // Replace with your username if you use Twitter
  display: false // Hide this section since it's not in use
};

// Job Availability
const isHireable = true; // ✅ Shows "Open for opportunities: Yes"

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
