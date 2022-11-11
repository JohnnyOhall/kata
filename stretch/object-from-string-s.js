/* JS Object From URL Encoded String
In this exercise, we will be given a url encoded string of key-value pairs, and we will have to turn 
it into a JavaScript object.
*/

const urlDecode = function(text) {
  //Placeholder variables
  let obj1 = {}; let word = ""; let lastWord = ""; let replace = "";

  for (x of text){ //Creates object key each time '=' is encountered, checks for new object key after '&'
    if (x === "=") {obj1[word] = ""; lastWord = word; word = "";} 
    else if (x === "&") {obj1[lastWord] = word; word = "";} 
    else {word += x} //Adds anything following new object key as key value
  }

  obj1[lastWord] = word //adds final key value if multiple keys are added

  // Loop checks key values for %20 and replaces with space and replace key value with modified
  for (const [x, y] of Object.entries(obj1)){
    for (z = 0; z < y.length; z++){
      if (y[z] === "%" && y[z+1] === "2" && y[z+2] === "0"){ //if %20 is found add " "
        replace += " "
        z += 2 //skips next two string index
      } else {replace += y[z]} //adds current string index if space not req.
    } 
    obj1[x] = replace; replace = ""; //replaces key value with modified string
  }
  return obj1
};

// TEST CASES //
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);