import { MemberPage } from "@/src/components/member-page";
import { teamMembers } from "@/src/lib/site-data";

export default function NurbekPage() {
  const member = teamMembers.find((item) => item.name === "Nurbek");

  if (!member) return null;

  return <MemberPage member={member} />;
}
