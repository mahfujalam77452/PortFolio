// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

import ProfilePic from "../assets/profile_image/linkedIn.jpg";

import SUSTLogo from "../assets/SUST/logo.jpg";

import CodeforcesLogo from "../assets/CP/codeforce.png";
import CodeChefLogo from "../assets/CP/codechef.png";
import VjudgeLogo from "../assets/CP/Vjudge.png";

import ilmeraPic1 from "../assets/Project_image/Ilmera/picture_1.png";
import ilmeraPic2 from "../assets/Project_image/Ilmera/picture_2.png";
import ilmeraPic3 from "../assets/Project_image/Ilmera/picture_3.png";

import AIVoiceAssistantPic1 from "../assets/Project_image/AI_assistent/picture_1.png";
import AIVoiceAssistantPic2 from "../assets/Project_image/AI_assistent/picture_2.png";
import AIVoiceAssistantPic3 from "../assets/Project_image/AI_assistent/picure_3.png";

import EventurePic1 from "../assets/Project_image/Aventure/picture_1.png";
import EventurePic2 from "../assets/Project_image/Aventure/picure_2.png";
import EventurePic3 from "../assets/Project_image/Aventure/picure_3.png";

import ECommercePic1 from "../assets/Project_image/E-commerce/picture_1.png";
import ECommercePic2 from "../assets/Project_image/E-commerce/picture_2.png";
import ECommercePic3 from "../assets/Project_image/E-commerce/picture_3.png";

import EducationalInstitutePic1 from "../assets/Project_image/Educational_institute/picture_1.png";
import EducationalInstitutePic2 from "../assets/Project_image/Educational_institute/picture_2.png";


// ─── PERSONAL INFO ──────────────────────────────────────────
export const personal = {
  name: "Md. Mahfuj Alam",
  title: "Competitive Programmer & MERN Stack Developer",
  tagline: "Building AI-powered full-stack applications & solving complex algorithmic problems.",
  email: "mahfujalam77452@gmail.com",
  phone: "01774527178",
  location: "Sylhet, Bangladesh",
  github: "https://github.com/mahfujalam77452",
  linkedin: "https://www.linkedin.com/in/md-mahfuj-alam-b654722bb/",
  codeforces: "https://codeforces.com/profile/Mahfuj_SUST",
  codechef: "https://www.codechef.com/users/mahfuj_sust",
  avatar: ProfilePic,
  resumeLink: "https://drive.google.com/file/d/17QF8pauwWgnA6eW-EebuQ75Wm1dz2BfW/view?usp=sharing",
};


// ─── EDUCATION ──────────────────────────────────────────────
export const education = [
  {
    institution: "Shahjalal University of Science and Technology (SUST)",
    degree: "B.Sc. in Computer Science and Engineering",
    duration: "Jan 2022 – jun 2026",
    cgpa: "3.45 / 4.00",
    logo: SUSTLogo,
  },
];


// ─── SKILLS ─────────────────────────────────────────────────
export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    items: ["C", "C++", "Java", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Web / MERN",
    icon: "Globe",
    items: ["React", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Concepts",
    icon: "Cpu",
    items: ["Data Structures & Algorithms", "OOP", "API Integration", "REST APIs", "RAG Systems"],
  },
  {
    category: "Tools & DevOps",
    icon: "Wrench",
    items: ["Git", "Docker", "MongoDB Atlas", "Stripe API", "Qdrant", "Google Gemini API"],
  },
  {
    category: "Data & AI",
    icon: "BarChart2",
    items: ["Pandas", "Matplotlib", "Seaborn", "Vector Search", "LLM Integration"],
  },
];


