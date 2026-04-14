import { MemberPage } from "@/src/components/member-page";
import { teamMembers } from "@/src/lib/site-data";

export default function SukhrobPage() {
  const member = teamMembers.find((item) => item.name === "Sukhrob");

  if (!member) return null;

  return <MemberPage member={member} />;
}
