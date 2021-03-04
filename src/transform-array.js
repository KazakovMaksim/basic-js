module.exports = function transform(arr) {

  let array = [];
  
  for (let i = 0; i < arr.length; i++) {
    array[i] = arr[i];
  } 

if (array) {       
for (let i = 0; i < array.length; i++) {
           if (array[i] === "--discard-prev" && arr[i-1]) {
             array.splice(i-1,2); 
           }
           if (array[i] === "--discard-prev") {
             array.splice(i,1);
           }
            
           if (arr[i] === "--discard-next" && arr[i+1] && ((arr[i+2] == "--discard-prev") || (arr[i+2] == "--double-prev"))) {
            array.splice(i,3);
           }

           if (arr[i] === "--discard-next" && arr[i+1]) {
               array.splice(i,2);
          } if (arr[i] === "--discard-next") {
               array.splice(i,1);
            }
  
          if (arr[i] === "--double-next" && arr[i+1]) {
              array.splice(i,1,array[i+1]);
          } if (arr[i] === "--double-next") {
              array.splice(i,1);
            }
          
          if (array[i] === "--double-prev" && arr[i-1]) {
              array.splice(i,1,array[i-1]);
          } if (arr[i] === "--double-prev") {
              array.splice(i,1)
            }
}
} else return NaN;
return array;
   }
