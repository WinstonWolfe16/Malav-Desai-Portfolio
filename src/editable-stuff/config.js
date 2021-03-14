// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#ab3428,#f49e4c,#F1E87E,#2d728f,#3b8ea5",
  firstName: "Malav",
  middleName: "",
  lastName: "Desai",
  message: " | Engineer | Programmer | Developer |",
  icons: [
    {
      "id": 0,
      "image": "fa-github",
      "url": "https://github.com/malavdesai16",
      "style": "socialicons"
    },
    {
      "id": 1,
      "image": "fa-linkedin",
      "url": "https://www.linkedin.com/in/malavdesai16/",
      "style": "socialicons"
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/portfolio.png"),
  imageSize: 375,
  // imageLink: require("https://drive.google.com/file/d/1945M557DOcE2PhSGD_lyNWjGvhmI7gm3/view?usp=sharing"),
  message: "Hello there! I am a computer science graduate student🧑‍🎓 at Syracuse University,NY🍊. I currently work as a Graduate Student Researcher at Nexis Tecchnology Lab where I am a part of Team Smart-Lab. Previously, I worked as a Software Developer💻 at 1Rivet, India. It is my dream to be a part of a project/idea/company that changes the world🌎 for its greater good. I am a big fan of Football/Soccer⚽ and I also believe that without Music🎵 my life would be incomplete.",
  resume: "https://drive.google.com/file/d/12YoRBie_OQpUGDYuNr23HjsRiu6uUal-/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "malavdesai16", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Technical Experience",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/portfolio.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/portfolio.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
// const skills = {
//   show: true,
//   heading: "Skills",
//   hardSkills: [
//     { name: "Python", value: 95 },
//     { name: "Amazon Web Service", value: 90 },
//     { name: "JAVA", value: 90 },
//     { name: "Machine Learning", value: 95 },
//     { name: "MongoDB", value: 85 },
//     { name: "Google Cloud and Firebase", value: 85 },
//   ],
//   softSkills: [
//     { name: "Quick Lerner", value: 95 },
//     { name: "Adaptability", value: 90 },
//     { name: "Positivity", value: 80 },
//     { name: "Problem Solving", value: 85 },
//     { name: "Empathy", value: 90 },
//     { name: "Creativity", value: 90 },
//   ],
// };

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering/Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "malavdesai2013@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos,leadership, getInTouch };
