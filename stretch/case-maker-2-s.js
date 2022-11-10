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

  for (let i = 0; i < input.length; i++){
    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"){
      newString += input[i].toUpperCase()
    } else {newString += input[i];} //adds string index character to 'newString' if " " not found
  };

  return newString; // returns output
};

const consonant = input => {
  newString = ""; //placeholder to store camelCase value
  input = input.toUpperCase(); //change to all lowercase

  for (let i = 0; i < input.length; i++){
    if (input[i] === "A" || input[i] === "E" || input[i] === "I" || input[i] === "O" || input[i] === "U"){
      newString += input[i].toLowerCase()
    } else {newString += input[i];} //adds string index character to 'newString' if " " not found
  };

  return newString; // returns output
};

const makeCase = function(input, caseType) {
  
  let caseArr = [];
  let caseSorted = [];
  

  if (typeof caseType === "object"){
    for (x of caseType) {
      caseArr.push(x);
    } 
  } else {
    switch (caseType){
      case "camel": return camelCase(input); 
      case "pascal": return pascalCase(input);
      case "snake": return snakeCase(input); 
      case "kebab": return kebabCase(input);
      case "title": return titleCase(input); 
      case "vowel": return vowel(input); 
      case "consonant": return consonant(input); 
      case "upper": return input.toUpperCase;
      case "lower": return input.toLowerCase;
    }
  }

  for (y of caseArr){
    if (y === "camel" || y === "pascal" || y === "snake" || y === "kebab" || y === "title" ){
      caseSorted.push(y)
    }
  }

  for (y of caseArr){
    if (y === "vowel" || y === "consonant"){
      caseSorted.push(y)
    }
  }

  for (y of caseArr){
    if (y === "upper" || y === "lower"){
      caseSorted.push(y)
    }
  }

  caseSorted.forEach( x => {
    switch (x){
      case "camel": input = camelCase(input); break;
      case "pascal": input = pascalCase(input); break;
      case "snake": input = snakeCase(input); break;
      case "kebab": input = kebabCase(input); break;
      case "title": input = titleCase(input); break;
      case "vowel": input = vowel(input); break;
      case "consonant": input = consonant(input); break;
      case "upper": input = input.toUpperCase(); break;
      case "lower": input.toLowerCase(); break;
    }
  })

  return input;

}


// TEST CASES //
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));