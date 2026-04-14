import { SectionPage } from "@/src/components/section-page";

export default function BusinessPage() {
  return (
    <SectionPage
      title="AI in Business and Industry"
      subtitle="Organizations use AI to improve operations, customer experience, forecasting, and innovation."
      highlights={["Process automation", "Customer insights", "Operational efficiency"]}
      points={[
        "AI-powered analytics helps companies predict trends and make better strategic decisions.",
        "Businesses automate repetitive tasks in support, logistics, and reporting workflows.",
        "Smart recommendation systems improve customer engagement and personalized service.",
        "Companies that train employees in AI skills are better prepared for future competition.",
      ]}
    />
  );
}
