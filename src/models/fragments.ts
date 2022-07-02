/**
 * GraphQL fragments that will be exposed and available in queries across all components
 * (no need to import them explicitly)
 *
 */

import { graphql } from "gatsby"

export const kanjisJsonFragment = graphql`
  fragment kanjisJsonFragment on KanjisJsonConnection {
    nodes {
      kanjiId
    }
  }
`

export const quizFragment = graphql`
  fragment quizFragment on QuizConnection {
    nodes {
      quizId
      slug
    }
  }
`
