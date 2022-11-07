/* Kata 6 - SmartParking
The system will use special parking sensors to keep track of all parking spots and 
monitor which ones are available. Every time a vehicle enters the parking lot, the 
system directs them to an available spot for their particular vehicle type, or 
notifies them that no spots are available.
*/

const whereCanIPark = (spots,vehicle) => {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      
      //Check for spot for "regular" vehicles
      if (vehicle === "regular") {
        if (spots[y][x] === "R") { //Regular vehicles can park in R only
          return [x, y]; //Return coordinates to park
        };
      
      // Check for spot for "small" vehicles
      } else if (vehicle === "small") {
        if (spots[y][x] === "R" || spots[y][x] === "S") { //small vehicles can park in R || S
          return [x, y]; //Return coordinates to park
        };

      // Check for spot for "motorcycle" vehicles
      } else if (vehicle === "motorcycle"){
        if (spots[y][x] === "R" || spots[y][x] === "S" || spots[y][x] === "M") { //motorcycle can park in R || S || M
          return [x,y]; //Return coordinates to park
        };
      };
    };
  };
  
  return false; // Return false if no parking spots available
};

// TEST CASES //
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))