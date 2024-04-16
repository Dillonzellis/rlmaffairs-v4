"use client";

import { motion } from "framer-motion";
import { scrollInVariants } from "@/lib/framerVariants";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type MainHeaderVariants = VariantProps<typeof MainHeaderVariants>;

interface MainHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    MainHeaderVariants {
  children: React.ReactNode;
  className?: string;
}

const MainHeaderVariants = cva(
  "font-serif text-7xl tracking-tighter lg:text-9xl",
  {
    variants: {
      size: {
        large: "font-serif text-7xl tracking-tighter lg:text-9xl",
        medium: "font-serif text-5xl tracking-tighter lg:text-7xl",
        small: "font-serif text-3xl tracking-tighter lg:text-5xl",
      },
    },
    defaultVariants: {
      size: "large",
    },
  },
);

export const MainHeader = ({ children, className, size }: MainHeaderProps) => {
  return (
    <motion.h2
      variants={scrollInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(MainHeaderVariants({ size }), className)}
    >
      {children}
    </motion.h2>
  );
};
