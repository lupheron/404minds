import { SectionPage } from "@/src/components/section-page";

export default function ResourcesPage() {
  return (
    <SectionPage
      title="Learning Resources"
      subtitle="This page lists references and study directions used by our team to build the project content."
      highlights={["Research papers", "Video explainers", "Ethics frameworks"]}
      points={[
        "Use trusted resources from universities, global organizations, and recognized technology publishers.",
        "Watch long-form videos for conceptual depth and shorts for quick practical explanations.",
        "Compare multiple sources to avoid one-sided claims about AI benefits or risks.",
        "Keep notes and citations so your presentation remains academically clear and reliable.",
      ]}
    />
  );
}
