/* Kata 3 - Vowels
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.
*/

const numberOfVowels = data => {
  result = 0; //placeholder for sum off vowel occurances

  for (let i = 0; i <= data.length; i++){
    if (data[i] === "a" || data[i] === "e" || data[i] === "i"
    || data[i] === "o" || data[i] === "u"){ //check each character in string index for vowels
      result++ //add 1 to result eachtime a vowel is found in string index
    }
  }

  return result //Return result sum
}

// TEST CASES //
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));