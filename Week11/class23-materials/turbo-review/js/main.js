// // *Variables*
// // Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let name = 'bilgehan'
if (name.includes('?')){
    alert(name)
}




// let newVar = 'bilgehan?'
// if(newVar.endsWith('?')){
//     //alert(newVar)
// }

// //Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let fullStatus = 'jr. dev bilgehan arici'
console.log(fullStatus.replace('jr. dev','software engineer'))




// let newVar2 = 'hello my name is bilgehan, the jr. dev'
// console.log(newVar2.replace('jr. dev','software engineer'))


// // *Functions*
// // Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let rand = Math.random()
    if(rand<=.33){
        return 'rock'
    }else if(rand<=.66){
        return 'paper'
    }else{
        return 'scissors'
    }
}
console.log(rockPaperScissors())



// function rockPaperScissors(){
//     let rand = Math.random()
//     if(rand<.33){
//         return 'rock'
//     }else if(rand<.66){
//         return 'paper'
//     }else {
//         return 'scissors'
//     }
// }
// console.log(rockPaperScissors())

// // *Conditionals*
// //Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function geniousRockPaperScissorsFunction(choice){
    let rules = {rock:'paper',paper:'scissors',scissors:'rock'}
    let random = rockPaperScissors()
    if(choice == random){
        return 'it be a draw dawg'
    }else if(random == rules[choice]){
        return 'random dawg won'
    }else if (choice == rules[random] ) {
        return 'you won dawg'
    }
}
console.log(geniousRockPaperScissorsFunction('rock'))











// function helloMello(choice){
//     let rules = {rock:'paper', paper:'scissors', scissors:'rock'}
//     let random = rockPaperScissors()
//     if(choice == random){
//         return 'its a draw'
//     }else if (choice == rules[random]){
//         return 'you won'
//     }else {
//         return 'you lost'
//     }
// }

// console.log(helloMello('rock'))

// //*Loops*
// //Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function arrayMachineIBe(arr){
    for (let i = 1; i<= arr.length; i++){
        
    }
}
arrayMachineIBe(['rock','paper','scissors','rock'])




// function yelaWolf(){

// }