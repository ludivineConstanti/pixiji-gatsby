import * as React from "react"
import { graphql } from "gatsby"

import Layout from "src/components/a_Root/Layout"
import Quizzes from "src/components/b_Pages/Quizzes"
import Seo from "src/components/seo"
import { QuizIdOptions } from "src/models/models"

interface QuizPageProps {
  data: {
    quiz: {
      slug: string
      title: string
      quizId: QuizIdOptions
    }
  }
}

const QuizzesPage = ({ data }: QuizPageProps) => {
  return (
    <Layout>
      <Seo title={data.quiz.slug} />
      <Quizzes
        currentQuiz={{
          id: data.quiz.quizId,
          title: data.quiz.title,
          slug: data.quiz.slug,
        }}
      />
    </Layout>
  )
}

export default QuizzesPage

export const query = graphql`
  query ($id: String!) {
    quiz(id: { eq: $id }) {
      slug
      title
      quizId
    }
  }
`
