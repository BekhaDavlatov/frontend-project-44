export const makeProgression = (start, step, length) => {
  let result = []
  for (let i = 0; i < length; i++) {
    result.push(start + i * step)
  }
  return result
}
