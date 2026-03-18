// Mapa de nombres/alias → hex (paleta shadcn/ui)
export const COLOR_MAP = {
  // Nombres semánticos
  success: '#16a34a',
  danger: '#dc2626',
  warning: '#d97706',
  info: '#2563eb',
  primary: '#6366f1',
  secondary: '#64748b',
  neutral: '#6b7280',
  // Nombres de color
  green: '#16a34a',
  red: '#dc2626',
  blue: '#2563eb',
  orange: '#ea580c',
  yellow: '#d97706',
  purple: '#9333ea',
  pink: '#db2777',
  teal: '#0d9488',
  grey: '#6b7280',
  gray: '#6b7280',
  indigo: '#6366f1',
  cyan: '#0891b2',
}

/**
 * Resuelve un nombre de color semántico a su valor hex.
 * Si ya es un hex o valor CSS, lo devuelve tal cual.
 */
export const resolveColor = (color) => {
  if (!color) return null
  return COLOR_MAP[color.toLowerCase()] || color
}

/**
 * Aclara un color hex mezclándolo con blanco según el porcentaje dado.
 * Acepta nombres semánticos (success, danger, etc.) además de hex.
 */
export const lightenColor = (hex, percent = 0.85) => {
  hex = resolveColor(hex)
  if (!hex) return null
  hex = hex.replace('#', '')
  let r = parseInt(hex.substring(0, 2), 16)
  let g = parseInt(hex.substring(2, 4), 16)
  let b = parseInt(hex.substring(4, 6), 16)
  r = Math.round(r + (255 - r) * percent)
  g = Math.round(g + (255 - g) * percent)
  b = Math.round(b + (255 - b) * percent)
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
}
