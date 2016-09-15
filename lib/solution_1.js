function sumOfDivided(list) {
  const factorMap = {}
  for (const num of list) {
    for (const f of getPrimeFactors(num)) factorMap[f] = (factorMap[f] || 0) + num
  }

  return Object.keys(factorMap)
    .map(Number)
    .sort((a, b) => a - b)
    .map(i => [i, factorMap[i]])
}

function getPrimeFactors(value) {
  const re = []
  let num = Math.abs(value)

  for (let i = 2; i <= num; i++) {
    if (!isPrime(i)) continue

    if (i === num) {
      re.push(i)
      break
    }

    if (num % i === 0) {
      re.push(i)
      do { num = num / i } while (num % i === 0)
    }
  }

  return re
}

// Trial division. Note that we just check from 2 to the square root of num
// See https://en.wikipedia.org/wiki/Primality_test
// and http://www.javascripter.net/faq/numberisprime.htm
function isPrime(num) {
  if (num <= 1) return false
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false
  return true
}

module.exports = sumOfDivided
Object.assign(module.exports, { getPrimeFactors, isPrime })
