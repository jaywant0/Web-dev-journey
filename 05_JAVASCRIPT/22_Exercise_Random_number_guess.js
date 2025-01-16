const prompt = require("prompt-sync")()

let a = Math.random() * 100
a = Number.parseInt(a)
console.log(a)
let input1
let score = 100

while(input1 != a){
    score = score - 1
    input1 = prompt("Enter your number : ")
    if(input1 == a){
        console.log("Congrutulation you won the right guess ")
        console.log(`You guess actual number ${100 - score}`)
    }
    else if(input1 > a && input1 < 100){
        console.log("Your number is greater than actual number")
    }
    else if(input1 < a && input1 > 0){
        console.log("Your number is too smaller than actual number")
    }
    else{
        console.log("Enter a number between 0 to 100")
    }


}
















































// let n =Math.floor(Math.random() * 100)+1
// console.log(n)

// let a = n
// let noOfGuesses = 0;
// let number = prompt("Enter your number ")

// // for(let i = 0; i<3; i++){
// //     if(a < number){
// //         console.log("Your number is very big the actual number is small")
// //         break
// //     }
// //     else if(a > number){
// //         console.log("Your number is too small the actual number is big")
// //     }
// //     else{
// //         console.log("You won 1 lakh ruppes")
// //     }
// // }

// while(true){
//     if(a < number){
//         console.log("Your number is very big the actual number is small")
//         noOfGuesses = noOfGuesses + 1
//     }
//     else if(a > number){
//         console.log("Your number is too small the actual number is big")
//     }
//     else{
//         console.log("You won 1 lakh ruppes")
//     }

// }
