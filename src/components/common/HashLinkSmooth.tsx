"use client";

import Link from "next/link";

type HashLinkSmoothProps = {
  href: string;
  children: React.ReactNode;
};

export default function HashLinkSmooth({
  children,
  href,
}: HashLinkSmoothProps) {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const hash = href?.substring(1);
    const el = document.getElementById(hash);

    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Link
      href={href}
      scroll={false}
      onClick={smoothScroll}
      className="group-hover:text-background/90"
    >
      {children}
    </Link>
  );
}
