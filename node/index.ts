import { writeFileSync } from "fs"
import { illuColors } from "../src/models/constants"

import { DataIlluProps, DataIlluRawProps } from "../src/models/models"
import cloudDragon from "./data/cloudDragon"
import craneSunset from "./data/craneSunset"
import kaguyaHime from "./data/kaguyaHime"
import kodomoNoHi from "./data/kodomoNoHi"
import rabbitOnMoon from "./data/rabbitOnMoon"
import redPanda from "./data/redPanda"
import sakuraBirds from "./data/sakuraBirds"
import sakuraDeer from "./data/sakuraDeer"
import seaTurtles from "./data/seaTurtles"
import snowMonkeys from "./data/snowMonkeys"

const flattenIllu = (illu: DataIlluRawProps[][][]) => {
  let illustrationElementArr: DataIlluProps[] = []
  let kanjiCounter = 0

  illu.forEach((illustrationElement, illustrationElementIndex: number) => {
    let KanjiGroupArr: DataIlluProps[] = []
    illustrationElement.forEach(kanjiGroup => {
      let increasedKanjiCounter = false
      kanjiGroup.forEach(square => {
        KanjiGroupArr = [
          ...KanjiGroupArr,
          {
            ...square,
            indexIllu: illustrationElementIndex,
            indexKanjiGroup: increasedKanjiCounter
              ? kanjiCounter - 1
              : kanjiCounter,
          },
        ]

        if (square.main === true) {
          kanjiCounter++
          increasedKanjiCounter = true
        }
      })
    })
    illustrationElementArr = [...illustrationElementArr, ...KanjiGroupArr]
  })

  return illustrationElementArr
}

const main = () => {
  writeFileSync(
    "../src/content/json/cloudDragon.json",
    JSON.stringify(flattenIllu(cloudDragon))
  )
  writeFileSync(
    "../src/content/json/kaguyaHime.json",
    JSON.stringify(flattenIllu(kaguyaHime))
  )
  writeFileSync(
    "../src/content/json/kodomoNoHi.json",
    JSON.stringify(flattenIllu(kodomoNoHi))
  )
  writeFileSync(
    "../src/content/json/rabbitOnMoon.json",
    JSON.stringify(flattenIllu(rabbitOnMoon))
  )
  writeFileSync(
    "../src/content/json/redPanda.json",
    JSON.stringify(flattenIllu(redPanda))
  )
  writeFileSync(
    "../src/content/json/sakuraBirds.json",
    JSON.stringify(flattenIllu(sakuraBirds))
  )
  writeFileSync(
    "../src/content/json/seaTurtles.json",
    JSON.stringify(flattenIllu(seaTurtles))
  )
  writeFileSync(
    "../src/content/json/illuQuiz.json",
    JSON.stringify([
      {
        data: flattenIllu(snowMonkeys),
        color: illuColors.snowMonkeys.background,
      },
      {
        data: flattenIllu(craneSunset),
        color: illuColors.craneSunset.background,
      },
      {
        data: flattenIllu(sakuraDeer),
        color: illuColors.sakuraDeer.background,
      },
    ])
  )

  // tslint:disable-next-line:no-console
  console.log("done")
}

main()
