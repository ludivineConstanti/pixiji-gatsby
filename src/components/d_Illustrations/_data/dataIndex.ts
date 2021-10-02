import { arrRabbitOnMoon, colorRabbitOnMoon } from "./rabbitOnMoon"
import { arrSnowMonkeys, colorSnowMonkeys } from "./snowMonkeys"
import { arrCraneSunset, colorCraneSunset } from "./craneSunset"
import { arrSakuraDeer, colorSakuraDeer } from "./sakuraDeer"
import { arrRedPanda, colorRedPanda } from "./redPanda"
import { arrSakuraBirds, colorSakuraBirds } from "./sakuraBirds"
import { arrKaguyaHime, colorKaguyaHime } from "./kaguyaHime"
import { arrKodomoNoHi, colorKodomoNoHi } from "./kodomoNoHi"
import { arrCloudDragon, colorCloudDragon } from "./cloudDragon"

// naming with useCase and index is also used in the IlluIndex in _compuIllus
export const data = {
  home: [{ arrIllu: arrRabbitOnMoon, colorIllu: colorRabbitOnMoon }],
  readMe: [{ arrIllu: arrKodomoNoHi, colorIllu: colorKodomoNoHi }],
  about: [{ arrIllu: arrKaguyaHime, colorIllu: colorKaguyaHime }],
  register: [{ arrIllu: arrSakuraBirds, colorIllu: colorSakuraBirds }],
  error404: [{ arrIllu: arrCloudDragon, colorIllu: colorCloudDragon }],
  login: [{ arrIllu: arrRedPanda, colorIllu: colorRedPanda }],
  quiz: [
    { arrIllu: arrSnowMonkeys, colorIllu: colorSnowMonkeys },
    { arrIllu: arrCraneSunset, colorIllu: colorCraneSunset },
    { arrIllu: arrSakuraDeer, colorIllu: colorSakuraDeer },
  ],
}
