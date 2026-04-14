import { MemberPage } from "@/src/components/member-page";
import { teamMembers } from "@/src/lib/site-data";

export default function RahimPage() {
  const member = teamMembers.find((item) => item.name === "Rahim");

  if (!member) return null;

  return <MemberPage member={member} />;
}
