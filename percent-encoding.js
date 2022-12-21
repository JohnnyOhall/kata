/* Kata 5 - Percent Encoded String
In this exercise, we will be given a normal string of words and turn it into a
percent-encoded string by replacing all whitespace with %20.

note:  If there is whitespace on the outside of the string, like in our second
example above, you should only replace the whitespace within the string.
*/

const urlEncode = text => {
  const characters = text.trim().split('');

  characters.forEach((char, i) => char === ' ' && (characters[i] = '%20'));

  return characters.join('');
};

// TEST CASES //
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));