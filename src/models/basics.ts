import {
  AnimatePresence as OriginalAnimatePresence,
  AnimatePresenceProps,
} from "framer-motion"

// solves typescript error
// Type '{ children: Element; exitBeforeEnter: true; }' is not assignable to type 'IntrinsicAttributes & AnimatePresenceProps'.
// Property 'children' does not exist on type 'IntrinsicAttributes & AnimatePresenceProps'

interface AnimatePresenceWithChildrenProps extends AnimatePresenceProps {
  children: React.ReactNode
}

export const AnimatePresence =
  OriginalAnimatePresence as React.FunctionComponent<AnimatePresenceWithChildrenProps>
