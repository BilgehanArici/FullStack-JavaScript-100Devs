//Arrays

// //Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4]
console.log(nums.reduce((a,b)=>a+b))


// let nums = [42,19,77,33,57]

// let sum = nums.reduce( (acc,c) => acc + c, 0  )

// alert(sum)




//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function yellomello(arr){
    return arr.map(number=>Math.pow(number,2))
}
console.log(yellomello([1,2,3,4]))


//Create a function that takes string
//Print the reverse of that string to the console
function stringo(str){
    return str.split('').reverse().join('')
}
console.log(stringo('bigo'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palin(str){
    let reverse = str.split('').reverse().join('')
    if(str == reverse){
        return true
    }else{
        return false
    }
}
console.log(palin('bigo'))
console.log(palin('reviver'))
