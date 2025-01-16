let a = [1,3,4,6,8,7,123,34,64]
console.log(a)

let b = [1,3,4,6,8,7,123,34,64, true,"Not present"]
console.log(a)

console.log(a[1])
console.log(a[b.length])
b[0] = 80
console.log(b)
console.log(typeof b)