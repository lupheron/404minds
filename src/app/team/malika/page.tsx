import { MemberPage } from "@/src/components/member-page";
import { teamMembers } from "@/src/lib/site-data";

export default function MalikaPage() {
  const member = teamMembers.find((item) => item.name === "Malika");

  if (!member) return null;

  return <MemberPage member={member} />;
}
