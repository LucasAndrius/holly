import Link from "next/link";

export default function BackButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Link href="./">{children}</Link>;
}
