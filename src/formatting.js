/**
 * Formatea un número con separadores de miles y decimales (locale es-PE).
 * Ejemplo: 1234.5 → "1,234.50"
 */
export const numberFormatDecimal = (value, decimals = 2) => {
  const num = parseFloat(value)
  if (isNaN(num)) return '0.' + '0'.repeat(decimals)
  return num.toLocaleString('es-PE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

/**
 * Formatea un número como total (alias de numberFormatDecimal con 2 decimales fijos).
 */
export const numberFormatTotal = (value) => numberFormatDecimal(value, 2)
