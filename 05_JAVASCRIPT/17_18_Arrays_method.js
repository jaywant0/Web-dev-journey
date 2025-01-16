let a = [1,2,3,4,5,6,7,8]
let b = [11,22,33,44,55,66]
// 1
a.toString();
console.log(a)
// console.log(typeof a)

// 2
a.join("_")
console.log(a)

// 3
a.pop()
console.log(a) 

// 4
a.push(89)
console.log(a)

// 5
a.shift()
console.log(a)

// 6
a.unshift(666)
console.log(a)

// 7
a.concat(b)
console.log(a)

// 8 
a.sort()
console.log(a)

// 9 
let compare = (a,b) =>{
    return a -b
}
let num = [11,22,33,3,5,6,7]
// num.sort(compare)
// num.reverse()
console.log(num)

//  10
// num.splice(2,3)
// console.log(num)

num.slice(2)
console.log(num)