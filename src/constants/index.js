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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Ui/UX Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "IR Web Developers",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2025 – Present",
    points: [
      "Developing responsive full-stack web applications using React, Node.js, TypeScript, and PostgreSQL.",
      "Leading the creation of scalable frontend & backend architectures for client projects.",
      "Collaborating with design and development teams to deliver high-quality, user-friendly solutions on time.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Instructor",
    company_name: "IR SkillUp",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Apr 2024 – Present",
    points: [
      "Teaching and mentoring students in JavaScript, TypeScript, React, and Node.js.",
      "Designing practical workshops and hands-on sessions to improve coding and problem-solving skills.",
      "Guiding learners on real-world project development and industry best practices.",
      "Providing career advice and support to help students achieve their professional goals.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Nxt Wave",
    icon: shopify,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Designing wireframes, prototypes, and mockups using Figma/Adobe XD for multiple projects.",
      "Focusing on user-centric, accessible, and visually appealing interfaces for web and mobile apps.",
      "Enhancing project engagement and brand presence with intuitive layouts and consistent design systems.",
      "Collaborating with developers to ensure accurate implementation of designs.",
    ],
  },
  {
    title: "Interactive Web Experiences",
    company_name: "Three.js",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2024 – 2025",
    points: [
      "Developing immersive 3D and interactive web elements using Three.js for client and internal projects.",
      "Combining UI/UX principles with real-time animations to create cutting-edge interfaces.",
      "Increasing user engagement and retention through innovative 3D experiences.",
      "Optimizing performance and responsiveness of 3D content across devices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was very hard to make a website as beautiful as our product, but Jyoshna proved me wrong.",
    name: "Sai Sreekar",
    designation: "bussinessman",
    company: "Sai Enterprises",
    image: "https://i.pinimg.com/474x/0a/52/d5/0a52d5e52f7b81f96538d6b16ed5dc2b.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jyoshna does.",
    name: "Suhasini Erragudi",
    designation: "Founder",
    company: "Erragudi Diary Farms",
    image: "https://i.pinimg.com/474x/0a/52/d5/0a52d5e52f7b81f96538d6b16ed5dc2b.jpg",
  },
  {
    testimonial:
      "After Jyoshna optimized our website, our traffic increased by 50%. We can't thank her enough!",
    name: "Ravi Teja",
    designation: "Investor",
    company: "Raj Enterprises",
    image: "https://i.pinimg.com/474x/0a/52/d5/0a52d5e52f7b81f96538d6b16ed5dc2b.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
