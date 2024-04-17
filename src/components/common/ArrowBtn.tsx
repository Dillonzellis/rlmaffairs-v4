"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { scrollInVariants, btnArrowVariants } from "@/lib/framerVariants";
import { Icons } from "./Icons";

interface ArrowBtnProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  targetBlank?: boolean;
}

export const ArrowBtn = ({
  href,
  children,
  className,
  targetBlank,
}: ArrowBtnProps) => {
  return (
    <motion.div
      variants={scrollInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "group flex items-center gap-4 pb-8 md:gap-8 md:pb-0",
        className,
      )}
    >
      <motion.div variants={btnArrowVariants} whileHover="hover" whileTap="tap">
        {targetBlank ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group-hover:text-primary/80"
          >
            <Icons.rightArrow className="h-3.5 w-10 md:h-5 md:w-14" />
            <span className="text-xl font-light md:text-3xl">{children}</span>
          </a>
        ) : (
          <Link
            href={href}
            className="flex items-center gap-4 group-hover:text-primary/80"
          >
            <Icons.rightArrow className="h-3.5 w-10 md:h-5 md:w-14" />
            <span className="text-xl font-light md:text-3xl">{children}</span>
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
};
