const calculateChange = function(total, cash) {
  let change = cash - total
  let giveBack = {};

 const twentyDollar = totalChange => {
    let remain = totalChange % 2000
    giveBack.twentyDollar = (totalChange - remain) / 2000
    tenDollar(remain);
  };

 const tenDollar = totalChange => {
    let remain = totalChange % 1000;
    giveBack.tenDollar = (totalChange - remain) / 1000;

    if (giveBack.tenDollar === 0){
      delete giveBack.tenDollar;
      fiveDollar(remain);
    } else {fiveDollar(remain);};
  };

 const fiveDollar = totalChange => {
    let remain = totalChange % 500;
    giveBack.fiveDollar = (totalChange - remain) / 500;

    if (giveBack.fiveDollar === 0){
      delete giveBack.fiveDollar;
      twoDollar(remain);
    } else {twoDollar(remain);};
  };

  const twoDollar = totalChange => {
    let remain = totalChange % 200;
    giveBack.twoDollar = (totalChange - remain) / 200;

    if (giveBack.twoDollar === 0){
      delete giveBack.twoDollar;
      oneDollar(remain);
    } else {oneDollar(remain);};
  };

  const oneDollar = totalChange => {
    let remain = totalChange % 100;
    giveBack.oneDollar = (totalChange - remain) / 100;

    if (giveBack.oneDollar === 0){
      delete giveBack.oneDollar
      quarter(remain);
    } else {quarter(remain);};
  };

  const quarter = totalChange => {
    let remain = totalChange % 25;
    giveBack.quarter = (totalChange - remain) / 25;

    if (giveBack.quarter === 0){
      delete giveBack.quarter;
      dime(remain);
    } else {dime(remain);};
  };

  const dime = totalChange => {
    let remain = totalChange % 10;
    giveBack.dime = (totalChange - remain) / 10;
    
    if (giveBack.dime === 0){
      delete giveBack.dime;
      nickle(remain);
    } else {nickle(remain);};
  };

  const nickle = totalChange => {
    let remain = totalChange % 5;
    giveBack.nickle = (totalChange - remain) / 5;

    if (giveBack.nickle === 0){
      delete giveBack.nickle;
      penny(remain);
    } else {penny(remain);};
  }

  const penny = totalChange => {
    if (totalChange > 0){
      giveBack.penny = totalChange;
    }
  }


 const startpoint = startAmt => {
  if (startAmt >= 2000){
    twentyDollar(change);
  } 
  else if (startAmt >= 1000){
    tenDollar(change);
  } 
  else if (startAmt >= 500){
    fiveDollar(change);
  } 
  else if (startAmt >= 200){
    twoDollar(change);
  } 
  else if (startAmt >= 100){
    oneDollar(change);
  } 
  else if (startAmt >= 25){
    quarter(change);
  } 
  else if (startAmt >= 10){
    dime(change);
  } 
  else if (startAmt >= 5){
    nickle(change);
  } 
  else {giveBack.penny = change}
 }

 startpoint(change)

 return giveBack;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));