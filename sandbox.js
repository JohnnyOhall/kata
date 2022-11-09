const organizeInstructors = function(instructors) {
  arr1 = [];
  obj1 = {};

  for (x of instructors){
    arr1.push(x.course)
  }
  
  uniq = [...new Set(arr1)];

  for (x of uniq){
    obj1[x] = [];
  }

  for (x of instructors){
    for (y of uniq){
      if (x.course === y){
        obj1[y].push(x.name)
      }
    }
  }

  return obj1
}

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