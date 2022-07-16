export interface DataIllu {
  s: number
  column: number
  row: number
  c: string
  main?: "bottom" | boolean
  position?: "right" | "left" | "top" | "bottom"
  animationCase?: string
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
    arrIllu: DataIllu[][][]
    colorIllu: string
  }
}
