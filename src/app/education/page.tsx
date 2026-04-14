import { SectionPage } from "@/src/components/section-page";

export default function EducationPage() {
  return (
    <SectionPage
      title="AI in Education"
      subtitle="AI gives students personalized learning paths, fast feedback, and new study tools when used ethically."
      highlights={["Adaptive learning", "Smart tutoring", "Teacher support"]}
      points={[
        "AI tutors can adjust explanations to individual student needs and learning pace.",
        "Teachers can use AI to automate grading support and focus more on mentorship and discussion.",
        "Students should use AI as a learning assistant, not as a shortcut to avoid understanding concepts.",
        "Universities need clear policies for ethical AI use in assignments, projects, and research.",
      ]}
    />
  );
}
