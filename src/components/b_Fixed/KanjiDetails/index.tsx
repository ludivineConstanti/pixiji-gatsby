import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { useAppSelector, useAppDispatch } from "src/store"
import { MenuOrCloseIcon, LeftPopUp } from "src/components"
import { tMenuSettingsTitle, tText, tbInTSmallFontSize } from "src/styles/typo"
import { sidePadding } from "./basics"
import PopUp from "./PopUp"
import { updateIdSelectedKanji } from "src/reducer/slices/globalSlice"

const Kanji = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(68px + 2vw);
  text-align: center;
  flex-direction: column;
  grid-column: 1 / -1;
  margin: 60px 0;
`

const InterrogationMarkWrapper = styled.div`
  height: 16px;
  width: 16px;
  background-color: black;
  color: white;
  text-align: center;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  letter-spacing: 0;
`

const Subtitle = styled.h2`
  ${tMenuSettingsTitle}
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`

const Text = styled.p`
  ${tText}
`

const TextInline = styled(Text)`
  display: inline-block;
`

const Small = styled.span`
  font-size: ${tbInTSmallFontSize};
  letter-spacing: 1px;
  text-transform: uppercase;
`

const SmallWithMargin = styled(Small)`
  margin: 0 16px;
`

const Lighter = styled.span<{ color: string }>`
  color: ${p => p.color};
`

const WrapperSection = styled.div`
  padding: ${sidePadding}px;
  position: relative;
`

const Example = styled.li`
  margin: 16px 0;
`

const Statistics = styled.div<{ backgroundColor: string }>`
  background-color: ${p => p.backgroundColor};
  color: white;
  width: 100%;
  padding: ${sidePadding}px;
`

const Slash = styled.span`
  margin: 0 6px;
`

interface InterrogationMarkProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  text: string
}

const InterrogationMark = ({ setIsVisible, text }: InterrogationMarkProps) => (
  <Subtitle
    onMouseEnter={() => setIsVisible(true)}
    onMouseLeave={() => setIsVisible(false)}
  >
    <InterrogationMarkWrapper>?</InterrogationMarkWrapper>
    {text}
  </Subtitle>
)

const Separator = () => <Slash>-</Slash>

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
        }
      }
    }
  `)

  const dispatch = useAppDispatch()

  const [onyomiExplanationIsVisible, setOnyomiExplanationIsVisible] =
    useState(false)
  const [kunyomiExplanationIsVisible, setKunyomiExplanationIsVisible] =
    useState(false)
  const colorMain = useAppSelector(state => state.global.color.main)
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  const idSelectedKanji = useAppSelector(state => state.global.idSelectedKanji)

  const selectedKanji = allKanjisJson.nodes.find(kanji => {
    return +kanji.kanjiId === +idSelectedKanji
  })

  return (
    <LeftPopUp isShowing={selectedKanji ? true : false}>
      {selectedKanji && (
        <div style={{ color: colorMain }}>
          <MenuOrCloseIcon
            onClick={() => {
              dispatch(updateIdSelectedKanji(false))
            }}
            showsCloseButton={selectedKanji ? true : false}
          />
          <Kanji>
            <Text>{selectedKanji.kanaEn}</Text>
            {selectedKanji.kanji}
            <Text>{selectedKanji.en}</Text>
          </Kanji>
          <WrapperSection>
            <Subtitle>Meanings:</Subtitle>
            <Text>
              One <Separator /> best <Separator /> first <Separator /> foremost{" "}
              <Separator /> beginning <Separator /> start
            </Text>
          </WrapperSection>
          <WrapperSection>
            {onyomiExplanationIsVisible && (
              <PopUp
                text={`On'yomi is the Japanese pronounciation that derives from the Chinese
          way of pronouncing the Kanji ("yomi" means reading in Japanese). It is
          generally used for Japanese words that are made of kanjis combination,
          (look below, or at other kanjis for examples of kanjis combinations).`}
              />
            )}
            <InterrogationMark
              setIsVisible={setOnyomiExplanationIsVisible}
              text="On'yomi:"
            />
            <Text>
              いち <SmallWithMargin>ichi</SmallWithMargin>
            </Text>
          </WrapperSection>
          <WrapperSection>
            {kunyomiExplanationIsVisible && (
              <PopUp
                text={`Kun'yomi is the Kanji's pronounciation based on the Japanese language
            ("yomi" means reading in Japanese). It is generally used when a kanji
            is written individually (like above).`}
              />
            )}
            <InterrogationMark
              setIsVisible={setKunyomiExplanationIsVisible}
              text="Kun'yomi:"
            />
            <Text>
              イチ <SmallWithMargin>ichi</SmallWithMargin>
            </Text>
          </WrapperSection>
          <WrapperSection>
            <Subtitle>Use cases:</Subtitle>
            <ul>
              <Example>
                一 位{" "}
                <SmallWithMargin>
                  イチイ <Lighter color={colorMainL1}>(ichii)</Lighter>
                </SmallWithMargin>
                <TextInline> first place</TextInline>
              </Example>
              <Example>
                均 一 <SmallWithMargin>キンイツ (KIINIITSU)</SmallWithMargin>
                <TextInline>uniformity, equality</TextInline>
              </Example>
              <Example>
                １ 対 １{" "}
                <SmallWithMargin>イチタイイチ (ICHITAIICHI)</SmallWithMargin>
                <TextInline> one-on-one</TextInline>
              </Example>{" "}
              <Example>
                一 <SmallWithMargin>イツ</SmallWithMargin>{" "}
                <TextInline>one, same (mind, path, etc.)</TextInline>
              </Example>
              <Example>
                一 に <SmallWithMargin>イツニ</SmallWithMargin>{" "}
                <TextInline>solely, entirely, only</TextInline>
              </Example>
              <Example>
                均 一 <SmallWithMargin>キンイツ</SmallWithMargin>{" "}
                <TextInline>uniformity, equality</TextInline>
              </Example>
              <Example>
                画 一 <SmallWithMargin>カクイツ</SmallWithMargin>{" "}
                <TextInline>uniformity, standardization</TextInline>
              </Example>
            </ul>
          </WrapperSection>
          <Statistics backgroundColor={colorMainL1}>
            <Subtitle>Statistics:</Subtitle>
            <Text style={{ display: "block" }}>This month: </Text>
            <Text>
              <Small>Answered correctly:</Small> 2 times
            </Text>
            <Text>
              <Small>Answered wrong:</Small> 2 times
            </Text>
            <Text>
              50% <Small>Success rate</Small>
            </Text>
          </Statistics>
        </div>
      )}
    </LeftPopUp>
  )
}

export default KanjiDetails
