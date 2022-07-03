// Hover
export const buttonArrowHX = 8

interface ButtonArrowHTProps {
  repeat: number
  repeatType: "mirror" | "reverse" | "loop"
  mass: number
}

export const buttonArrowHT: ButtonArrowHTProps = {
  repeat: Infinity,
  repeatType: "mirror",
  mass: 2,
}

// used in TextWithTitle and
export const vBackgroundText = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.25 } },
  exit: { opacity: 0 },
}
