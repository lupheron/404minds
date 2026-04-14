export type TeamMember = {
  name: string;
  role: string;
  route: string;
  intro: string;
  youtubeVideo: string;
  youtubeShort: string;
  trelloTasks: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Sukhrob",
    role: "Research Lead",
    route: "/team/sukhrob",
    intro: "Focused on AI research trends, education changes, and presentation storytelling.",
    youtubeVideo: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    youtubeShort: "https://www.youtube.com/shorts/aqz-KE-bpKQ",
    trelloTasks: [
      "Collected references on AI adoption in universities",
      "Prepared impact timeline section",
      "Reviewed team presentation structure",
    ],
  },
  {
    name: "Aisha",
    role: "Design & UX",
    route: "/team/aisha",
    intro: "Designed website visuals, section hierarchy, and responsive layout strategy.",
    youtubeVideo: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    youtubeShort: "https://www.youtube.com/shorts/uRzVxR2LzRo",
    trelloTasks: [
      "Designed color palette and components",
      "Created landing page wireframe",
      "Improved mobile responsiveness",
    ],
  },
  {
    name: "Rahim",
    role: "Content Strategist",
    route: "/team/rahim",
    intro: "Wrote the website copy and consolidated AI case studies for each domain.",
    youtubeVideo: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    youtubeShort: "https://www.youtube.com/shorts/YqeW9_5kURI",
    trelloTasks: [
      "Drafted business and healthcare content",
      "Verified factual statements and citations",
      "Prepared speaking notes for presentation",
    ],
  },
  {
    name: "Malika",
    role: "Video Curator",
    route: "/team/malika",
    intro: "Managed long-form YouTube resources and short explainers for quick learning.",
    youtubeVideo: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    youtubeShort: "https://www.youtube.com/shorts/5qap5aO4i9A",
    trelloTasks: [
      "Selected five long-form videos",
      "Selected five short videos",
      "Prepared video summaries for website",
    ],
  },
  {
    name: "Daler",
    role: "Web Developer",
    route: "/team/daler",
    intro: "Implemented Next.js app architecture, routing, and deployment preparation.",
    youtubeVideo: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    youtubeShort: "https://www.youtube.com/shorts/F1B9Fk_SgI0",
    trelloTasks: [
      "Built website pages and reusable components",
      "Connected pages with navigation",
      "Prepared Vercel deployment checklist",
    ],
  },
];

export const longVideos = [
  {
    title: "AI and the Future of Work",
    description: "How AI will transform jobs, skills, and productivity.",
    embedUrl: "https://www.youtube.com/embed/aircAruvnKk",
  },
  {
    title: "How Generative AI Works",
    description: "A beginner-friendly explanation of modern AI systems.",
    embedUrl: "https://www.youtube.com/embed/2ePf9rue1Ao",
  },
  {
    title: "AI in Healthcare",
    description: "Examples of diagnosis support, monitoring, and medical innovation.",
    embedUrl: "https://www.youtube.com/embed/f2aocKWrPG8",
  },
  {
    title: "AI in Education",
    description: "Personalized learning and digital tutors in modern classrooms.",
    embedUrl: "https://www.youtube.com/embed/8nt3edWLgIg",
  },
  {
    title: "Ethics of Artificial Intelligence",
    description: "Fairness, transparency, and responsible AI in real society.",
    embedUrl: "https://www.youtube.com/embed/HoKQiqx6z5g",
  },
];

export const shortVideos = [
  {
    title: "AI in 60 Seconds",
    description: "Quick intro to what AI can already do.",
    embedUrl: "https://www.youtube.com/embed/q6EoRBvdVPQ",
  },
  {
    title: "Will AI Replace Jobs?",
    description: "A short discussion about job loss and new opportunities.",
    embedUrl: "https://www.youtube.com/embed/yQxN7EJm6w8",
  },
  {
    title: "Prompt Engineering Basics",
    description: "How to ask better questions to get better AI responses.",
    embedUrl: "https://www.youtube.com/embed/6m7p6xN2nTs",
  },
  {
    title: "AI in Student Life",
    description: "How students can use AI tools ethically for learning.",
    embedUrl: "https://www.youtube.com/embed/4fY2Ndu6iGE",
  },
  {
    title: "Future of AI",
    description: "A fast recap of where AI may head in the next decade.",
    embedUrl: "https://www.youtube.com/embed/vLa-HhBpgc4",
  },
];
