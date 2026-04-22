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
    name: "Nurbek",
    role: "Research Lead",
    route: "/team/nurbek",
    intro: "Focused on AI research trends, education changes, and presentation storytelling.",
    youtubeVideo: "https://www.youtube.com/watch?v=T2RPfm3huww",
    youtubeShort: "https://www.youtube.com/shorts/aqz-KE-bpKQ",
    trelloTasks: [
      "Collaborated with team members to collect references on AI adoption in universities",
      "Appeared in 2 videos and in 2 shorts videos",
      "Reviewed team presentation structure",
    ],
  },
  {
    name: "Firdavs",
    role: "Design & UX",
    route: "/team/firdavs",
    intro: "Designed website visuals, section hierarchy, and responsive layout strategy.",
    youtubeVideo: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    youtubeShort: "https://www.youtube.com/shorts/BkHhZ7qj0aI",
    trelloTasks: [
      "Appeared in 2 videos and in 2 shorts videos",
      "Created landing page wireframe",
      "Improved mobile responsiveness",
    ],
  },
  {
    name: "Mubinabonu",
    role: "Content Strategist",
    route: "/team/mubinabonu",
    intro: "Wrote the website copy and consolidated AI case studies for each domain.",
    youtubeVideo: "https://www.youtube.com/watch?v=075GGWHvJic",
    youtubeShort: "https://www.youtube.com/shorts/QoxJuW0A_rQ",
    trelloTasks: [
      "Drafted business and healthcare content",
      "Verified factual statements and citations",
      "Appeared in 2 videos and in 2 shorts videos",
    ],
  },
  {
    name: "Farangiz",
    role: "Video Curator",
    route: "/team/farangiz",
    intro: "Managed long-form YouTube resources and short explainers for quick learning.",
    youtubeVideo: "https://www.youtube.com/watch?v=CHFD0OXeJ9k",
    youtubeShort: "https://www.youtube.com/shorts/ouUHbSghNWc",
    trelloTasks: [
      "Appeared in 2 videos and in 2 shorts videos",
      "Selected five short videos",
      "Prepared video summaries for website",
    ],
  },
  {
    name: "Sukhrob",
    role: "Web Developer",
    route: "/team/sukhrob",
    intro: "Implemented Next.js app architecture, routing, and deployment preparation.",
    youtubeVideo: "https://www.youtube.com/watch?v=MfRALt_qEjY",
    youtubeShort: "https://www.youtube.com/shorts/_ZLpPx1ZeX8",
    trelloTasks: [
      "Built website pages and reusable components",
      "Connected pages with navigation",
      "Appeared in 2 videos and in 2 shorts videos",
    ],
  },
];

export const longVideos = [
  {
    title: "What is AI?",
    description: "How AI will transform jobs, skills, and productivity.",
    embedUrl: "https://www.youtube.com/watch?v=MfRALt_qEjY",
  },
  {
    title: "How can Artificial Intelligence improve your life?",
    description: "In this video, we explore how AI is transforming our daily lives and how you can start using it to become more productive, creative, and efficient. From helping with studying and work to improving creativity and saving time, AI tools are becoming powerful assistants in everyday life.",
    embedUrl: "https://www.youtube.com/watch?v=075GGWHvJic",
  },
  {
    title: "Don’t waste your money — we tested 100+ AI tools so you don’t have to.",
    description: "We put over 100 AI tools to the test — including ChatGPT, Gemini, Perplexity, Claude, and many more — to find out which ones actually deliver real value… and which ones are just hype.",
    embedUrl: "https://www.youtube.com/watch?v=CHFD0OXeJ9k",
  },
  {
    title: "How AI is Secretly Changing your future (Already happening)",
    description: "AI is already shaping your future behind the scenes, changing how you learn, work, and make decisions every day.",
    embedUrl: "https://www.youtube.com/watch?v=T2RPfm3huww",
  },
  {
    title: "Ethics of Artificial Intelligence",
    description: "Fairness, transparency, and responsible AI in real society.",
    embedUrl: "https://www.youtube.com/embed/HoKQiqx6z5g",
  },
];

export const shortVideos = [
  {
    title: "Vibe Coding Is Taking Over — And It Might Be a Problem",
    description: "More developers are coding based on “vibes” rather than solid engineering principles. While it feels fast and creative, this approach can lead to messy systems, hidden bugs, and unstable products. Is vibe coding the future—or a ticking time bomb?",
    embedUrl: "https://www.youtube.com/shorts/_ZLpPx1ZeX8",
  },
  {
    title: "AI: From Dream to Reality",
    description: "From a simple question asked by Alan Turing to a global revolution that’s shaping our future, Artificial Intelligence has come a long way. Today, AI is not just technology — it’s a powerful tool changing how we live, work, and imagine the world.",
    embedUrl: "https://www.youtube.com/shorts/ouUHbSghNWc",
  },
  {
    title: "How AI is changing the way of learning",
    description: "The Powerful Impact of Artificial Intelligence on Learning, Student Behavior, and Education Systems Today",
    embedUrl: "https://www.youtube.com/shorts/BkHhZ7qj0aI",
  },
  {
    title: "AI: Future or Threat? ",
    description: "Is AI the future or a threat? Let's explore the pros and cons of AI in this short video.",
    embedUrl: "https://www.youtube.com/shorts/QoxJuW0A_rQ",
  },
  {
    title: "Future of AI",
    description: "A fast recap of where AI may head in the next decade.",
    embedUrl: "https://www.youtube.com/embed/vLa-HhBpgc4",
  },
];
