/* Kata 1 - Sum the Largest Numbers:
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.
*/

const sumLargestNumbers = data => {
  let largest = 0; //placeholder for largest array #
  let runnerUp = 0; //placeholder for second largest array #
  let result = 0; //placeholder to sum 'largest' & 'runnerUp'

  data.forEach(x => { //loop to check each number in array
    if (largest < x){ // check of largest value is less than array at each index
      runnerUp = largest // if array number is > largest, runnerUp inherits largest value
      largest = x //if array number is > largest, largest inheriets array value at current index
    }
  })

  result = largest + runnerUp //sum values of 'largest' and 'runnerUp'
  return result // return sum result
}

//TEST CASES//
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));