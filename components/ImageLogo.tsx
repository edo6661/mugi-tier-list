"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ImageLogo = () => {
  const pathName = usePathname();

  const rootPathname =
    pathName.includes("/sign-in") || pathName.includes("/sign-up");
  const imgProp = rootPathname ? 80 : 33;

  return (
    <div
      className={`hovered rounded-full bg-white p-2 shadow-sm shadow-muted-foreground dark:shadow-white `}
    >
      <Link href="/" className="outline-none">
        <Image src="/next.svg" alt="logo" height={imgProp} width={imgProp} />
      </Link>
    </div>
  );
};

export default ImageLogo;
