import { MemberPage } from "@/src/components/member-page";
import { teamMembers } from "@/src/lib/site-data";

export default function MubinabonuPage() {
  const member = teamMembers.find((item) => item.name === "Mubinabonu");

  if (!member) return null;

  return <MemberPage member={member} />;
}
