// q1 use logical opeators the person age lies between 10 and 20

const prompt = require("prompt-sync")()


// let a = prompt("Enter the number = ")

// if(a > 10 && a < 20 ){
//     console.log("The person age is lies between 10 to 20 ")
// }
// else{
//     console.log("The person age is not lies between 10 to 20 ")
// }

// Q2 divisible by  two or not

// let a = prompt("Enter the number = ")

// if(a % 2 == 0 && a % 3 == 0){
//     console.log("A number is divisible by 2 and 3 both ")
// }
// else{
//     console.log("A number is not divisible by 2 and 3")
// }

// q3 
// if(a % 2 == 0 || a % 3 == 0){
//     console.log("A number is divisible by 2 either 3 both ")
// }
// else{
//     console.log("A number is not divisible by 2 either 3")
// }

// let c = prompt("Enter your age ")
// console.log(c < 18 ? "your are not drive " : "you can drive")


let d = prompt("Enter yor age ")
// d = Number.parseInt(d)

switch  (d) {
    case '1':
        console.log("age is 1 ")
        break
    case '2':
        console.log("age is 2")
        break
    case '3':
        console.log("age is 3 ")
        break
    case '4':
        console.log("age is 4")
        break
    default:
        console.log("Not a valid age")
        
}