"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ path, children }) {
  const pathname = usePathname();

  return (
    <Link
      className={
        pathname === path ? " text-red-600 text-md" : "text-gray-600 text-md"
      }
      href={path}
    >
      {children}
    </Link>
  );
}
