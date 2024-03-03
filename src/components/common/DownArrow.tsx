"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Icons } from "./Icons";

export const DownArrow = () => {
  return (
    <motion.div
      className="absolute bottom-8 right-2.5 text-white md:right-7"
      animate={{
        y: [0, -10, 0],
        transition: { duration: 2, repeat: Infinity },
      }}
      whileHover={{ scale: 1.5, transition: { duration: 0.3 } }}
      whileTap={{ scale: 1.2, transition: { duration: 0.3 } }}
    >
      <Link href="/#venue">
        <Icons.downArrow className="text-backround h-14 w-14" />
      </Link>
    </motion.div>
  );
};
