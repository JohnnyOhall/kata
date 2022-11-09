const multiplicationTable = maxValue => {
  table = ""; temp = ""; // Empty placeholders for storing loop data
  init = 0; // To check if first line or not during inital loop
  
  for (let x = 1; x <= maxValue; x++) { // Loop throw X row
    for (let y = 1; y <= maxValue;y++) { 
      temp += (x * y) + " "; // multiple x value by y on each loop
    }

    if (init === 0){table += temp;}  //start first row without \n char
    else {table += "\n" + temp;} //start new line for each x loop
    
    temp = ""; // clears temp so results are not doubled on same line
    init++ //increases init so each loop after first include \n char
  };

  return table; // return result
};
// TEST CASES //
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));