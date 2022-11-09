/* Kata 15 - Organizing Instructors
In this exercise, we will be given a list of instructors and we will create a 
single object to organize them based on their course.
*/

const organizeInstructors = instructors => {
  let arr1 = []; let obj1 = {}; let uniq = []; //empty containers

  for (let x of instructors) {arr1.push(x.course);} //add courses to new array
  
  uniq = [...new Set(arr1)]; //build new array with only unique values

  for (let x of uniq) {obj1[x] = [];}; //Build object with keys for each array index

  for (let x of instructors){
    for (let y of uniq){
      if (x.course === y) {obj1[y].push(x.name);}
    } //Push names linked to coures into object key arrays
  };

  return obj1 // return result
}


// TEST CASES //
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));