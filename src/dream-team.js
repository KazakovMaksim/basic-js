module.exports = function createDreamTeam(members) {

  let arr = [];
  let str;
  let k = 0;
        // console.log(members);
        if (!Array.isArray(members)) {
            return false; 
          }
          
        for (i = 0; i < members.length; i++) {
                           
            if (typeof members[i] === "string") {
               str = members[i];
                  
                  for (j = 0; j < str.length; j++){
                    if (str[j] !== " ") {
                     arr[k] = str[j];
                     k++;
                     break;
                     }
                    
                  }
               
            }
          
        }
  
        str = arr.join("").toUpperCase();
        arr = str.split('');
        str = arr.sort().join("");
          
        return str.toUpperCase();
  
    // remove line with error and write your code here
  };
  