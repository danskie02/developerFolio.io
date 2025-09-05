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
  username: "Danskie",
  title: "Hi all, I'm Mark Daniel Ponce",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Dart / Reactjs / Nodejs / React Native / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/102R7PZh4jvmPB_oYOT4DZI4bfXuwr1Lo/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/danskie02",
  linkedin: "https://www.linkedin.com/in/ponce-mark-daniel-o-7978302a2",
  gmail: "markdanielponce035@gmail.com",
  gitlab: "https://gitlab.com/markdanielponce035",
  facebook: "https://www.facebook.com/markdaniel.ponce.14",
  medium: "https://medium.com/@markdanielponce035",
  stackoverflow: "https://stackoverflow.com/users/31417182/ponce-mark-daniel-o",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) integrated with remote or local database"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Marinduque Sate University (MarSU)",
      logo: require("./assets/images/marsu_logo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: " September 2022 - Present",
      desc: "Consistent Dean's Lister of the program. Took courses about:",
      descBullets: ["Software Design", "Software Engineering", "Web Security", "Operating Systems", "Networking", "Digital Signal Processing", "Computer Architecture"],
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SPES Intern",
      company: "Boac LGU",
      companylogo: require("./assets/images/boac_lgu.jfif"),
      date: "Batch 2019 & Batch 2023",
      desc: "Worked under Brgy. Amoingon's LGU as an assistant of the Secretary, familiarizing oneself with document and certification processes and issuance. This experience fueled my desire to work on personal project such as:",
      descBullets: [
        "LGU Digital Document & Certification Request System",
        "Local Promotional Website for Local Businesses"
      ]
    },
    {
      role: "DOST-JLSS Intern",
      company: "PSTO-Marinduque",
      companylogo: require("./assets/images/dost_mimaropa.png"),
      date: "July 2025 - August 2025",
      desc: "Worked under the supervision of the PSTO-Marinduqe Director and developed an integrated system with mobile application for modern butterfly farming as a solution to the challenges faced by local butterfly farmers."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME SOFTWARE PROJECTS THAT I'VE WORKED ON AND BEEN INVOLVED IN",
  projects: [
    {
      image: require("./assets/images/boac_lgu.jfif"),
      projectName: "Brgy. Amoingon's Local Portal",
      projectDesc: "A digitalized approach of requesting barangay documents and certifications such as 1) Brgy. Clearance 2) Brgy. Business Clearance 3) brgy. Conformance making the process easier, more flexible, and transparent",
      footerLink: [
        {
          name: "Examine Website",
          url: "https://drive.google.com/file/d/16I4M8AppU3z8HujA9odt_GodmX8g9fcO/view?usp=drive_link"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/boac_lgu.jfif"),
      projectName: "Brgy. Amoingon's Local Businesses Promotional Website",
      projectDesc: "A repository of local businesses within the area with description, contact details, and location tracking supported by Google Maps",
      footerLink: [
        {
          name: "Examine Website",
          url: "https://drive.google.com/file/d/1DEdtktH3lhZJ4A7invaoLcyL_7iCb1tp/view?usp=drive_link"
        }
      ]
    },
    {
      image: require("./assets/images/bfly_logo.png"),
      projectName: "Better-Fly's Integrated Mobile App",
      projectDesc: "This is a work in progress, an integrated mobile app that monitors and controls the environment within a prorotype enclosure, it also examines the food level percentage of the butterfly larvae inside and alert the farmers if the food run out or the system encounter some problems",
      footerLink: [
        {
          name: "Examine Website",
          url: "https://drive.google.com/file/d/1XiS8EK8xFe3FmZ_JpkXluH8G3NOKDGGW/view?usp=drive_link"
        }
      ]
    },
    {
      image: require("./assets/images/rf_logo.png"),
      projectName: "Rezidencia Faeldo's Food Ordering System",
      projectDesc: "This is a work in progress, a food ordering system for a restaurant within the province which aims to increase their quality of service, flexibility, and increase the reach of their target customers.",
      footerLink: [
        {
          name: "Examine Website",
          url: "https://drive.google.com/file/d/1KQKxS1SvHJwqCuL-fTo6HjA2VKQNtwZt/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true// Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Completed Fundamentals of Technical Support Course",
      subtitle:
        "A course offered by Coursera that teaches the basics of technical support, troubleshooting, and customer service.",
      image: require("./assets/images/cour_logo.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/f5186f1519bdf17776545609852184fd"
        }
      ]
    },
    
    {
      title: "Completed Fundamentals of Computer Networking Course",
      subtitle:
        "A course offered by Coursera that teaches the basics of computer networking and its protocols.",
      image: require("./assets/images/cour_logo.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/6b233a930ff511bcfb315b542470a388"
        }
      ]
    },

    {
      title: "Completed Advanced Operating Systems Course",
      subtitle:
        "A course offered by Coursera that teaches in-depth understanding and knowledge about operating systems.",
      image: require("./assets/images/cour_logo.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/f89545a1725aafa04014978a492c319f"
        }
      ]
    },

    {
      title: "Completed System Administration and IT Infrastructure Services Course",
      subtitle:
        "A course offered by Coursera that delves in the roles and skills required for a system admin and IT infrastructure services.",
      image: require("./assets/images/cour_logo.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/3f68d3a92acd9d7d8d4fc03dc4db3c96"
        }
      ]
    },

    {
      title: "Completed Introduction to Cybersecurity Foundation Course",
      subtitle:
        "A course offered by Coursera that delves in the foundation and basics of cybersecurity.",
      image: require("./assets/images/cour_logo.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/b18a8e612a7db5617fc67a92cca34926"
        }
      ]
    },

    {
      title: "Completed Introduction to Cybersecurity Foundation Course",
      subtitle:
        "A course offered by CISCO Networking Academy that delves depper in the foundation and basics of cybersecurity.",
      image: require("./assets/images/c_logo.jfif"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/11Y27KvxlaGjI_96yBfv58IIH5vxiFlul/view?usp=drive_link"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+910-353-8912",
  email_address: "markdanielponce035@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
