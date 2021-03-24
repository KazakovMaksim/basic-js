const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let now = new Date(date);
  let season;
  if (!date.getTime()) {
    return Error;
  }
  // console.log(`date=${date} type=${typeof(date)}`);
  // console.log(now.getMonth());
  if (arguments.length !== 0  ) {
    season = (now.getMonth() > 1 && now.getMonth() < 5)? "spring" :
    (now.getMonth()> 4 && now.getMonth() < 8)? "summer" :
    (now.getMonth() > 7 && now.getMonth() < 11)? "autumn" : 
    (now.getMonth() == 0 || now.getMonth() == 11 || now.getMonth() == 1 )? "winter" : Error;
  } 
  // console.log(season);
  return season;
} 