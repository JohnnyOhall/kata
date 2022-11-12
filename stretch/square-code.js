/* Kata 18 - Square Code
One classic method for composing secret messages is called a square code. 
In this activity, we will be creating our own Square Code algorithm.
*/

const squareCode = function(message) {
  message = message.split(' ').join('') //remove spaces

  //Checks how long each array item needs to be
  let lineLength = (Math.ceil(Math.sqrt(message.length)))
  //placeholders  && spacer to build each array item
  let code = ""; let codeArr = []; let spacer = lineLength-1;

  //pushes new array item for every linelength in total message length
  for (let x = 0; x < message.length; x++) {
    if (spacer === x) {code += message[x]; spacer += lineLength;
      codeArr.push(code); code = "";}
    else {code += message[x];}} codeArr.push(code); code = "";

  /* John's original code - check why it doesn't work later!
  for (let y = 0; y < codeArr.length -1; y++){
    for (let x = 0; x < codeArr.length; x++){
      code += codeArr[x].slice(y,1)
    } 
    code += " "; 
  }
  */

  /* fixed without slice
    for (let y = 0; y < codeArr[0].length; y++){
    for (let x = 0; x < codeArr.length; x++){
      if(codeArr[x][y] !== undefined) code += codeArr[x][y];
    } code += " ";
  }

  return code;
  */
 
  let encodedCodeArr = Array.from({length: codeArr[0].length}, e => '');
  // The above creates an empty array with X number of strings, where X is 
  // the length of the square code


  // This loops through your codeArr and pushes each letter of the 
  // nested arrays into separate entries of the array created above
  for (let y = 0; y < codeArr.length; y++){
    for (let x = 0; x < codeArr[y].length; x++) {
      encodedCodeArr[x] += codeArr[y][x];
    }
  }

  // Join the encodedCodeArray with spaces
  return encodedCodeArr.join(" ");
};

// TEST CASES //
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));