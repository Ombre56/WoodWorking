export const fromLeftAnimation = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  show: {
    x: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    },
  },
};
export const fromRightAnimation = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  show: {
    x: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    },
  },
};

export const scaleAnimation = {
  hidden: {
    scale: 2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1
    }
  },
};

export const navbarAnimation = {
  hidden: {
    y: -100,
  },
  show: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    },
  },
};

export const fromUpAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    },
  },
};

export const fromDownAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    },
  },
};