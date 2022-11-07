/* Kata 4 - Instructors Names
In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.
*/

const instructorWithLongestName = instructors => {
  let result = []; //empty array placeholder for object containing name with longer character length
  let charCount = 0; //empty value to compare string counts & determine largest

  instructors.forEach(x => {
    if (charCount < x.name.length){ //compare 'charCount' value to name key length inside array object
      result = x; //replace array index 0 with object containing key 'name' with longest string length
      charCount = x.name.length; //set higher limit for 'charCount'
    }
  });

  return result; // return array object with name key containing longest string length
}

// TEST CASES //
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));