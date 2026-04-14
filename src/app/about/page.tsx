import { SectionPage } from "@/src/components/section-page";

export default function AboutPage() {
  return (
    <SectionPage
      title="About Our Project"
      subtitle="We are a university student team studying how AI is transforming society and preparing practical insights for our class presentation."
      highlights={["Student-led research", "Real-world examples", "Presentation-ready findings"]}
      points={[
        "This project combines technical understanding and social impact analysis to explain why AI matters today.",
        "Our goal is to present AI opportunities and risks clearly, using examples from healthcare, education, and daily life.",
        "Each member contributes videos, research tasks, and written sections tracked through Trello collaboration.",
        "We designed this website as an organized source for our class, teacher, and other students.",
      ]}
    />
  );
}
