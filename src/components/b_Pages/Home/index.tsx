import React from "react"

import { useAppSelector } from "src/store"
import PageWithText from "src/components/c_Partials/PageWithText"

const Home = () => {
  const kanjisArr = useAppSelector(state => state.kanjisArr.home)

  return (
    <>
      <PageWithText
        illu={{ useCase: "home", kanjisArr }}
        textWithTitle={{
          title: "Pixiji",
          text: [
            "This website is born from the thought that kanjis (Chinese characters that are used in the Japanese writing system) would work well with pixel art.",
          ],
        }}
        buttonBig={{ text: "next", path: "/read-me" }}
      />
    </>
  )
}

export default Home
