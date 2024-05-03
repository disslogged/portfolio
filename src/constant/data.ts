import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export const headerList = [
  { id: 1, name: "Home", slug: "#home" },
  { id: 2, name: "Projects", slug: "#projects" },
  { id: 3, name: "Skills", slug: "#skills" },
  { id: 4, name: "Experiences", slug: "#experiences" },
  { id: 5, name: "Contact", slug: "#contact" },
];

export const projectsData = [
  {
    id: 1,
    title: "Ecommerce Shop",
    description:
      "Ecommerce Shop is an online marketplace designed to provide users with a seamless shopping experience. It features a wide range of products across various categories, intuitive search and filter functionality, secure checkout, and responsive design for mobile compatibility.",
    keyFeatures: [
      "Product catalog with diverse categories",
      "Advanced search and filter options",
      "Secure checkout process with multiple payment gateways",
      "Responsive design ensures optimal viewing on all devices",
    ],
    technologies: [
      "React",
      "Tailwind",
      "Typescript",
      "Redux",
      "Node.js",
      "MongoDB",
    ],
    imageUrl: "https://picsum.photos/700/700",
  },
  {
    id: 2,
    title: "Social Media Platform",
    description:
      "Social Media Platform is a platform that connects people from all over the world. It allows users to share photos, videos, and updates with their friends and followers. The platform also features messaging functionality, groups, events, and more.",
    keyFeatures: [
      "User profiles with customizable settings",
      "News feed with algorithmic timeline",
      "Messaging system for private communication",
      "Groups and events for community interaction",
    ],
    technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
    imageUrl: "https://picsum.photos/700/701",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Task Management App is a productivity tool designed to help users organize their tasks and projects. It features task lists, due dates, priority levels, and collaboration functionality. Users can create, assign, and track tasks with ease.",
    keyFeatures: [
      "Task lists with drag-and-drop functionality",
      "Due dates and priority levels for task organization",
      "Collaboration features for team projects",
      "User-friendly interface for easy task management",
    ],
    technologies: ["React", "Redux", "Firebase"],
    imageUrl: "https://picsum.photos/700/702",
  },
  {
    id: 4,
    title: "Recipe Sharing Platform",
    description:
      "Recipe Sharing Platform is a community-driven platform for sharing and discovering recipes. Users can browse a vast collection of recipes, create their own recipes, and engage with other users through comments and likes. The platform also features personalized recommendations based on user preferences.",
    keyFeatures: [
      "Browse recipes by category or cuisine",
      "Create and share recipes with the community",
      "Engage with other users through comments and likes",
      "Personalized recommendations for each user",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    imageUrl: "https://picsum.photos/700/703",
  },
  {
    id: 5,
    title: "Fitness Tracker App",
    description:
      "Fitness Tracker App is a mobile application designed to help users track their fitness activities and progress. It features workout logging, goal setting, progress tracking, and personalized recommendations. Users can monitor their workouts, set goals, and stay motivated on their fitness journey.",
    keyFeatures: [
      "Log workouts and track activity levels",
      "Set fitness goals and monitor progress",
      "Receive personalized recommendations for workouts",
      "Track nutrition and calorie intake",
    ],
    technologies: ["React Native", "Firebase"],
    imageUrl: "https://picsum.photos/700/704",
  },
] as const;

export const skillsData = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "Tailwind" },
  { id: 4, name: "MUI" },
  { id: 5, name: "Javascript" },
  { id: 6, name: "Typescript" },
  { id: 7, name: "React" },
  { id: 8, name: "ContextAPI" },
  { id: 9, name: "Redux" },
  { id: 10, name: "Git" },
];

export const socialLinks = [
  {
    icon: React.createElement(FaTelegram),
    url: "https://t.me/disslogged",
    label: "Telegram",
  },
  {
    icon: React.createElement(FaGithub),
    url: "https://github.com/disslogged",
    label: "GitHub",
  },
  {
    icon: React.createElement(SiGmail),
    url: "mailto:fardynmadany@gmail.com",
    label: "Email",
  },
  {
    icon: React.createElement(FaLinkedin),
    url: "https://www.linkedin.com/in/fardin-madani",
    label: "LinkedIn",
  },
];
