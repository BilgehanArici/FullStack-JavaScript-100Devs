//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

function yelloMello(number){
    let newArr = []
    for(i=1;i<=number;i++){
        newArr.push(i)
    }
    return newArr
}

console.log(yelloMello(5))






// function oneToThatNumFor(num) {
//     newArr = []
//     for (i = 1; i <= num; i++) {
//         newArr.push(i)
//     }
//     return newArr
// }
// console.log(oneToThatNumFor(5))
