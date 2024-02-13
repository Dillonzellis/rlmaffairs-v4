"use client";

import { scrollInVariants } from "@/lib/framerVariants";
import { motion } from "framer-motion";

interface SubHeaderProps {
  children: React.ReactNode;
}

export const SubHeader = ({ children }: SubHeaderProps) => {
  return (
    <motion.div
      variants={scrollInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-sm font-light italic tracking-tighter text-primary/70"
    >
      {children}
    </motion.div>
  );
};
