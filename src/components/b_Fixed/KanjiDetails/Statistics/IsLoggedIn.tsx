import React, { useState } from "react"

import { useAppSelector } from "src/store"
import { SText } from "../style"
import { SWrapperText, SOtherOptions } from "./style"
import PopUpButton from "src/components/e_Interactives/PopUpButton"
import { getScore } from "src/helpers/backEnd/scores"
import HasScoreData from "./HasScoreData"
import { dateToNumberArray } from "./util"

const timeOptions = [
  {
    text: "today",
    filteringFunction: (dates: number[][], currentDate: number[]) =>
      dates.filter(
        e =>
          e[0] === currentDate[0] &&
          e[1] === currentDate[1] &&
          e[2] === currentDate[2]
      ),
  },
  {
    text: "this month",
    filteringFunction: (dates: number[][], currentDate: number[]) =>
      dates.filter(e => e[0] === currentDate[0] && e[1] === currentDate[1]),
  },
  {
    text: "this year",
    filteringFunction: (dates: number[][], currentDate: number[]) =>
      dates.filter(e => e[0] === currentDate[0]),
  },
  {
    text: "all time",
    filteringFunction: (dates: number[][]) => dates,
  },
]

interface CurrentScoreDataDefaultProps {
  state: "loading"
}

interface CurrentScoreDataProps {
  state: "success"
  answeredRight: number[][]
  answeredWrong: number[][]
}

const IsLoggedIn = () => {
  const email = useAppSelector(state => state.global.email)
  const kanjiId = useAppSelector(state => state.global.idSelectedKanji)

  const [otherOptionsAreVisible, setOtherOptionsAreVisible] = useState(false)
  const [currentTimeOption, setCurrentTimeOption] = useState(
    timeOptions[timeOptions.length - 1]
  )
  const [currentScoreData, setCurrentScoreData] = useState<
    CurrentScoreDataDefaultProps | CurrentScoreDataProps
  >({ state: "loading" })

  getScore({ email, kanjiId: `${kanjiId}` }).then(response => {
    if (response.data && response.data.data && response.data.data.getScore) {
      const { answeredRight, answeredWrong } =
        response.data.data.getScore.infosAnswer
      setCurrentScoreData({
        state: "success",
        answeredRight: answeredRight.map((e: string) => dateToNumberArray(e)),
        answeredWrong: answeredWrong.map((e: string) => dateToNumberArray(e)),
      })
    }
  })

  return (
    <>
      {currentScoreData.state === "success" &&
        (currentScoreData.answeredRight.length !== 0 ||
          currentScoreData.answeredWrong.length !== 0) && (
          <>
            {otherOptionsAreVisible && (
              <SOtherOptions>
                {timeOptions
                  .filter(e => e !== currentTimeOption)
                  .map(e => (
                    <PopUpButton
                      text={e.text}
                      key={`StatisticTimeOption${e.text}`}
                      onClick={() => {
                        setCurrentTimeOption(e)
                        setOtherOptionsAreVisible(false)
                      }}
                    />
                  ))}
              </SOtherOptions>
            )}
            <PopUpButton
              text={currentTimeOption.text}
              dropdownState={otherOptionsAreVisible ? "up" : "down"}
              onClick={() => {
                setOtherOptionsAreVisible(v => !v)
              }}
            />
          </>
        )}
      <SWrapperText>
        {currentScoreData.state === "loading" ? (
          <SText>Loading...</SText>
        ) : (
          <HasScoreData
            answeredRight={currentScoreData.answeredRight}
            answeredWrong={currentScoreData.answeredWrong}
            filteringFunction={currentTimeOption.filteringFunction}
            selectedTime={currentTimeOption.text}
          />
        )}
      </SWrapperText>
    </>
  )
}

export default IsLoggedIn

{
  /*  */
}
