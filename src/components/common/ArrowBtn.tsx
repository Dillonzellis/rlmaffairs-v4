"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { scrollInVariants } from "@/lib/framerVariants";
import { Icons } from "./Icons";

interface ArrowBtnProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const ArrowBtn = ({ href, children, className }: ArrowBtnProps) => {
  return (
    <motion.div
      variants={scrollInVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ x: 10, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
      className={cn(
        "group flex items-center gap-4 pb-8 md:gap-8 md:pb-0",
        className,
      )}
    >
      <Link
        href={href}
        className="flex items-center gap-4 group-hover:text-primary/80"
      >
        <Icons.rightArrow className="h-3.5 w-10 md:h-5 md:w-14" />
        <span className="text-xl font-light md:text-3xl">{children}</span>
      </Link>
    </motion.div>
  );
};
