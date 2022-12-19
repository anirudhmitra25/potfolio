import sortingVisualizer from "../public/Sorting-visualizer.png";
import portfolio from "../public/portfolio.png";
export const education = [
  {
    date: "Jul 2017 - Sept 2021",
    location: "Manipal Institute of Technology",
    title: "Btech in Information Technology",
    content: (
      <div>
        <h1 className="font-medium">
        Extra-curricular:
        </h1>
        <ul className="list-disc mt-4 font-normal text-sm">
          <li>Head of Human Resources, Photography Club Manipal</li>
          <li>Organizer, Revels(Non-tech fest)</li>
          <li>Organizer, Techtatva(Tech fest)</li>
        </ul>
      </div>
    ),
  },
  {
    date: "Higher Secondary",
    location: "Ryan International",
    title: "High School",
    content: <p>10th board 8.1 CGPA, 12th Board 86 percentage</p>,
  },
];

export const experience = [
  {
    date: "Sept 2022 - Present",
    location: "Mtree Software Del,IN",
    title: "Software Engineer",
    content: (
      <ul className="list-disc mt-4 font-normal text-sm">
        <li>
          Worked on a web based network simulator for a multi-billion dollar US
          based organisation
        </li>
        <li>
          Built custom react components for map based libraries like leaflet and
          cesium ion
        </li>
        <li>
          Collaborated with an agile team of 6, and helped prioritize and scope
          features in order to complete the critical tasks first
        </li>
        <li>
          Communicated with the clients team, working to determine solutions for
          the user experience
        </li>
      </ul>
    ),
  },
  {
    date: " Aug 2021 - Aug-2022",
    location: "PepperTap Del,IN",
    title: "Associate Software Engineer",
    content: (
      <ul className="list-disc mt-4 font-normal text-sm">
        <li>
          Completing user stories related to adding new features for all of
          Peppertap’s applications and websites.
        </li>
        <li>
          Collaborated with the Backend and QA team to successfully integrate
          APIs
        </li>
        <li>Assisted in UX and UI designs for technical feasibility</li>
        <li>
          Collaborated with product and design team members to implement new
          feature developments using React.js and React Native
        </li>
        <li>
          Have successfully completed critical deployments for the ecommerce app
          (Search Page, Brand Page, Homepage, Wishlist, Landing Pages for home
          screen banners) Integrated CMS(Content management system) for the
          ecommerce application. Integrated last mile trip flow in the warehouse
          management system application and admin panel
        </li>
      </ul>
    ),
  },
  {
    date: "Mar 2021 - Jun-2021",
    location: "Tech Mahindra Del,IN",
    title: "Project Trainee",
    content: (
      <ul className="list-disc mt-4 font-normal text-sm">
        <li>4 months internship</li>
        <li>
          Part of a government project where we have to develop a website for
          Greater Noida development authority(GNIDA). Designed and implemented
          web pages using HTML,CSS and Javascript.
        </li>
        <li>
          Assisted senior developers in designing web pages and gained skills in
          aligning designs with client requirements
        </li>
        <li>
          Have designed and implemented various modules of the GNIDA website
        </li>
      </ul>
    ),
  },
];
export const skills = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 10,
      },
      {
        name: "Hindi",
        level: 10,
      },
      {
        name: "Bengali",
        level: 7,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 9,
      },
      {
        name: "Typescript",
        level: 7,
      },
      {
        name: "Javascript",
        level: 10,
      },
      {
        name: "Redux & Saga",
        level: 9,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Node.js",
        level: 4,
      },
    ],
  },
  {
    name: "Mobile development",
    skills: [
      {
        name: "React Native",
        level: 9,
      },
      {
        name: "Android Studio",
        level: 4,
      },
    ],
  },
];

export const projectItems = [
  {
    projectName: "Sorting Visualizer",
    project: sortingVisualizer,
    description:
      "Sorting Visualizer is a web app for visualizing a bunch of different sorting algorithms, with the functionality of (Speed Control) and (Array Size Control)",
    source: "https://github.com/anirudhmitra25/Sorting-Visualizer",
    preview: "https://sorting-visualizer-anirudh.netlify.app/",
  },
  {
    projectName: "portfolio Website",
    project: portfolio,
    description:
      "The personal website/portfolio of Anirudh Mitra. Built using Nextjs and tailwind",
      source: "https://github.com/anirudhmitra25/potfolio",
      preview: null,
  },
];

export const resume_pdf =
  "https://drive.google.com/file/d/1fw9KODA63O1Pbl7dApwT8doTGGDBtbJB/view?usp=sharing";
export const github_link = "https://github.com/anirudhmitra25";
export const linkedIn_link =
  "https://www.linkedin.com/in/anirudh-mitra-3105a31a9/";
export const mail_link =
  "https://mail.google.com/mail/?view=cm&fs=1&to=anirudhmitra25@gmail.com";
