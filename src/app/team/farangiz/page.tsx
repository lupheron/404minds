import { MemberPage } from "@/src/components/member-page";
import { teamMembers } from "@/src/lib/site-data";

export default function FarangizPage() {
  const member = teamMembers.find((item) => item.name === "Farangiz");

  if (!member) return null;

  return <MemberPage member={member} />;
}
