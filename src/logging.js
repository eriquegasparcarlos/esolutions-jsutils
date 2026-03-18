/**
 * Log de errores solo en entorno de desarrollo.
 * En producción no genera ninguna salida.
 */
export const logError = (error, context = '') => {
  if (process.env.DEV || process.env.NODE_ENV === 'development') {
    const prefix = context ? `[${context}]` : '[Error]'
    console.error(prefix, error)
  }
}
