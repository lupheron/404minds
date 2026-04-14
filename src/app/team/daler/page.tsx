import { MemberPage } from "@/src/components/member-page";
import { teamMembers } from "@/src/lib/site-data";

export default function DalerPage() {
  const member = teamMembers.find((item) => item.name === "Daler");

  if (!member) return null;

  return <MemberPage member={member} />;
}
