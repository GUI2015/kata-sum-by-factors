const sumOfDivided = require('../lib/solution_1')
const { getPrimeFactors, isPrime } = sumOfDivided
const sumOfDividedExample = require('./sum_of_divided_example')
const { createTestCase } = require('./helpers')

describe('solution 1', () => {
  sumOfDividedExample(sumOfDivided)

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

  describe('isPrime', () => {
    const test = createTestCase(orig => isPrime(orig))

    test(0, false)
    test(1, false)
    test(2, true)
    test(3, true)
    test(4, false)
    test(5, true)
    test(10, false)
    test(11, true)
    test(1373, true)
    test(7451, true)
  })
})
