import React from "react"

import { Subtitle, Text, WrapperSection } from "../style"
import Separator from "../Separator"
import { SelectedKanji } from "../models"

interface MeaningsProps {
  selectedKanji: SelectedKanji
}

const Meanings = ({ selectedKanji }: MeaningsProps) => {
  return (
    <WrapperSection>
      <Subtitle>Meaning(s):</Subtitle>
      <Text>
        {React.Children.toArray(
          selectedKanji.en.map((e: string, i: number) => (
            <>
              {e}
              {i !== selectedKanji.en.length - 1 ? <Separator /> : ""}
            </>
          ))
        )}
      </Text>
    </WrapperSection>
  )
}

export default Meanings
