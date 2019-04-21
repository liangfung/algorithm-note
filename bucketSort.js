// const insert_sort = A => {
//   const _insert = (arr, i, x) => {
//     let p = i - 1
//     while (p >= 0 && arr[p] > x) {
//       arr[p + 1] = arr[p]
//       p--
//     }
//     arr[p + 1] = x
//   }
//   for (let i = 1; i < A.length; i++) {
//     _insert(A, i, A[i])
//   }
// }

const insert_sort = require('./insert')

const bucket_sort = (A, k, s) => {
  const buckets = Array.from({ length: k }, () => [])
  for (let i = 0; i < A.length; i++) {
    let index = ~~(A[i] / s)
    buckets[index].push(A[i])
  }

  for (let i = 0; i < buckets.length; i++) {
    insert_sort(buckets[i])
  }
  return [].concat(...buckets)
}

const A = [2, 3, 1, 65, 75, 8, 7, 98, 4, 35]
console.log(bucket_sort(A, 10, 10))
