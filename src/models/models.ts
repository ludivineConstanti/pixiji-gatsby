export interface DataIlluRawProps {
  size: number
  column: number
  row: number
  color: string
  main?: true
  position?: "right" | "left" | "top" | "bottom"
}

export interface DataIlluProps extends DataIlluRawProps {
  indexIllu: number
  indexKanjiGroup: number
}

export interface IlluQueryProps {
  nodes: DataIlluProps[]
}

export interface KanjisJsonFragmentForIllustrationsProps {
  nodes: {
    kanjiId: number
  }[]
}

export interface KanjisJsonFragmentToInitializeQuiz {
  nodes: {
    kanjiId: number
    quizId: number
  }[]
}

export interface AllQuizFragmentForQuizLinkProps {
  nodes: {
    quizId: number
    slug: string
  }[]
}

export interface IlluProps {
  kanjisArr?: number[]
  renderIllu: (
    data: JSX.Element[][],
    kanjis: number,
    arrNumKanjis: number[]
  ) => JSX.Element
  arrDataIllu: {
    arrIllu: DataIlluProps[]
    colorIllu: string
  }
}
