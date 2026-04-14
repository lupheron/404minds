import { SectionPage } from "@/src/components/section-page";

export default function DailyLifePage() {
  return (
    <SectionPage
      title="AI in Daily Life"
      subtitle="Many people use AI every day without noticing, from maps and search engines to assistants and translation apps."
      highlights={["Smart assistants", "Personalized feeds", "Convenience tools"]}
      points={[
        "AI improves accessibility through speech-to-text, translation, and assistive interfaces.",
        "Navigation and ride apps use prediction models to optimize routes and reduce travel time.",
        "Social platforms use recommendation algorithms to personalize content consumption.",
        "Digital literacy is important so users can identify misinformation and use AI safely.",
      ]}
    />
  );
}
