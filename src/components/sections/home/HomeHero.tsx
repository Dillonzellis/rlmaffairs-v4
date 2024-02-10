"use client";

import { Icons } from "@/components/common/Icons";
import Image from "next/image";
import { NavMenu } from "@/components/layout/header/NavMenu";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroNav } from "@/components/common/HeroNav";

export const HomeHero = () => {
  return (
    <section>
      <Image
        src="/hero-placeholder.jpg"
        alt=""
        height={834}
        width={1280}
        className="h-dvh w-full object-cover"
      />
      <NavMenu />
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
          <Icons.downArrow className="h-14 w-14" />
        </Link>
      </motion.div>
      <HeroNav />
    </section>
  );
};
