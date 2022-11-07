/* Kata 5 - Percent Encoded String
In this exercise, we will be given a normal string of words and turn it into a 
percent-encoded string by replacing all whitespace with %20.

note:  If there is whitespace on the outside of the string, like in our second 
example above, you should only replace the whitespace within the string.
*/

const urlEncode = text => {
  let encoded = ""; //placeholder for encoded string replacement
  text = text.trim() //removes whitespace at beginning and end of string

  for (let i = 0; i < text.length; i++){
    if (text[i] === " "){ //checks for " " at string index
      encoded += "%20"; // adds %20 into encoded string instead of " " at string index
    } else {
      encoded += text[i]; //adds string index character to 'encoded' if " " not found
    }
  }

  return encoded; /* Returns encoded result with " " trimmed from start/finish of string and
  " " replaced with %20 if found in center string text*/
}

// TEST CASES //
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));