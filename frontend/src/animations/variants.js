// Framer Motion animation variants — reusable across all pages
export const fadeInUp = {
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0,  filter: 'blur(0px)' },
  exit:    { opacity: 0, y: -16, filter: 'blur(4px)' },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.92, filter: 'blur(8px)' },
  animate: { opacity: 1, scale: 1,    filter: 'blur(0px)' },
  exit:    { opacity: 0, scale: 0.96, filter: 'blur(4px)' },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: -40 },
};

export const slideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: 40 },
};

export const slideInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: 20 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0,  filter: 'blur(0px)' },
};

export const cardHover = {
  whileHover: {
    y: -4,
    scale: 1.01,
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  },
  whileTap: { scale: 0.98 },
};

export const buttonTap = {
  whileTap: { scale: 0.96 },
  whileHover: { scale: 1.02 },
};

export const modalVariants = {
  initial: { opacity: 0, scale: 0.88, y: 30, filter: 'blur(8px)' },
  animate: { opacity: 1, scale: 1,    y: 0,  filter: 'blur(0px)', transition: { type: 'spring', stiffness: 300, damping: 22 } },
  exit:    { opacity: 0, scale: 0.92, y: -20, filter: 'blur(4px)', transition: { duration: 0.2 } },
};

export const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
};

export const sidebarVariants = {
  open:   { width: '240px', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  closed: { width: '68px',  transition: { type: 'spring', stiffness: 300, damping: 30 } },
};

export const toastVariants = {
  initial: { opacity: 0, x: 80,  scale: 0.9 },
  animate: { opacity: 1, x: 0,   scale: 1, transition: { type: 'spring', stiffness: 400, damping: 25 } },
  exit:    { opacity: 0, x: 80,  scale: 0.9, transition: { duration: 0.2 } },
};

export const pageTransition = {
  initial: { opacity: 0, y: 16, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] } },
  exit:    { opacity: 0, y: -16, filter: 'blur(6px)', transition: { duration: 0.25 } },
};

export const easing = {
  spring:   { type: 'spring', stiffness: 300, damping: 24 },
  smooth:   [0.25, 1, 0.5, 1],
  bounce:   { type: 'spring', stiffness: 400, damping: 17 },
};
