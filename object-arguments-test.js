var obj  = {'a': 1}

function change(obj) {
  obj = {'b': 1}
}

function change2(obj) {
  obj.a = 2
}

change(obj)
console.log(obj)
change2(obj)
console.log(obj)