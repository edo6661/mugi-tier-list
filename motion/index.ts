export const basicTransition = {
  duration: 0.3,
  ease: "easeInOut",
  // type: "spring",
};

export const basicHiddenVars = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const useBasicVars = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: {
    ...basicTransition,
  },
};
