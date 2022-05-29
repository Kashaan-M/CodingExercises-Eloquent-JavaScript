const reverseArray = (arr) => {
  let newArr = [];
  for(let i = arr.length-1; i >=0 ; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray([1,2,3,4,5,6,7,8,9,11,41,65,765]));

