export const darkerColor = (rgb: { r: number; g: number; b: number }) => {
  if (rgb.g > 100 && rgb.g > rgb.b && rgb.r > rgb.b) {
    return { r: rgb.r * 0.8, g: rgb.g * 0.6, b: rgb.b * 0.4 }
  }
  if (rgb.r > 100 && rgb.r > rgb.b && rgb.r > rgb.g) {
    return { r: rgb.r * 0.7, g: rgb.g * 0.4, b: rgb.b * 0.6 }
  }
  if (rgb.b > 100) {
    return { r: rgb.r * 0.5, g: rgb.g * 0.6, b: rgb.b * 0.7 }
  }
  if (rgb.r > 100) {
    return { r: rgb.r * 0.7, g: rgb.g * 0.7, b: rgb.b * 0.7 }
  }
  return rgb
}
