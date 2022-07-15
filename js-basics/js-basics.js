//// VARIABLES ////

// Since ES6 best practice is to use the 'let' label to declare a variable
// Give the variable a name
// By default variables in JavaScript are undefined until they are assigned something.
// You can use single or double quotes, but single quotes is more common

let name = 'Jess'
console.log('---Single Variable---')
console.log(name)

// Rules for naming variables
// Cannot be a reserved keyword - if you try to use one of the keywords you will get an error.
// Should be meaningful.
// Cannot start with a number.
// Cannot contain a space or hyphen (-). Use camel notation/case.
// Are case-sensitive

// Can declare a couple different ways, but the modern, best practice is to declare each variable on its own line

let firstName = 'Jessica'
let lastName = 'Nguyen'
console.log('---Multiple Variables---')
console.log(firstName + ' ' + lastName)

//// CONSTANTS ////

// Best practice, if you don't need to reassign, you should use const, if you need to reassign, you should use let.

const interestRate = 0.3
console.log('---Const---')
console.log('Interest Rate:' + ' ' + interestRate + '%')

//// Primitives/Value Types ////

let nickName = 'Hess' // String Literal
let age = 33 // Number Literal
let isAwesome = true // Boolean Literal
let middleName = undefined // Any variable that is not assigned will be undefined, but you can set a variable as undefined, but it's not very common
let selectedColor = null // We use null in situations where we want to clear the value of a variable

// ES6 has another primitive called 'symbol'

//// Reference Types ////
