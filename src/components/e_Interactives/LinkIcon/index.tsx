// == Import npm
import React from "react"

import SLinkIcon, { vLinkIcon } from "./SLinkIcon"

interface LinkIconProps {
  path: string
  columnStart: number
  children: JSX.Element | JSX.Element[]
}

const LinkIcon = ({ path, columnStart, children }: LinkIconProps) => (
  <SLinkIcon
    href={path}
    target="_blank"
    rel="noreferrer"
    s={{ columnStart }}
    variants={vLinkIcon}
    initial="initial"
    animate="animate"
    exit="exit"
    whileHover="whileHover"
  >
    {children}
  </SLinkIcon>
)

// == Export
export default LinkIcon
