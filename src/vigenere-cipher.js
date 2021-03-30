const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(val) {
    if (val === false ) {
      this.type = "reverse";
    } else {
      this.type = "direct";
      }
  }
 
  encrypt (word,key) {
     let newKey = "";
     let cipWord = "";
     const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let j = 0;
// console.log(`word = ${word}, key=${key}`);    
// console.log(word.toUpperCase());
    if (!word || !key) throw new Error();

     if (word.length >= key.length) {
       for (let i = 0; i < word.length ; i++) {
         if ( A.indexOf(word.toUpperCase()[i]) >= 0 ) {
               newKey += key[j];
               j++;
           if (j === key.length) j = 0;
         } else {
             newKey += word[i];
           }
// newKey - расширенный на длину word ключ, повторяет символы word вне алфавита

          if ( A.indexOf(word.toUpperCase()[i]) >= 0 ) {
            if ((A.indexOf(word.toUpperCase()[i])) + (A.indexOf(newKey.toUpperCase()[i]) +2 - 1) > 26) {
                   cipWord += A[A.indexOf(word.toUpperCase()[i]) + A.indexOf(newKey.toUpperCase()[i])+ 2 - 2 -26];
            } else {
                   cipWord += A[A.indexOf(word.toUpperCase()[i]) + A.indexOf(newKey.toUpperCase()[i]) + 2 - 2];
                   }
          } else {
              cipWord += word[i];
            }
       }
     } 
            if (word.length < key.length) {
              for (let i = 0; i < word.length ; i++) {
                 if ( A.indexOf(word.toUpperCase()[i]) >= 0 ) {
                   newKey += key[j];
                   j++;
                 } else {
                     newKey += word[i];
                   }
              
              if ( A.indexOf(word.toUpperCase()[i]) >= 0 ) {
                if ((A.indexOf(word.toUpperCase()[i])) + (A.indexOf(newKey.toUpperCase()[i]) +2 - 1) > 26) {
                       cipWord += A[A.indexOf(word.toUpperCase()[i]) + A.indexOf(newKey.toUpperCase()[i])+ 2 - 2 -26];
                } else {
                       cipWord += A[A.indexOf(word.toUpperCase()[i]) + A.indexOf(newKey.toUpperCase()[i]) + 2 - 2];
                       }
              } else {
                  cipWord += word[i];
                }
              }
            }
   return cipWord;
   
     
   }
   decrypt (word,key) {
    let newKey = "";
    let cipWord = "";
    const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let j = 0;

   if (!word || !key) throw new Error();

    if (word.length >= key.length) {
      for (let i = 0; i < word.length ; i++) {
        if ( A.indexOf(word.toUpperCase()[i]) >= 0 ) {
              newKey += key[j];
              j++;
          if (j === key.length) j = 0;
        } else {
            newKey += word[i];
          }
         if ( A.indexOf(word.toUpperCase()[i]) >= 0 ) {
           if (A.indexOf(word.toUpperCase()[i]) - A.indexOf(newKey.toUpperCase()[i]) >= 0) {
                  cipWord += A[A.indexOf(word.toUpperCase()[i]) - A.indexOf(newKey.toUpperCase()[i])];
           } else {
                  cipWord += A[A.indexOf(word.toUpperCase()[i]) - A.indexOf(newKey.toUpperCase()[i]) + 26];
                  }
         } else {
             cipWord += word[i];
           }
      }
    } 
           if (word.length < key.length) {
             for (let i = 0; i < word.length ; i++) {
                if ( A.indexOf(word.toUpperCase()[i]) >= 0 ) {
                  newKey += key[j];
                  j++;
                } else {
                    newKey += word[i];
                  }
             
             if ( A.indexOf(word.toUpperCase()[i]) >= 0 ) {
               if ((A.indexOf(word.toUpperCase()[i])) - (A.indexOf(newKey.toUpperCase()[i])) >= 0) {
                      cipWord += A[A.indexOf(word.toUpperCase()[i]) - A.indexOf(newKey.toUpperCase()[i])];
               } else {
                      cipWord += A[A.indexOf(word.toUpperCase()[i]) - A.indexOf(newKey.toUpperCase()[i]) + 26];
                      }
             } else {
                 cipWord += word[i];
               }
             }
           }
  return cipWord;  
  }
};


module.exports = VigenereCipheringMachine;
