module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  console.log(arguments);
  arr = {};
  arr["turns"] = Math.pow(2,disksNumber) - 1;
  arr["seconds"] = Math.floor((Math.pow(2,disksNumber) - 1) / (turnsSpeed / 3600));
  console.log(arr);
  return arr;

};
// console.log(argument);


// assert.deepEqual(calculateHanoi(9, 4308), {turns: 31, seconds: 27});