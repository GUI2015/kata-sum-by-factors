const { sumOfDivided, getPrimeFactors } = require('../lib/index')

function createTestCase(executor) {
  return (orig, dest, opts = { focus: false }) => {
    const text = `${JSON.stringify(orig)} => ${JSON.stringify(dest)}`
    const fn = () => {
      expect(executor(orig)).toEqual(dest)
    }
    opts.focus ? it.only(text, fn) : it(text, fn)
  }
}

describe('sumOfDivided', () => {
  const test = createTestCase(orig => sumOfDivided(orig))

  test([12, 15], [[2, 12], [3, 27], [5, 15]])
  test([15, 21, 24, 30, 45], [[2, 54], [3, 135], [5, 90], [7, 21]])
  test([15, 30, -45], [[2, 30], [3, 0], [5, 0]])
})

describe('getPrimeFactors', () => {
  const test = createTestCase(orig => getPrimeFactors(orig))

  test(0, [])
  test(2, [2])
  test(3, [3])
  test(8, [2])
  test(10, [2, 5])
  test(11, [11])
  test(30, [2, 3, 5])
  test(58, [2, 29])

  // Test performance for big numbers
  test(Math.pow(2, 16), [2])
  test(Math.pow(2, 10) * Math.pow(3, 10), [2, 3])
  test(
    [2, 3, 5, 7, 11, 13].reduce((re, i) => re * Math.pow(i, 3), 1),
    [2, 3, 5, 7, 11, 13]
  )
})
