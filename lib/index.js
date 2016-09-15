function sumOfDivided(list) {
  const factorHash = list.reduce((re, num) => {
    const factors = getPrimeFactors(num)
    for (const factor of factors) {
      re[factor] = (re[factor] || 0) + num
    }
    return re
  }, {})

  return Object.keys(factorHash)
    .map(i => Number(i))
    .sort((a, b) => a - b)
    .map(i => [i, factorHash[i]])
}

function getPrimeFactors(num) {
  num = Math.abs(num)

  const re = new Set()
  let i = 2

  while (true) {
    if (!isPrime(i)) {
      i++
      continue
    }

    if (i > num) break

    if (i === num) {
      re.add(i)
      break
    }

    if (num % i === 0) {
      re.add(i)
      num = num / i
    } else {
      i++
    }
  }

  return [...re]
}

function isPrime(num) {
  if (Math.abs(num) === 1) return false
  if (Math.abs(num) === 2) return true

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

module.exports = {
  sumOfDivided,
  getPrimeFactors,
}
