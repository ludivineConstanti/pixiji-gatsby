import React from "react"
import styled from "styled-components"

import { useAppSelector } from "src/store"
import Separator from "../Separator"
import { SelectedKanji } from "../models"
import { Text, Subtitle, WrapperSection, Small, Example } from "../style"

const Kana = styled(Small)`
  margin: 0 8px;
`

const KanaEn = styled(Small)`
  margin-right: 16px;
`

const TextInline = styled(Text)`
  display: inline-block;
`

const Lighter = styled.span<{ color: string }>`
  color: ${p => p.color};
`

interface UseCasesProps {
  selectedKanji: SelectedKanji
}

const UseCases = ({ selectedKanji }: UseCasesProps) => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)

  return (
    <WrapperSection>
      <Subtitle>Use cases:</Subtitle>
      <ul>
        {React.Children.toArray(
          selectedKanji.onyomiCompounds.map(e => (
            <Example>
              {e.kanji}
              <Kana>{e.kana}</Kana>
              <KanaEn>
                <Lighter color={colorMainL1}>{e.kanaEn}</Lighter>
              </KanaEn>
              <TextInline>
                {" "}
                {React.Children.toArray(
                  e.en.map((text: string, i: number) => (
                    <>
                      <Small>{text}</Small>
                      {i !== e.en.length - 1 ? <Separator /> : ""}
                    </>
                  ))
                )}
              </TextInline>
            </Example>
          ))
        )}
      </ul>
    </WrapperSection>
  )
}

export default UseCases
