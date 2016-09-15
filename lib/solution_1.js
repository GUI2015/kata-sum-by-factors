function sumOfDivided(list) {
  const factorHash = {}
  for (const num of list) {
    for (const f of getPrimeFactors(num)) factorHash[f] = (factorHash[f] || 0) + num
  }

  return Object.keys(factorHash)
    .map(Number)
    .sort((a, b) => a - b)
    .map(i => [i, factorHash[i]])
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

function isPrime(num) {
  let i = Math.floor(Math.sqrt(num))
  while (i > 1) {
    if (num % i === 0) return false
    i--
  }
  return true
}

module.exports = sumOfDivided
Object.assign(module.exports, { getPrimeFactors, isPrime })
