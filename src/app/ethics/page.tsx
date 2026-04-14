import { SectionPage } from "@/src/components/section-page";

export default function EthicsPage() {
  return (
    <SectionPage
      title="AI Ethics and Responsibility"
      subtitle="As AI becomes more powerful, ethical design and governance become critical to ensure fairness and trust."
      highlights={["Bias and fairness", "Privacy and consent", "Human accountability"]}
      points={[
        "AI can inherit bias from training data, leading to unfair outcomes in hiring, finance, or public services.",
        "Sensitive personal data must be protected with strict security and transparent consent practices.",
        "Humans should remain accountable for high-stakes decisions supported by AI systems.",
        "Ethical AI education is important so future developers can build systems that serve society responsibly.",
      ]}
    />
  );
}
