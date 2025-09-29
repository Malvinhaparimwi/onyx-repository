import {
  prediction,
  python,
  java,
  poutry,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  ros2,
  git,
  empower,
  robot,
  android,
  arduino,
  blender,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
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

export const services = [
  { title: "Python", icon: python },
  { title: "Arduino", icon: arduino },
  { title: "Blender", icon: blender },
  { title: "Android", icon: android },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Computer Engineering Intern",
    company_name: "Empowerbank Limited",
    icon: eduskill,
    iconBg: "#161329",
    date: "October 2024 - August 2025",
    points: [
      "Acquired hands-on knowledge of Networking, delving into troubleshooting, as well as system administration.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
];

 
export const projects = [
  {
    name: "Poutrybot",
    description:
      "SMS Based chat bot system for poultry farming using Python RASA and JavaScript's react native framework.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "RASA", color: "green-text-gradient" },
      { name: "React Native", color: "pink-text-gradient" },
    ],
    image: poutry,
    source_code_link: "https://github.com/Malvinhaparimwi/poutrySmsChatBot.git",
  },
  {
    name: "Android-teleop",
    description:
      "Mobile app ROS2 Robot Tele-operation while viewing camera data using Android Studio",
    tags: [
      { name: "ROS", color: "blue-text-gradient" },
      { name: "Android Studio", color: "green-text-gradient" },
      { name: "Web Sockets", color: "pink-text-gradient" },
    ],
    image: ros2,
    source_code_link: "https://github.com/Malvinhaparimwi/RO2MobileTeleop.git",
  },
  {
    name: "Price-point",
    description:
      "Market prediction using price action from Japanese candlesticks for Stock, Forex or Indices markets.",
    tags: [
      { name: "MQL5", color: "blue-text-gradient" },
      { name: "Deriv's API", color: "green-text-gradient" },
    ],
    image: prediction,
    source_code_link:
      "https://github.com/Malvinhaparimwi",
  },
  {
    name: "Q-Robot",
    description:
      "Autonomous fertilizer and pesticide spraying robot.",
    tags: [
      { name: "ROS", color: "blue-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: "Computer Vision", color: "blue-text-gradient" },
      { name: "Electronics", color: "blue-text-gradient" },

    ],
    image: robot,
    source_code_link: "https://github.com/Malvinhaparimwi/Q-Robot.git",
  },
  {
    name: "Customer Chatbot",
    description:
      "Customer service chatbot for Empowerbank where I did my internship.",
    tags: [
      { name: "LLM Finetuning", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "Huggingface Web Hosting", color: "pink-text-gradient" },
    ],
    image: empower,
    source_code_link: "",
  },
];
