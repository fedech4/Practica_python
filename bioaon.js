// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let fede = true
alert(fede)

// Declare a variable, reassign it to your favorite color, 
//and console log the value
let fed = "green"
fed = "purple"
console.log(fede)


// *Functions*
// Create a function that takes in 4 numbers 
//and returns the sum of the first 3 numbers 
//divided by the fourth. Return the result. Call the function.
function sum4(num1, num2, num3, num4){
    return (num1 + num2 + num3)/num4
}

sum4(1,2,3,4)
// Create a function that takes in 2 numbers. 
//Console log the first number to the power of the second. 
//Call the function.
function numdos(num1, num2){
    //console.log(n1**num2)
    console.log((Math.pow(num1,num2)))
}
numdos(2,3)
// *Conditionals*
// Create a function that takes in a boolean and a string. 
//If the boolean is true, alert the string.
//If the boolean is false, console log the string
function compare(bolean, string){
    if (bolean == true) {
        alert(string)
    }
    else {
        console.log(string)
    }
}
b ? alert(str) : console.log(str)

const alert0rlog = (b,str) => b ? alert(str) : console.log(str)
//*Loops*
//Create a function that takes in a number. 
//Console log all values from 1 to that number,
//but if the number is divisible by 3 log "fizz" 
//instead of that number, if the number is divisible by 
//5 log "buzz" instead of the number, and if the number 
//is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fuzz(n1){
    for (let i = 1; i <= n1; i++){
        if (n1 % 3 === 0 && i%5 === 0){
            console.log("Fizz!")
    }
        else if (i%3 === 0 ){
            console.log('buzz!')
        }
        else if (i%5 === 0 ){
            console.log('buzz!')
        }
        else {
            console.log(i)
        }
}
}
fuzz(20)