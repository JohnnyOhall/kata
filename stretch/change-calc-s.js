const calculateChange = function(total, cash) {
  let change = cash - total
  let giveBack = {};
  let remain = 0;

  switch (true) {
    case change >= 2000:
      remain = change % 2000;
      giveBack.twentyDollar = (change - remain) / 2000;
      change = remain;

      if (giveBack.twentyDollar === 0){
        delete giveBack.twentyDollar;
      }

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

    case change < 5 && change > 0:
      giveBack.penny = change
  }

  return giveBack
}


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));