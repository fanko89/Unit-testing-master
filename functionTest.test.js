// import { testArray } from "/";
const { 
  testArray,  
  add,
  subtract,
  multiply,
  divide,
  factorial,
  square,
  power,
  removeVowels,
  reverseString,
  uppercaseString,
  exponent,
  validator,
 } = require('./functions');


////fizzbuzz
describe('testArray', () => {
  it('return an array with the length with number', () => {
    expect(testArray(5)).toHaveLength(5);
  });

  it('multiples of 3 with "fizz"', () => {
    const result = testArray(6);
    expect(result[2]).toBe('fizz');
    expect(result[5]).toBe('fizz');
  });

  it('multiples of 5 with "buzz"', () => {
    const result = testArray(10);
    expect(result[4]).toBe('buzz');
    expect(result[9]).toBe('buzz');
  });

  it('multiples of 3 and 5 with "fizzbuzz"', () => {
    const result = testArray(15);
    expect(result[2]).toBe('fizz');
    expect(result[4]).toBe('buzz');
    expect(result[14]).toBe('fizzbuzz');
  });
});

////Calculator

describe('add', () => {
  test('adds 2 + 2 = 4', () => {
    expect(add(2, 2)).toBe(4);
  })
})

describe('subtract', () => {
  test('subtracts 4 - 2 = 2', () => {
    expect(subtract(4, 2)).toBe(2)
  })

  test('subtracts -4 - (-2) to equal -1', () => {
    expect(subtract(-4, -2)).toBe(-2)
  })
})

describe('multiply', () => {
  test('multiplies 3 * 3 = 9', () => {
    expect(multiply(3, 3)).toBe(9)
  })

  test('multiplies -3 * -3 = 9', () => {
    expect(multiply(-3, -3)).toBe(9)
  })
})

describe('divide', () => {
  test('divides 10 / 5 = 2', () => {
    expect(divide(10, 5)).toBe(2);
  })

})

describe('factorial', () => {
  test('4 = 24', () => {
    expect(factorial(4)).toBe(24)
  })

})

describe('square', () => {

  test('-3 = 9', () => {
    expect(square(-3)).toBe(9)
  })
})

describe('exponent', () => {
  
  test('e^0 1', () => {
    expect(exponent(1, 0)).toBe(1)
  })
})


// reverse string 
describe('reverseString', () => {
  it('should be a reversed string', () => {
    expect(reverseString('testing')).toEqual('gnitset')
    expect(reverseString('abcdefg')).toEqual('gfedcba')
  })
})
// uppercase
describe('uppercaseString', () => {
  it('should be all uppercase ', () => {
    expect(uppercaseString('testing')).toEqual('TESTING')
    expect(uppercaseString('AbCdEfG')).toEqual('ABCDEFG')
  })
})

// remove vowels 
describe('removeVowels', () => {
  it('should remove all vowels from the string', () => {
    expect(removeVowels('hello')).toEqual('hll')
    expect(removeVowels('abracadabra')).toEqual('brcdbr')
  })
})

// validator
describe('validator', () => {
  const obj = '{"name": "derek", "age": 33}'

  test('key does not exist', () => {
    const str = 'gender';
    const consoleSpy = jest.spyOn(console, 'log');
    validator(obj, str);
    expect(consoleSpy).toHaveBeenCalledWith(`The key "${str}" does not exist in the object.`);
    consoleSpy.mockRestore();
  });

  test('key exists', () => {
    const str = 'name'
    const consoleSpy = jest.spyOn(console, 'log');
    validator(obj, str)
    expect(consoleSpy).toHaveBeenCalledWith(`The key "${str}" exists in the object.`);
    consoleSpy.mockRestore()
  })
})