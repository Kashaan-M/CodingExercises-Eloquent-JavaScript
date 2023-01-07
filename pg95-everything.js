function every(arr,check) {
  for(let element of arr) {
    if(check(element)) {
      continue;
    } else {
      return false;
    }
  } return true;
}
// alternate 
function alt_Every(arr,check) {
  return !arr.some( element => !check(element));
  }
  
console.log(alt_Every([2,1,1],a => a >= 2));

