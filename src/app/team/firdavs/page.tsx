import { MemberPage } from "@/src/components/member-page";
import { teamMembers } from "@/src/lib/site-data";

export default function FirdavsPage() {
  const member = teamMembers.find((item) => item.name === "Firdavs");

  if (!member) return null;

  return <MemberPage member={member} />;
}
