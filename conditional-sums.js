/* Kata 2 - Conditional sums
For this kata, we'll be adding only the numbers in the array which match the given condition.
*/

const conditionalSum = (values,condition) => {
  let oddResult = 0; //placeholder for sum of odd numbers in array
  let evenResult = 0; //placeholder for sum of even numbers in array
  
  values.forEach(x => {
    if (x % 2 === 0){ //if number has no remainder === even, else odd - check each index in array
      evenResult += x //add array index to 'evenResult' if even
    } else {oddResult += x} //add array index to 'oddResult' if odd
  });

  if (condition === "even"){ //return 'evenResult' value if condition === even
    return evenResult
  } else if (condition === "odd"){ //return 'oddResult' value if condition === odd
    return oddResult
  } else { // return 0 if no conditions are met
    return 0
  }
}

//TEST CASES//
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));