"use client";

import { motion } from "framer-motion";
import { scrollInVariants } from "@/lib/framerVariants";

interface MainHeaderProps {
  children: React.ReactNode;
}

export const MainHeader = ({ children }: MainHeaderProps) => {
  return (
    <motion.h2
      variants={scrollInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="font-serif text-7xl tracking-tighter lg:text-9xl"
    >
      {children}
    </motion.h2>
  );
};
