import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MenuLink from "../MenuLink"
import { useAppDispatch, useAppSelector } from "src/store"
import { updateEmail } from "src/reducer/slices/globalSlice"
import { resetStateQuiz } from "src/reducer/slices/quizSlice"
import SMenuLinks, { SContainer } from "./style"
import { AllQuizFragmentForQuizLinkProps } from "src/models/models"

interface QueryProps {
  allQuiz: AllQuizFragmentForQuizLinkProps
}

const MenuLinks = () => {
  const { allQuiz } = useStaticQuery<QueryProps>(graphql`
    query {
      allQuiz {
        nodes {
          quizId
          slug
        }
      }
    }
  `)
  const dispatch = useAppDispatch()

  const isLoggedIn = useAppSelector(state => !!state.global.email)
  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)
  const quizzesSlug = allQuiz.nodes.filter(
    data => data.quizId === currentQuizId
  )[0].slug

  return (
    <SMenuLinks>
      <SContainer>
        <MenuLink text="Home" path="/" />
        <MenuLink text="Read me" path="/read-me" />
        <MenuLink text="Quizzes" path={`/quizzes/${quizzesSlug}`} />
        <MenuLink text="About" path="/about" />
        {isLoggedIn ? (
          <>
            <MenuLink text="My profile" path="/my-profile" />
            <MenuLink
              text="Logout"
              onClick={() => {
                dispatch(updateEmail(""))
                dispatch(resetStateQuiz())
              }}
            />
          </>
        ) : (
          <>
            <MenuLink text="Register" path="/register" />
            <MenuLink text="Login" path="/login" />
          </>
        )}
      </SContainer>
    </SMenuLinks>
  )
}

export default MenuLinks
