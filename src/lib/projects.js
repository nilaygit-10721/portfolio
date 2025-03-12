import bg from "../assets/images/bg.png";
import brain from "../assets/images/brain.png";
import foto from "../assets/images/foto.png";
import cart from "../assets/images/cart.png";
import geeks from "../assets/images/geeks.png";
import white from "../assets/images/whiteboard.png";
import cp from "../assets/projects/mockups/cp.png";
import giphy from "../assets/images/giphy.png";
import airbnb from "../assets/images/airbnb.png";
export const projects = [
  {
    name: "Airbnb clone",
    slug: "airbnb-clone-hotel-website-development",
    description:
      "The Airbnb Clone is a comprehensive hotel booking platform that mimics the functionalities of the popular Airbnb service.",
    features: [
      "User-friendly Interface",
      "Clean and intuitive design that makes navigation easy for all users, ensuring a smooth booking experience.",
      "Maps and location services",
      "Search and Filter Options",
    ],
    techStack: [
      "Next Js",
      "TypeScript",
      "MapBox",
      "Tailwind CSS",
      "React Date Range ",
    ],
    liveLink: "airbnb-clone-delta-red.vercel.app",
    image: airbnb,
  },
  {
    name: "Background remover",
    slug: "background-remover-tool",
    description:
      "The Background Remover is an innovative online tool designed to help users effortlessly eliminate backgrounds from their images.",
    features: [
      "One-click Background Removal",
      "Multiple image formats such as JPEG, PNG, and GIF, ensuring versatility in usage",
      "High-resolution Output Users can download images in high resolution",
      "User-friendly Interface",
    ],
    techStack: [
      "MERN (MongoDB, Express, React.js, Node.js)",
      "Tailwind css",
      "Remove.bg APIs",
    ],
    liveLink: "background-removve.vercel.app",
    image: bg,
  },
  {
    name: "Brainwave AI",
    slug: "brainwave-patterns-analysis",
    description:
      "Brainwave AI is a cutting-edge platform that utilizes artificial intelligence to analyze brainwave patterns and provide insights into cognitive states.",
    features: [
      "AI-driven Analysis",
      "User-friendly Dashboard",
      "Real-time Insights",
    ],
    techStack: ["React.js", "Tailwind CSS", "TensorFlow"],
    liveLink: "brainwave-reactjs-xi.vercel.app",
    image: brain,
  },
  {
    name: "Fotofolio Website",
    slug: "fotofolio-image",
    description:
      "Fotofolio is an image-sharing platform similar to Pinterest, designed for users to discover, save, and share visual content. ",
    features: [
      "visually rich layout that allows users to explore a wide variety of images",
      "categories images",
      "search features",
      "related photos",
    ],
    techStack: ["MongoDB", "React.js"],
    liveLink: "foto-folio-peach.vercel.app",
    image: foto,
  },
  {
    name: "GiphyClone Website",
    slug: "giphy-clone-gif",
    description:
      "The Giphy Clone is a fun and interactive web application that allows users to search, share, and create GIFs. Mimicking the functionality of the popular Giphy platform, users can explore a vast library of GIFs, upload their own creations, and share them across social media.",
    features: [
      "GIF Search Functionality",
      "Upload Your Own GIFs",
      "Social Media Sharing",
      "User authentication to save favorite GIFs",
    ],
    techStack: ["Redux", "React.js", "MongoDB", "Giphy APIS"],
    liveLink: "giphy-clone-green.vercel.app",
    image: giphy,
  },
  {
    name: "ShopCart Website",
    slug: "shop-cart-ecommerce",
    description:
      "The Shop-Cart Website is a fully functional e-commerce platform that allows users to browse products, add them to their cart, and complete purchases seamlessly.",
    features: [
      "Product Catalog.",
      "user-friendly shopping cart that allows users to add, remove, and modify items before checkout.",
      "Secure Checkout",
    ],
    techStack: ["Figma", "React.js"],
    liveLink: "shop-cart-sand.vercel.app",
    image: cart,
  },
  {
    name: "Whiteboard Website",
    slug: "whiteboard-collaboration-tool",
    description:
      "The Whiteboard Website is an interactive online collaboration tool that allows users to brainstorm, draw, and share ideas in real-time.",
    features: [
      "Real-time Collaboration",
      "Save and Share",
      "Drawing Tools",
      "Clear the entire canvas",
    ],
    techStack: ["Figma", "React.js", "React Konva"],
    liveLink: "whiteboard-lime.vercel.app",
    image: white,
  },
  {
    name: "InterviewGeeks Website",
    slug: "ai-interview-geeks-preparation-tool",
    description:
      "AI Interview Geeks is an innovative platform designed to help job seekers prepare for interviews using artificial intelligence.",
    features: [
      "Personalized Coaching",
      "Realistic mock interviews that simulate actual interview conditions, allowing users to practice their responses",
      "AI Feedback",
      "Access to a comprehensive library of interview tips, common questions, and industry-specific advice",
    ],
    techStack: [
      "Figma",
      "React.js",
      "Node.js",
      "open-ai APIS",
      "MongoDB",
      "Express",
    ],
    liveLink: "github.com/nilaygit-10721/MINI_PR",
    image: geeks,
  },
  {
    projectTitle: "Climate App",
    description:
      "A real-time weather application providing detailed climate information for locations worldwide. Built with Next.js, TanStack Query, and OpenWeather API for accurate and efficient data fetching and display.",
    features: [
      "Real-time weather updates with temperature, humidity, wind speed, and condition icons.",
      "Search functionality for finding weather details of any city.",
      "Geolocation-based weather data fetching for the user's current location.",
      "Responsive design optimized for mobile, tablet, and desktop devices.",
      "Error handling for invalid city names or API issues.",
    ],
    techStack: ["Figma", "React.js", "Framer Motion", "Shadcn UI", "Tanstack"],
    liveLink: "climate-production.vercel.app/",
    image: cp,
  },
];
