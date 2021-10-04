export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 }
}

export const hslToRgb = (hsl: string) => {
  const formattedHsl = hsl
    .replace("hsl(", "")
    .replace("%", "")
    .replace("%)", "")
    .split(",")
  let h = +formattedHsl[0]
  let s = +formattedHsl[1]
  let l = +formattedHsl[2]

  s /= 100
  l /= 100

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0

  if (0 <= h && h < 60) {
    r = c
    g = x
    b = 0
  } else if (60 <= h && h < 120) {
    r = x
    g = c
    b = 0
  } else if (120 <= h && h < 180) {
    r = 0
    g = c
    b = x
  } else if (180 <= h && h < 240) {
    r = 0
    g = x
    b = c
  } else if (240 <= h && h < 300) {
    r = x
    g = 0
    b = c
  } else if (300 <= h && h < 360) {
    r = c
    g = 0
    b = x
  }
  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  return {
    r,
    g,
    b,
  }
}

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
