/* Kata 7 - In the Air Tonight
The new smart parking lot in Codeville was a big hit! Next on your list to 
tackle is the air quality. You've decided that you want to install air 
pollution sensors around the city to monitor air quality and identify 
problem areas. We need to write the code for the sensors to trigger a special 
message when the air is too polluted.
*/

const checkAir = (samples, threshold) => {
  
  let dirtySum = 0; let totalSum = 0; //Placeholders for sum of index occurances of dirty vs total
  let airQuality = 0; // Placeholder to calculate % of dirty air (dirty / total)

  for (check of samples) {
    totalSum++; // increase total each loop

    if (check === "dirty") { // IF array index = dirty, increase 'dirtySum'
      dirtySum++;
    };
  };

  airQuality = dirtySum / totalSum // Calculate % of dirty air (dirty / total)

  if (airQuality < threshold) {return "Clean"} // If 'airQuality' < than threshold return clean
  else {return "Polluted"}; // If 'airQuality' > than threshold return Polluted
};

// TEST CASES //
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))