import React from "react"

import { SSubtitle, SText, SWrapperSection } from "../style"
import Separator from "../Separator"
import { SelectedKanji } from "../models"

interface MeaningsProps {
  selectedKanji: SelectedKanji
}

const Meanings = ({ selectedKanji }: MeaningsProps) => {
  return (
    <SWrapperSection>
      <SSubtitle>Meaning(s):</SSubtitle>
      <SText>
        {React.Children.toArray(
          selectedKanji.en.map((e: string, i: number) => (
            <>
              {e}
              {i !== selectedKanji.en.length - 1 ? <Separator /> : ""}
            </>
          ))
        )}
      </SText>
    </SWrapperSection>
  )
}

export default Meanings
