/* Kata 13 - Talking Calendar
We will be given a date as a string (not a Date object). The date will 
always be formatted as YYYY/MM/DD. We will have to parse the given string 
and produce a human readable date.
*/

const talkingCalendar = date => {
  //Function to extract day of date and convert to ordinal (1st, 2nd etc)
  const dayExtract = date => {
    let extract = ""; let result = "";
    let ordinalArr = [ //List of ordinal classifications
      {ordinal: "st", numbers: [1,21,31]},
      {ordinal: "nd", numbers: [2,22]},
      {ordinal: "rd", numbers: [3,23]},
      {ordinal: "th", numbers: [4,5,6,7,8,9,10,11,12,
        13,14,15,16,17,18,19,20,24,25,26,27,28,29,30]}
    ];
    
    //Loop only through last 2 index of date
    for (x = 8; x <= 9; x++) {extract += date[x];};
    extract = Number(result = extract); //Extract last 2 digits of date & change to #
   
    //Find day result extracted above and check against ordinal classification
    for (let x = 0; x < ordinalArr.length; x++) {
      for (let i = 0; i < ordinalArr[x].numbers.length; i++){
        if (extract === ordinalArr[x].numbers[i]){
          result = extract + ordinalArr[x].ordinal; // Return day with ordinal added
        }
      }
    };

    return result;
  };

  const monthExtract = date => {
    let extract = ""; let result = "";
    let monthArr = [ //Array of months, month[index - 1]
      "January", "February", "March",
      "April", "May", "June",
      "July", "August", "September",
      "October", "November", "December"
    ];
  
    for (let x = 5; x <= 6;x++){
      extract += date[x] //extract middle digits from date
    }
    
    //Change extraction back to # and compare against month index
    extract = Number(extract);
    result = monthArr[extract - 1] //Return month string instead of #
    return result
  };

  const yearExtract = date => {
    result = "";
    
    //Extract first 4 digits of index and return
    for (let x = 0; x <= 3; x++){
      result += date[x]
    }
    
    return Number(result)
  };

  //Return date in requested format.
  return dateString = monthExtract(date) + " " + 
  dayExtract(date) + ", " + yearExtract (date)
};


// TEST CASES //
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));