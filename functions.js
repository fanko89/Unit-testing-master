// import { testArray } from 'functionTest.test.js';





// fizzbuzz
function testArray(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error('must be a positive')
  }
  return Array.from({ length: n }, (_, i) => i + 1)
    .reduce((start, current) => {
      let value = ''
      if (current % 3 === 0) {
        value += 'fizz'
      }
      if (current % 5 === 0) {
        value += 'buzz'
      }
      start.push(value || current)
      return start
    }, [])
}

 
 

// addition
function add(a, b) {
  return a + b
}

// Subtraction
function subtract(a, b) {
  return a - b
}

// Multiply
function multiply(a, b) {
  return a * b
}

// Division
function divide(a, b) {
  if (b === 0) {
    throw new Error('Can not divide zero')
  }
  return a / b
}

// Factorial
function factorial(n) {
  if (n < 0) {
    throw new Error('Can not factor a neg num')
  }
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

// Exponent
function exponent(base, exponent) {
  const results=  Math.pow(base, exponent)
  return results
}

// Square
function square(n) {
  return n * n
}

// reverse string
function reverseString(str) {
  return str.split('').reverse().join('')
}
// uppercase string
function uppercaseString(str) {
  return str.toUpperCase()
}
// remove vowels
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '')
}

//validator
function validator(obj, str) {
  const object = JSON.parse(obj)
  if (object.hasOwnProperty(str)) {
    console.log(`The key "${str}" exists in the object.`)
  } else {
    console.log(`The key "${str}" does not exist in the object.`);
  }
}



module.exports = {
  testArray,
  add,
  subtract,
  multiply,
  divide,
  factorial,
  exponent,
  square,
  reverseString,
  uppercaseString,
  removeVowels,
  validator,
}
