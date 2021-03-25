const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: "",

// getLength returns the current chain length as a number;  
 getLength() {
      return this.result.length;
  },
      
// addLink(value) adds a link containing a string representation of the value to the chain;
 addLink(value) {
     if (this.result.length) {
       this.result += (value !== undefined)? `~~( ${value} )` : `~~( ( ) )`; // no arguments + empty link
// console.log(`in addLink ${this.result}`);
     } else {
       this.result += (value !== undefined)? `( ${value} )` : `~~( ( ) )`;
       }
     return this;
  },
  
// removeLink(position) removes a chain link in the specified position;
  removeLink(position) {
    let arr = [];
    
    // check invalid position|fractional number|nonexistent link
    if (Number.isInteger(position) || typeof(position) == Number) {
      arr = this.result.split("~~");
      arr.splice(position - 1,1);
      this.result = arr.join("~~");
    } else {
      this.result = "";
      throw new Error();
    }
// console.log(`in removeLink ${this.result}`);
    return this;  
    
  },
  
  reverseChain() {
// console.log(`before reverse ${this.result}`); 
    this.result = this.result.split("~~").reverse().join("~~");
// console.log(`after reverse ${this.result.split("~~").reverse().join("~~")}`)
    return this;
  },
  
  finishChain() {
    let chain = this.result;
    this.result = "";
    return chain;
  },
};
// console.log(`chainMaker= ${chainMaker}`);

module.exports = chainMaker;