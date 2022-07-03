/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// animate on exit => wrapPageElement
// https://janessagarrow.com/blog/gatsby-framer-motion-page-transitions/

import React from "react"
import ResizeObserver from "resize-observer-polyfill"
import { AnimatePresence } from "framer-motion"
import { Provider } from "react-redux"

import { store } from "src/store"

if (window) {
  if (!window.ResizeObserver) {
    window.ResizeObserver = ResizeObserver
  }
}

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter={true}>{element}</AnimatePresence>
)

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
