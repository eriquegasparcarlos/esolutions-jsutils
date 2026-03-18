/**
 * Valores por defecto para formularios Quasar.
 * Cada proyecto puede sobrescribir llamando setFormDefaults({ outlined: false, ... })
 * en su boot/init.
 */
export const formDefaults = {
  outlined: true,
  dense: true,
  isClassic: true,
}

/**
 * Sobrescribe los valores por defecto de formularios.
 * @param {Partial<typeof formDefaults>} overrides
 */
export function setFormDefaults(overrides) {
  Object.assign(formDefaults, overrides)
}
