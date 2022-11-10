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

const pascalCase = input => {
  newString = ""; //placeholder to store camelCase value
  input = input.toLowerCase(); //change to all lowercase

  for (let i = 0; i < input.length; i++){
    if (i === 0) {newString += input[i].toUpperCase();} 
    else if (input[i] === " " && input[i + 1] === " "){/*do nothing on this loop*/} 
    else if (input[i] === " "){ //checks for " " at string index
      newString += input[i + 1].toUpperCase(); // skips space and changes next character to uppercase
      i++ // increases loop counter by 1 to prevent duplicate characters after space is removed
    } 
    else {newString += input[i];} //adds string index character to 'newString' if " " not found
  };

  return newString; // returns output
};

const snakeCase = input => {
  newString = ""; //placeholder to store camelCase value

  for (let i = 0; i < input.length; i++){
    if (input[i] === " "){ //checks for " " at string index
      newString += "_"; // skips space and changes next character to uppercase
    } 
    else {newString += input[i];} //adds string index character to 'newString' if " " not found
  };

  return newString; // returns output
};

const kebabCase = input => {
  newString = ""; //placeholder to store camelCase value

  for (let i = 0; i < input.length; i++){
    if (input[i] === " "){ //checks for " " at string index
      newString += "-"; // skips space and changes next character to uppercase
    } 
    else {newString += input[i];} //adds string index character to 'newString' if " " not found
  };

  return newString; // returns output
};

const titleCase = input => {
  newString = ""; //placeholder to store camelCase value
  input = input.toLowerCase(); //change to all lowercase

  for (let i = 0; i < input.length; i++){
    if (i === 0) {newString += input[i].toUpperCase();} 
    else if (input[i] === " " && input[i + 1] === " "){/*do nothing on this loop*/} 
    else if (input[i] === " "){ //checks for " " at string index
      newString += " " + input[i + 1].toUpperCase(); // skips space and changes next character to uppercase
      i++ // increases loop counter by 1 to prevent duplicate characters after space is removed
    } 
    else {newString += input[i];} //adds string index character to 'newString' if " " not found
  };

  return newString; // returns output
};

const vowel = input => {
  newString = ""; //placeholder to store camelCase value
  input = input.toLowerCase(); //change to all lowercase
  vowelChar = ["a","e","i","o","u"]

  for (let i = 0; i < input.length; i++){
    if (){
    
    } else {newString += input[i];} //adds string index character to 'newString' if " " not found
  };

  return newString; // returns output
};

// TEST CASES //
console.log(vowel("this is a string"));
console.log(vowel("loopy lighthouse"));
console.log(vowel("supercAlifragAlisticexpialidocious"));
console.log(vowel("a  b  c  deefg Hi"));