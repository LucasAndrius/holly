import Link from "next/link";
import { Instagram, Whatsapp } from "./svg";

export const Social = () => {
  return (
    <div className="flex gap-4">
      <Link href="https://www.instagram.com/hollyagencia/" target="_blank">
        <Instagram className="size-6" />
      </Link>
      <Link
        href="https://whatsa.me/5553999702452/?t=Ol%C3%A1,%20gostaria%20de%20realizar%20um%20or%C3%A7amento."
        target="_blank"
      >
        <Whatsapp className="size-6" />
      </Link>
    </div>
  );
};
