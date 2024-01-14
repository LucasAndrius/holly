import Link from "next/link";
import { Instagram } from "./svg";

export const Social = () => {
  return (
    <div>
      <Link href="https://www.instagram.com/hollyagencia/" target="_blank">
        <Instagram className="size-6" />
      </Link>
    </div>
  );
};
