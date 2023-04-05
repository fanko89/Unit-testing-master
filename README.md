# Unit-Testing

For this assignment, we will be learning about Test Drivin Development (TDD). When writing Javascript in larger applications, sometimes introducing new features and code can create unintended side effects. Writing tests for your code can help you write code that doesn't have bugs and free from unintentional side effects.

## Assignment
For each of the following items:
1. Write test(s) for the functions. Commit
2. Write functions to pass the test(s) Commit.
3. Ensure the command `npm test` runs the tests.

### Items to complete
- Fizzbuzz
  - This is a classic coding exercise. Write a function that accepts a number and that returns an array with the length of the given number. The array values should  as follows: 
  - For multiples of 3 print "fizz"
  - For multiples of 5 print "buzz"
  - For multiples of 3 and 5 print "fizzbuzz"
- Calculator
  - Write 4 functions for the basic calculator operations. (+. -, *, /)
  - Write 2 more functions for 2 other calculator operations. (X!, X<sup>2</sup>, e<sup>x</sup>, ect.)
- String functions
  - A function that reverses a string. (eg. "Hello" becomes "olleH")
  - A function that uppercases a string.
  - A function that removes all vowels.
- Object validator
  - Write a function that accepts 2 parameters. One is an object, the second is a string. The function should validate that the string is a key of the object.
- Numbers
  - A function that takes an array of numbers, and adds up all the numbers in the array and outputs the total. ( [1,2,3] would output: 6)
- All Items
  - Must Write tests to ensure correct types are returned
 
 
 ## Tips
 - When writing tests, try to think of edge cases for your functions and test for those cases as well as expected behavior.
 - Tests can be written using a framework (Jest recommended) or with vanilla JS.
- Functions and Tests can be written in the same file, or for sanity, you can opt to split them into modules.
