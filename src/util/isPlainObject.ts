const getType = (value: unknown): string =>
  Object.prototype.toString.call(value).slice(8, -1).toLowerCase()

export function isPlainObject(value: unknown): value is object {
  if (getType(value) !== "object") {
    return false
  }

  const pp = Object.getPrototypeOf(value)

  if (pp === null || pp === undefined) {
    return true
  }

  return pp.constructor?.toString?.() === Object.toString()
}
