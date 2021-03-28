const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
    calculateDepth(arr) {
    let currentDepth = 1
    let depth = 1;
          arr.forEach(elem => {
              if (Array.isArray(elem)) {
                currentDepth += this.calculateDepth(elem); 
                  if (currentDepth > depth) {
                    depth = currentDepth;
                  }
              currentDepth = 1;    
              }
          });
      return depth;
      }
  };