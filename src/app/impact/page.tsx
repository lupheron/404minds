import { SectionPage } from "@/src/components/section-page";

export default function ImpactPage() {
  return (
    <SectionPage
      title="AI Impact Overview"
      subtitle="Artificial intelligence already influences communication, work, education, and decision-making. Understanding this impact is essential for our future careers."
      highlights={["Automation", "Personalization", "Decision support"]}
      points={[
        "AI systems automate repetitive tasks and free people to focus on strategy, creativity, and complex problem-solving.",
        "From recommendation engines to smart assistants, AI personalizes experiences in apps, schools, and businesses.",
        "Data-driven prediction can improve planning and outcomes, but it also raises concerns about fairness and bias.",
        "Responsible adoption requires balancing innovation with privacy, transparency, and human oversight.",
      ]}
    />
  );
}
