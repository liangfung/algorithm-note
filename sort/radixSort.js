const radixSort = A => {
  let m = 1
  let max = Math.max(...A)
  let buckets = Array.from({ length: 10 }, () => [])
  while (m < max) {
    A.forEach(item => {
      let digit = ~~(item % (m * 10) / m)
      buckets[digit].push(item)
    })
    let j = 0
    buckets.forEach(o => {
      while (o.length > 0) {
        A[j++] = o.shift()
      }
    })
    m = m * 10
  }
}

let A = [3, 45, 34, 76, 8, 9, 12, 33]
radixSort(A)
console.log(A)