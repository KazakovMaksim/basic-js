module.exports = function repeater(str, options) {
  let result = "";
  
  str = String(str);
  options.addition = String(options.addition);
  
  if (options.repeatTimes) {
       
      for (let i = 0; i < options.repeatTimes; i++) {
          result += str;
         
         if (options.additionRepeatTimes && options.addition) {
                  
             for (let j = 0; j < options.additionRepeatTimes; j++) {
                      result += options.addition;
                 if (options.additionSeparator && (j < options.additionRepeatTimes - 1) ) {
                   result += options.additionSeparator
                 } else if (j < options.additionRepeatTimes - 1) {result += "|"}
             } 
         }

        if (options.separator && (i < options.repeatTimes-1)) {
            result += options.separator; 
        } else if (i < options.repeatTimes-1) {
            result += "+";   
          }
    
         }
         return result;
  
} else { 
  result += str;

  if (options.additionRepeatTimes && options.addition) {
                  
    for (let j = 0; j < options.additionRepeatTimes; j++) {
             result += options.addition;
        if (options.additionSeparator && (j < options.additionRepeatTimes - 1) ) {
          result += options.additionSeparator
        } else if (j < options.additionRepeatTimes - 1) {result += "|"}
    } 
}  if (options.addition) {
        result += options.addition;
    }
  
};
return result;
}
  