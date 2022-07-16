import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MenuLink from "../MenuLink"
import { useAppDispatch, useAppSelector } from "src/store"
import { updateEmail } from "src/reducer/slices/globalSlice"
import SMenuLinks, { SContainer } from "./style"
import { AllQuizFragmentForQuizLinkProps } from "src/models/models"
import { paths } from "src/models/constants"

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
        <MenuLink text="Home" path={paths.home} />
        <MenuLink text="Read me" path={paths.readMe} />
        <MenuLink text="Quizzes" path={`${paths.quizzes}/${quizzesSlug}`} />
        <MenuLink text="About" path={paths.about} />
        {isLoggedIn ? (
          <>
            <MenuLink text="My profile" path={paths.myProfile} />
            <MenuLink
              text="Logout"
              onClick={() => {
                dispatch(updateEmail(""))
              }}
            />
          </>
        ) : (
          <>
            <MenuLink text="Register" path={paths.register} />
            <MenuLink text="Login" path={paths.login} />
          </>
        )}
      </SContainer>
    </SMenuLinks>
  )
}

export default MenuLinks
