/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Budi Setiawan",
  title: "Hello Everyone, I'm Budi",
  subTitle: emoji(
    "I am an undergraduate student in Informatics Engineering who is currently participating in the Bangkit 2022 - Android Developer program at Bangkit Academy. A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with PHP / Javascript / Kotlin and some other cool libraries and frameworks."
  ),
  resumeLink:
    "#", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/budistwn15",
  linkedin: "https://www.linkedin.com/in/budi-setiawan15/",
  gmail: "budi.setiawan112001@gmail.com",
  medium: "	https://medium.com/@budi.setiawan112001",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOME OF THE SKILLS THAT I MASTER",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // )
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universitas Singaperbangsa Karawang",
      logo: require("./assets/images/UNSIKA.png"),
      subHeader: "Bachelor's Degree in Informatics Engineering",
      duration: "Agustus 2019 - Mei 2023",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "SMKN 1 Karawang",
      logo: require("./assets/images/neskar.png"),
      subHeader: "Software Engineering",
      duration: "Agustus 2016 - Mei 2019",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Development",
      company: "Bangkit",
      companylogo: require("./assets/images/bangkit.png"),
      date: "February 2022 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },{
      role: "Web Developer",
      company: "Progate",
      companylogo: require("./assets/images/progate.png"),
      date: "September 2021 – January 2022"
    },{
      role: "Laboratory Assistant",
      company: "Computer Laboratory",
      companylogo: require("./assets/images/labkomp.jpg"),
      date: "January 2021 – Present"
    },
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/bangkit.png"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Memulai Pemrograman Dengan Kotlin",
      image: require("./assets/images/dicoding.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dicoding.com/certificates/NVP71D6RGPR0"
        }
      ]
    },
    {
      title: "Belajar Dasar Git dengan Github",
      image: require("./assets/images/dicoding.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dicoding.com/certificates/ERZR48D2OZYV"
        }
      ]
    },
    {
      title: "Memulai Dasar Pemrograman Untuk Menjadi Pengembang Software",
      image: require("./assets/images/dicoding.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dicoding.com/certificates/NVP71L42OPR0"
        }
      ]
    },
    {
      title: "Memulai Pemrograman Dengan Java",
      image: require("./assets/images/dicoding.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dicoding.com/certificates/JMZV2W0JJZN9"
        }
      ]
    },
    {
      title: "Programming Logic 101",
      image: require("./assets/images/dicoding.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dicoding.com/certificates/53XEW7O7RXRN"
        }
      ]
    },
    {
      title: "Architecting on AWS",
      image: require("./assets/images/dicoding.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dicoding.com/certificates/72ZDE5NNLPYW"
        }
      ]
    },
    {
      title: "Belajar Dasar Pemrograman Javascript",
      image: require("./assets/images/dicoding.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dicoding.com/certificates/1RXYYYWV3XVM"
        }
      ]
    },
    {
      title: "Belajar Membuat Aplikasi Backend Untuk Pemula",
      image: require("./assets/images/dicoding.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dicoding.com/certificates/MEPJLKQY6Z3V"
        }
      ]
    },
    {
      title: "Cloud Practitioner Essentials",
      image: require("./assets/images/dicoding.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dicoding.com/certificates/JLX13D3KGP72"
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
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "budi.setiawan112001@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
