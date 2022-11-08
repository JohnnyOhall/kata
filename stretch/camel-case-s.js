/* Kata 9 - Case Maker
We will receive a normal string of words separated with spaces as the input. 
Our job is to convert these strings into camel cased strings.
*/

const camelCase = input => {
  newString = ""; //placeholder to store camelCase value
  input = input.toLowerCase(); //change to all lowercase

  for (let i = 0; i < input.length; i++){
    if (input[i] === " " && input[i + 1] === " "){/*do nothing on this loop*/} 
    else if (input[i] === " "){ //checks for " " at string index
      newString += input[i + 1].toUpperCase(); // skips space and changes next character to uppercase
      i++ // increases loop counter by 1 to prevent duplicate characters after space is removed
    } 
    else {newString += input[i];} //adds string index character to 'newString' if " " not found
  };

  return newString; // returns output
};


// TEST CASES //
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercAlifragAlisticexpialidocious"));
console.log(camelCase("a  b  c  deefg Hi"));