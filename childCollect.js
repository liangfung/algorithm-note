// 枚举子集  决策树的遍历
const find_subsets = (S, decisions = []) => {
  console.log(decisions)
  if(S.length === decisions.length) {
    let result = []
    decisions.forEach((item, index) => {
      if(item) result.push(S[index])
    })
    return result.join('')
  }
  let r = []
  r = r.concat(find_subsets(S, decisions.concat(true)))
  r = r.concat(find_subsets(S, decisions.concat(false)))
  console.log(r, decisions)
  return r
}

let a = ['a', 'b']
console.log(find_subsets(a))