// ─── COMPETITIVE PROGRAMMING ─────────────────────────────────
export const competitiveProgramming = [
  {
    platform: "Codeforces",
    handle: "Mahfuj_SUST",
    url: "https://codeforces.com/profile/Mahfuj_SUST",
    rating: "1425",
    rank: "Specialist",
    color: "#1B98F5",
    stats: ["1000+ problems solved", "DS, Greedy, DP, Graphs, Math"],
    logo: CodeforcesLogo,
  },
  {
    platform: "CodeChef",
    handle: "mahfuj_sust",
    url: "https://www.codechef.com/users/mahfuj_sust",
    rating: "1645",
    rank: "3-Star Coder",
    color: "#F1A839",
    stats: ["Regular long challenges", "Rated contest participant"],
    logo: CodeChefLogo,
  },
  {
    platform: "LeetCode",
    handle: "—",
    url: "https://leetcode.com/u/Mahfuj_SUST/",
    rating: "226+",
    rank: "Problems Solved",
    color: "#FFA116",
    stats: ["226+ problems solved", "Practice & interview prep"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
  },
  {
    platform: "VJudge",
    handle: "—",
    url: "https://vjudge.net/user/2020331098Mahfuj",
    rating: "200+",
    rank: "Problems Solved",
    color: "#6C757D",
    stats: ["200+ problems solved", "Multi-judge practice"],
    logo: VjudgeLogo,
  },
];

export const contestAchievements = [
  "12th place – Intra SUST Programming Contest (among 200 participants)",
  "Participated in SUST IUPC",
  "Multiple team contests & hackathons",
];


// ─── PROJECTS ────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Ilmera Foundation",
    subtitle: "Full-Stack MERN Application",
    badge: "Live Production",
    badgeColor: "accent",
    liveUrl: "https://www.ilmerafoundation.org/",
    githubUrl: null,
    description:
      "Official website for a nonprofit operating across Education & Research, Social Welfare, and Foreign Scholarship pillars.",
    highlights: [
      "Dynamic activity & project showcases with image/video support",
      "Membership application & multi-category donation system",
      "Stripe payment gateway integration",
      "Secure admin panel for full content management",
      "Responsive UI, SEO & performance optimized",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS"],
    images: [ilmeraPic1, ilmeraPic2, ilmeraPic3],
  },

  {
    id: 3,
    title: "Eventure – AI Event Manager",
    subtitle: "Hackathon Project · SmythOS",
    badge: "Finalist",
    badgeColor: "yellow",
    liveUrl: null,
    githubUrl: "https://github.com/minhaj47/Eventure-HackAI",
    description:
      "AI-powered platform to automate event planning, registration, and communication — finalist at Green University HackTheAI Hackathon.",
    highlights: [
      "AI-generated emails, banners, reminders, and social media content",
      "Automated event registration and attendee management",
      "Finalist at Green University HackTheAI Hackathon",
    ],
    techStack: ["React", "SmythOS", "AI APIs", "Node.js"],
    images: [EventurePic1, EventurePic2, EventurePic3],
  },

  {
    id: 4,
    title: "Educational Institute Management System",
    subtitle: "Full-Stack MERN Application",
    badge: "MERN",
    badgeColor: "blue",
    liveUrl: null,
    githubUrl: "https://github.com/mahfujalam77452/Madrasha",
    description:
      "Centralized platform for managing academic, financial, and administrative operations for educational institutions.",
    highlights: [
      "Student fee payment, result viewing, certificates & notices",
      "Charity donation system integration",
      "Islamic educational resources (Quran & Hadith)",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    images: [EducationalInstitutePic1, EducationalInstitutePic2],
  },

  {
    id: 5,
    title: "AI Voice Assistant",
    subtitle: "MERN Stack + Gemini API",
    badge: "AI",
    badgeColor: "purple",
    liveUrl: null,
    githubUrl: "https://github.com/mahfujalam77452/Virtual-assistant",
    description:
      "Voice-enabled AI assistant supporting general conversation, real-time queries, and productivity actions.",
    highlights: [
      "Voice-to-text and text-to-voice interaction",
      "Weather checks, Google/YouTube search, app launching",
      "Powered by Google Gemini API",
    ],
    techStack: ["React", "Node.js", "Google Gemini API", "Web Speech API"],
    images: [AIVoiceAssistantPic1, AIVoiceAssistantPic2, AIVoiceAssistantPic3],
  },

  {
    id: 6,
    title: "E-Commerce Website",
    subtitle: "Self Practice Project",
    badge: "Full-Stack",
    badgeColor: "blue",
    liveUrl: null,
    githubUrl: null,
    description:
      "Full-featured eCommerce platform with product search, recommendations, and secure checkout flow.",
    highlights: [
      "Product search, filter, and recommendation engine",
      "Secure checkout and cart management",
      "Clean UI focused on scalability and UX",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    images: [ECommercePic1, ECommercePic2, ECommercePic3],
  },

  {
    id: 2,
    title: "Research Paper RAG System",
    subtitle: "Backend-Focused AI System",
    badge: "AI / ML",
    badgeColor: "purple",
    liveUrl: null,
    githubUrl: "https://github.com/mahfujalam77452/research-paper-rag-assessment/tree/submission/mahfuj-alam",
    description:
      "Retrieval-Augmented Generation system for querying and extracting insights from academic research papers.",
    highlights: [
      "PDF upload, chunking, and vector indexing with Qdrant",
      "Google Gemini API for semantic search & citation-based responses",
      "Query history and analytics for user behavior tracking",
    ],
    techStack: ["Node.js", "Qdrant", "Google Gemini API", "RAG", "Vector DB"],
    images: [],
  },
];


// ─── ORGANIZATIONS ───────────────────────────────────────────
export const organizations = [
  {
    name: "SUST Competitive Programming Camp",
    role: "Member",
    icon: "Trophy",
  },
  {
    name: "Panchagarh Students Association of SUST",
    role: "Vice President",
    icon: "Users",
  },
];


// ─── LANGUAGES ───────────────────────────────────────────────
export const languages = [
  { name: "Bengali", level: "Native", proficiency: 100 },
  { name: "English", level: "Professional Working Proficiency", proficiency: 80 },
];