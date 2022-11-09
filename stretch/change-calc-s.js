/* Kata 14 - Change Calculator
Create a function named calculateChange that takes in a total amount of a bill 
and the total cash given to pay that bill. Return a new object that describes 
the total amount of change for the cashier to give back. Omit any types of 
change that you shouldn't give back, i.e. if you don't give back a twenty dollar 
bill, don't include it in the results.
*/

const calculateChange = function(total, cash) {
  let change = cash - total; //Calculate change left after purchase
  let giveBack = {}; //Object to store what change to give a function return
  let remain = 0; //placeholder to store remainder and change to pass to each case

  switch (true) {
    case change >= 2000: // checks if twentyDollar change req.
      remain = change % 2000; //Calc change to pass down to next case
      giveBack.twentyDollar = (change - remain) / 2000; //calc total twenty req.
      change = remain; //moves remainder to change for next case
      //check if any twentyDollar change given, if not - removes from obj
      if (giveBack.twentyDollar === 0){
        delete giveBack.twentyDollar;
      }

    //All cases but last follow same method as first case
    case change >= 1000: 
      remain = change % 1000; 
      giveBack.tenDollar = (change - remain) / 1000; 
      change = remain; 

      if (giveBack.tenDollar === 0){
        delete giveBack.tenDollar;
      }

    case change >= 500:
      remain = change % 500;
      giveBack.fiveDollar = (change - remain) / 500;
      change = remain;

      if (giveBack.fiveDollar === 0){
        delete giveBack.fiveDollar;
      }

    case change >= 200:
      remain = change % 200;
      giveBack.twoDollar = (change - remain) / 200;
      change = remain;
  
      if (giveBack.twoDollar === 0){
        delete giveBack.twoDollar;
      }

    case change >= 100:
      remain = change % 100;
      giveBack.oneDollar = (change - remain) / 100;
      change = remain;
    
      if (giveBack.oneDollar === 0){
        delete giveBack.oneDollar;
      }

    case change >= 25:
      remain = change % 25;
      giveBack.quarter = (change - remain) / 25;
      change = remain;
      
      if (giveBack.quarter === 0){
       delete giveBack.quarter;
      }

    case change >= 10:
      remain = change % 10; 
      giveBack.dime = (change - remain) / 10;
      change = remain;
        
      if (giveBack.dime === 0){
        delete giveBack.dime;
      }
 
    case change >= 5:
      remain = change % 5;
      giveBack.nickle = (change - remain) / 5;
      change = remain;
          
      if (giveBack.nickle === 0){
        delete giveBack.nickle;
      }
    
    // check if any pennies are required
    case change < 5 && change > 0:
      giveBack.penny = change
  }

  return giveBack //returns total change after calcs
}

// TEST CASES //
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));