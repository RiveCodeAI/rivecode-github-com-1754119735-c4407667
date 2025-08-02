export const fadeIn = (duration: number = 300) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: duration / 1000 }
});

export const slideUp = (duration: number = 300, y: number = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration / 1000 }
});

export const staggerChildren = (staggerTime: number = 0.1) => ({
  animate: {
    transition: {
      staggerChildren: staggerTime
    }
  }
});

export const navDropdownAnimation = {
  initial: { opacity: 0, y: -4, display: 'none' },
  animate: { opacity: 1, y: 0, display: 'block' },
  exit: { opacity: 0, y: -4, transitionEnd: { display: 'none' } },
  transition: { duration: 0.2 }
};