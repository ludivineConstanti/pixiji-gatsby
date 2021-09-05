import * as React from "react"
import { graphql } from "gatsby"

import Layout from "src/components/a_Root/Layout"
import Quiz from "src/components/b_Pages/Quiz"
import Seo from "src/components/seo"

// <Quizzes currentQuiz={params.slug} />
const IndexPage = ({ data }) => {
  return (
    <Layout isPlaying={true}>
      <Seo title={data.quiz.slug} />
      <Quiz
        currentQuiz={{
          id: data.quiz.meta.id,
          title: data.quiz.title,
          slug: data.quiz.slug,
        }}
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($id: String!) {
    quiz(id: { eq: $id }) {
      slug
      title
      meta {
        id
      }
    }
  }
`
