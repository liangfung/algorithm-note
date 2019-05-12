function combination(S, k) {
  if (k === 0 || S.length === k) {
    return [S.slice(0, k)]
  }
  let r = []
  const [first, ...other] = S
  console.log(S, first, other)
  r = r.concat(combination(other, k - 1).map(o => [first, ...o]))
  r = r.concat(combination(other, k))
  return r
}

// const S = ['a', 'b', 'c', 'd']
const S = 'abcd'
console.log(combination(S, 2))