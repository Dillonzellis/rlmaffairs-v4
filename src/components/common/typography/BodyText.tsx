"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { scrollInVariants } from "@/lib/framerVariants";

interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
}

export const BodyText = ({ children, className }: BodyTextProps) => {
  return (
    <motion.p
      variants={scrollInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "font-light leading-7 tracking-tighter text-primary/70 md:text-lg md:leading-8",
        className,
      )}
    >
      {children}
    </motion.p>
  );
};
