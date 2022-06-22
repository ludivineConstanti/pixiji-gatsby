import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useAppSelector, useAppDispatch } from "src/store"
import { MenuOrCloseIcon, LeftPopUp } from "src/components"
import PopUp from "./PopUp"
import { updateIdSelectedKanji } from "src/reducer/slices/globalSlice"
import InterrogationMark from "./InterrogationMark"
import Statistics from "./Statistics"
import Meanings from "./Meanings"
import UseCases from "./UseCases"
import ScrollDownArrow from "./ScrollDownArrow"
import { Text, WrapperSection, SmallWithMargin, Kanji } from "./style"
import { SelectedKanji } from "./models"

const KanjiDetails = () => {
  const { allKanjisJson } = useStaticQuery(graphql`
    query {
      allKanjisJson {
        nodes {
          kanjiId
          kana
          kanaEn
          kanji
          en
          onyomi
          onyomiEn
          kunyomi
          kunyomiEn
          onyomiCompounds {
            en
            kana
            kanaEn
            kanji
          }
        }
      }
    }
  `)

  const dispatch = useAppDispatch()

  const [onyomiExplanationIsVisible, setOnyomiExplanationIsVisible] =
    useState(false)
  const [kunyomiExplanationIsVisible, setKunyomiExplanationIsVisible] =
    useState(false)
  const [scrollDownIsVisible, setScrollDownIsVisible] = useState(true)
  const colorMain = useAppSelector(state => state.global.color.main)
  const idSelectedKanji = useAppSelector(state => state.global.idSelectedKanji)

  const selectedKanji = allKanjisJson.nodes.find((kanji: SelectedKanji) => {
    return +kanji.kanjiId === +idSelectedKanji
  })

  useEffect(() => {
    setScrollDownIsVisible(true)
  }, [selectedKanji])

  /* if (ref && window) {
    console.log(ref.scrollTop, ref.scrollHeight)
    ref.scrollTop = 100
    // window.scrollTo({ top: ref.scrollHeight })
    // ref.scrollTop(() => ref.scrollHeight)
  } */

  return (
    <LeftPopUp
      isShowing={selectedKanji ? true : false}
      onWheel={() => {
        if (scrollDownIsVisible) {
          setScrollDownIsVisible(false)
        }
      }}
    >
      {selectedKanji && (
        <div style={{ color: colorMain }}>
          <MenuOrCloseIcon
            onClick={() => {
              dispatch(updateIdSelectedKanji(false))
            }}
            showsCloseButton={selectedKanji ? true : false}
          />
          <Kanji>
            <Text style={{ marginBottom: "6px" }}>{selectedKanji.kanaEn}</Text>
            {selectedKanji.kanji}
            <Text style={{ marginTop: "6px" }}>{selectedKanji.en[0]}</Text>
          </Kanji>
          <Meanings selectedKanji={selectedKanji} />
          {selectedKanji.onyomi && (
            <WrapperSection>
              <PopUp
                text={`On'yomi is the Japanese pronounciation that derives from the Chinese
          way of pronouncing the Kanji ("yomi" means reading in Japanese). It is
          generally used for Japanese words that are made of kanjis combination,
          (look below, or at other kanjis for examples of kanjis combinations).`}
                isVisible={onyomiExplanationIsVisible}
              />
              <InterrogationMark
                setIsVisible={setOnyomiExplanationIsVisible}
                text="On'yomi:"
              />
              <Text>
                {selectedKanji.onyomi}
                <SmallWithMargin>{selectedKanji.onyomiEn}</SmallWithMargin>
              </Text>
            </WrapperSection>
          )}
          {selectedKanji.kunyomi && (
            <WrapperSection>
              <PopUp
                text={`Kun'yomi is the Kanji's pronounciation based on the Japanese language
            ("yomi" means reading in Japanese). It is generally used when a kanji
            is written individually (like above).`}
                isVisible={kunyomiExplanationIsVisible}
              />
              <InterrogationMark
                setIsVisible={setKunyomiExplanationIsVisible}
                text="Kun'yomi:"
              />
              <Text>
                {selectedKanji.kunyomi}
                <SmallWithMargin>{selectedKanji.kunyomiEn}</SmallWithMargin>
              </Text>
            </WrapperSection>
          )}
          <UseCases selectedKanji={selectedKanji} />
          <Statistics />
          <ScrollDownArrow
            isVisible={scrollDownIsVisible}
            onClick={() => console.log("clicked")}
          />
        </div>
      )}
    </LeftPopUp>
  )
}

export default KanjiDetails
