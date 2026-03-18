/**
 * Convierte una cadena snake_case a camelCase.
 * Ejemplo: "my_field_name" → "myFieldName"
 */
export const toCamelCase = (snakeStr) => {
  return snakeStr.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
}
