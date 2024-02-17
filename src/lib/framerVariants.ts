export const scrollInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const btnArrowVariants = {
  hover: { x: 10, transition: { duration: 0.3 } },
  tap: { scale: 0.95, transition: { duration: 0.3 } },
};
