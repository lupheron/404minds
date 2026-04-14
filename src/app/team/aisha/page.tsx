import { MemberPage } from "@/src/components/member-page";
import { teamMembers } from "@/src/lib/site-data";

export default function AishaPage() {
  const member = teamMembers.find((item) => item.name === "Aisha");

  if (!member) return null;

  return <MemberPage member={member} />;
}
