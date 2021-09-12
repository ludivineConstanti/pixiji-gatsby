// == Import npm
import React from "react"
import PropTypes from "prop-types"

// == Import
import MenuLink from "../MenuLink"
import SMenuLinks, { SContainer } from "./SMenuLinks"

const MenuLinks = ({ isLoggedIn, quizzesSlug, setIsLoggedOut }) => (
  <SMenuLinks>
    <SContainer>
      <MenuLink text="Home" path="/" />
      <MenuLink text="Read me" path="/read-me" />
      <MenuLink text="Quizzes" path={`/quizzes/${quizzesSlug}`} />
      <MenuLink text="About" path="/about" />
      {isLoggedIn ? (
        <MenuLink text="Logout" onClick={setIsLoggedOut} />
      ) : (
        <>
          <MenuLink text="Register" path="/register" />
          <MenuLink text="Login" path="/login" />
        </>
      )}
    </SContainer>
  </SMenuLinks>
)

MenuLinks.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  quizzesSlug: PropTypes.string.isRequired,
  setIsLoggedOut: PropTypes.func.isRequired,
}

// == Export
export default MenuLinks
