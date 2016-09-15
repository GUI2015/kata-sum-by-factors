function sumOfDivided(list) {
  const re = []
  const maxNum = Math.max(...list.map(Math.abs))
  const nonPrimes = {}

  // Sieve of Eratosthenes
  // See https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
  for (let i = 2; i <= maxNum; i++) {
    if (nonPrimes[i]) continue

    for (let j = i * 2; j <= maxNum; j += i) nonPrimes[j] = true

    let sum
    for (const n of list) if (n % i === 0) sum = (sum || 0) + n
    if (sum !== undefined) re.push([i, sum])
  }

  return re
}

module.exports = sumOfDivided
