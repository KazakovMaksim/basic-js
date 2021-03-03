module.exports = function countCats(/* matrix */) {
  
  // remove line with error and write your code here
  let cat = "^^";
  let count = 0;
  let str;
  let arr = [];
  
        for (let i = 0; i < arguments.length; i++){
            arr = [];
            str = arguments[i].join(",");
            arr = str.split(",");
          for (let j = 0; j < arr.length; j++){
              if (arr[j] == cat) {
                  count++;
              }
          }
          
        }
        return count;

};