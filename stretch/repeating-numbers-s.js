/* Kata 8 - Repeating Numbers
The input data for this exercise will be two dimensional array (an array of arrays), 
where each sub-array will have two numeric values. For example: [[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to 
repeat that value.
*/

const repeatNumbers = data => {
  let temp = ""; let result =""; //Placeholders to store loop and result data
  init = 0; // Initilize - prevents ", " from being added on first loop.

  for (let x of data){ //Nested loop to check each input array
    for (let i = 0; i < x[1]; i++){ //Loop length is equal to index 1 of each array
      temp += x[0] //repeat storing index 0 value at each loop
    }

   if (init > 0){
    result += ", " + temp //Adds each array together seperated by ,
   } else {
    result += temp //adds temp if first loop of array
   }
    
   temp = ""; //Clears temp before entering next for of loop.
   init++ // increase init so ", " is added to all following loops
  };
  
  return result // Return combined result
};

// TEST CASES //
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
console.log(repeatNumbers([[0, 4], [34, 6], [92, 2], [1000, 2], [5, 6]]));
