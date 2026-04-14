import { SectionPage } from "@/src/components/section-page";

export default function HealthcarePage() {
  return (
    <SectionPage
      title="AI in Healthcare"
      subtitle="AI supports doctors by improving diagnosis speed, prediction, and patient monitoring."
      highlights={["Medical imaging", "Predictive analytics", "Remote monitoring"]}
      points={[
        "Machine learning models can help detect patterns in X-rays and scans faster than manual review alone.",
        "Hospitals use predictive systems to identify high-risk patients and optimize treatment plans.",
        "Wearables and AI analytics can monitor patient health signals in real time.",
        "Healthcare AI must prioritize accuracy, explainability, and strict patient data privacy.",
      ]}
    />
  );
}
