/**
 * GraphQL fragments that will be exposed and available in queries across all components
 * (no need to import them explicitly)
 *
 */

import { graphql } from "gatsby"

export const kanjisJsonFragmentForIllustrations = graphql`
  fragment kanjisJsonFragmentForIllustrations on KanjisJsonConnection {
    nodes {
      kanjiId
    }
  }
`

export const kanjisJsonFragmentToInitializeQuiz = graphql`
  fragment kanjisJsonFragmentToInitializeQuiz on KanjisJsonConnection {
    nodes {
      quizId
      kanjiId
    }
  }
`

export const quizFragmentForQuizLink = graphql`
  fragment quizFragmentForQuizLink on QuizConnection {
    nodes {
      quizId
      slug
    }
  }
`
