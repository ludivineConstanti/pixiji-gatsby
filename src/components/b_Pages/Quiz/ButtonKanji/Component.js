// == Import npm
import React, { useState, useEffect, memo } from "react"
import PropTypes from "prop-types"
import axios from "axios"

// == Import
import { strokeWidth } from "src/styles/g"
import SButtonKanji, { SText } from "./SButtonKanji"
import { lQuiz, tIdQuiz } from "src/assets/querySelectors"

const sendToAPI = async (email, kanjiId, isCorrect) => {
  await axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `mutation setScore($email: String!, $kanjiId: String!, $isCorrect: Boolean!) {
        setScore(input: {email: $email, kanjiId: $kanjiId, isCorrect: $isCorrect}, ){
        success
        message
      }
    }
      `,
      variables: {
        email,
        kanjiId: `${kanjiId}`,
        isCorrect,
      },
    },
  })
}

const ButtonKanji = ({
  quizId,
  possibleAnswer,
  disabled,
  colorMain,
  colorMainD1,
  correctAnswer,
  cheating,
  email,
  answeredQuestionQuiz,
  answeredQuestion,
}) => {
  const isCorrect = possibleAnswer.id === correctAnswer.id

  const [wasClicked, setWasClicked] = useState(false)

  const [vButtonKanji, setVButtonKanji] = useState({
    initial: { scaleX: 0, x: 150 },
    animate: { scaleX: 1, x: 0 },
    exit: { scaleX: 0, x: -150 },
    whileHoverOn: { scale: 1.25, backgroundColor: colorMainD1 },
  })

  useEffect(() => {
    setVButtonKanji({
      ...vButtonKanji,
      // eslint-disable-next-line no-nested-ternary
      animate: !answeredQuestion
        ? {
            ...vButtonKanji.animate,
            scale: 1,
          }
        : !wasClicked && isCorrect && cheating
        ? {
            ...vButtonKanji.animate,
            scale: 0.6,
            border: `${strokeWidth} solid rgba(255, 255, 255, 1)`,
          }
        : // eslint-disable-next-line no-nested-ternary
        wasClicked && isCorrect
        ? {
            ...vButtonKanji.animate,
            scale: 1,
            border: `${strokeWidth * 2} solid rgba(255, 255, 255, 1)`,
          }
        : wasClicked
        ? {
            ...vButtonKanji.animate,
            scale: 1,
            border: `${strokeWidth} solid rgba(255, 255, 255, 0.25)`,
          }
        : {
            ...vButtonKanji.animate,
            scale: 0.6,
            border: `${strokeWidth} solid rgba(255, 255, 255, 0.25)`,
          },
    })
    if (!disabled) {
      setWasClicked(false)
    }
  }, [disabled])

  useEffect(() => {
    setVButtonKanji({
      ...vButtonKanji,
      whileHoverOn: {
        ...vButtonKanji.whileHoverOn,
        backgroundColor: colorMainD1,
      },
    })
  }, [colorMainD1])

  return (
    <SButtonKanji
      type="button"
      onClick={() => {
        answeredQuestionQuiz({ quizId, answer: possibleAnswer })
        setWasClicked(true)
        if (email) {
          sendToAPI(email, possibleAnswer.id, isCorrect)
        }
      }}
      disabled={disabled}
      s={{
        colorMain,
        isWrong: !isCorrect && cheating,
        cheating,
      }}
      variants={vButtonKanji}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={disabled ? "whileHoverOff" : "whileHoverOn"}
      aria-label={lQuiz.buttonKanji}
      data-testid={isCorrect ? tIdQuiz.rightAnswer : tIdQuiz.wrongAnswer}
    >
      <SText>{possibleAnswer.kanji}</SText>
    </SButtonKanji>
  )
}

ButtonKanji.propTypes = {
  quizId: PropTypes.number.isRequired,
  possibleAnswer: PropTypes.object.isRequired,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  colorMain: PropTypes.string.isRequired,
  colorMainD1: PropTypes.string.isRequired,
  correctAnswer: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  cheating: PropTypes.bool.isRequired,
  answeredQuestionQuiz: PropTypes.func.isRequired,
  answeredQuestion: PropTypes.bool.isRequired,
  email: PropTypes.string,
}

ButtonKanji.defaultProps = {
  email: "",
}

// == Export
export default memo(ButtonKanji)
