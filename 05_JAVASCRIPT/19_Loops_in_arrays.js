let num = [2,34,21,23,53]

for(let i = 0; i<num.length; i++){
    console.log(num[i])
}
console.log("\n")

num.forEach((element)=>{
    console.log(element*element)
})

console.log("\n")

num.forEach((add) =>{
    console.log(add + add)
})


// array from
let name = "jaywant"
let arr = Array.from(name)
console.log([arr])  // convert a string into array

//for of
let num1 = [1,2,3,4,5,6,7,8,9]
for(let i of num1){
    console.log(i)
}

// for in
console.log("\n")

for(let i in num1){
    console.log(num1[i])
}