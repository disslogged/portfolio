import React from "react";
import lastShop from "../assets/projects/lastshop.png";
import memoryGame from "../assets/projects/memory-game.png";
import movie from "../assets/projects/movie.png";

import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export const headerList = [
  { id: 1, name: "Home", slug: "#home" },
  { id: 2, name: "About", slug: "#about" },
  { id: 3, name: "Projects", slug: "#projects" },
  { id: 4, name: "Skills", slug: "#skills" },
  { id: 5, name: "Experiences", slug: "#experiences" },
  { id: 6, name: "Contact", slug: "#contact" },
];

export const projectsData = [
  {
    id: 1,
    title: "Ecommerce Shop",
    description:
      "Ecommerce Shop is an online marketplace designed to provide users with a seamless shopping experience. It features a wide range of products across various categories, filter functionality, secure checkout, and responsive design for mobile compatibility.",
    keyFeatures: [
      "Product catalog with diverse categories",
      "Advanced search and filter options",
      "Secure checkout process with multiple payment gateways",
      "Responsive design ensures optimal viewing on all devices",
    ],
    technologies: ["React", "Tailwind", "Typescript", "Redux", "React Query"],
    imageUrl: lastShop,
    link: "https://react-shop-app-five.vercel.app/",
  },
  {
    id: 2,
    title: "Movie App",
    description:
      "Welcome to the Movie App! This is a React application that allows users to browse and explore information about movies and TV shows using the OMDB API (Open Movie Database API). Users can search for movies, view details about individual movies, and select movies to see full information.",
    technologies: ["React", "Context", "SPA"],
    keyFeatures: [
      "Detailed movie information",
      "Dynamic content loading",
      "Favorites list",
      "Pagination",
      "Error handling",
      "User reviews and ratings",
    ],
    imageUrl: movie,
    link: "https://react-movie-app-chi-seven.vercel.app/",
  },
  {
    id: 3,
    title: "Memory Game",
    description:
      "Memory Game is an interactive game designed to enhance memory skills. It tracks player turns and scores, providing a fun and challenging experience. The game features a reset button for easy restarts, responsive design, and a user-friendly interface. Players match pairs to improve their memory.",
    keyFeatures: [
      "Monitors and displays player scores to promote a competitive environment.",
      "Ensures the game works seamlessly on various devices and screen sizes.",
      "Simple and intuitive design for an enjoyable user experience",
    ],
    technologies: ["React", "Typescript"],
    imageUrl: memoryGame,
    link: "https://react-memory-game-pi.vercel.app/",
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
