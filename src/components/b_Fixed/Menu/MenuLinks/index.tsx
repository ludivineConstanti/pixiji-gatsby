import React from "react"

import MenuLink from "../MenuLink"
import { useAppDispatch, useAppSelector } from "src/store"
import { updateEmail } from "src/reducer/slices/globalSlice"
import { resetStateQuiz } from "src/reducer/slices/quizSlice"
import SMenuLinks, { SContainer } from "./style"

const MenuLinks = () => {
  const dispatch = useAppDispatch()

  const isLoggedIn = useAppSelector(state => !!state.global.email)
  const quizzesSlug = useAppSelector(state => state.quiz.currentSlug)

  return (
    <SMenuLinks>
      <SContainer>
        <MenuLink text="Home" path="/" />
        <MenuLink text="Read me" path="/read-me" />
        <MenuLink text="Quizzes" path={`/quizzes/${quizzesSlug}`} />
        <MenuLink text="About" path="/about" />
        {isLoggedIn ? (
          <MenuLink
            text="Logout"
            onClick={() => {
              dispatch(updateEmail(""))
              dispatch(resetStateQuiz())
            }}
          />
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
