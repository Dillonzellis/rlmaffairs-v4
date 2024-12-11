"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { scrollInVariants } from "@/lib/framerVariants";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define the allowed heading levels
type HeadingLevel = "h1" | "h2" | "h3";

type MainHeaderVariants = VariantProps<typeof MainHeaderVariants>;

// Update the props interface to extend HTMLMotionProps
interface MainHeaderProps
  extends HTMLMotionProps<"h1" | "h2" | "h3">,
    MainHeaderVariants {
  children: React.ReactNode;
  className?: string;
  as?: HeadingLevel;
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

export const MainHeader = ({
  children,
  className,
  size,
  as = "h2", // Default to h2 if not specified
  ...props
}: MainHeaderProps) => {
  // Create the motion component with proper typing
  const Component = motion[as] as typeof motion.h1;

  return (
    <Component
      variants={scrollInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(MainHeaderVariants({ size }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
