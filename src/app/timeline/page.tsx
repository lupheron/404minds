import { SectionPage } from "@/src/components/section-page";

export default function TimelinePage() {
  return (
    <SectionPage
      title="AI Timeline"
      subtitle="AI evolved from early theory into practical tools used by millions. This timeline helps us explain the shift from research to everyday use."
      highlights={["1950s foundations", "2010s deep learning", "2020s generative AI"]}
      points={[
        "Early AI research introduced concepts such as machine intelligence, symbolic logic, and expert systems.",
        "Improvements in computing power and data enabled deep learning breakthroughs in image and speech recognition.",
        "Recent generative AI tools can produce text, code, images, and audio, making AI visible to everyone.",
        "The next phase will likely focus on trustworthy, efficient, and domain-specific AI applications.",
      ]}
    />
  );
}
