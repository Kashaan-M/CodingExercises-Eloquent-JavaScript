function isEven(num) {
  let number = Math.abs(num);
  if(number === 0) {
    return true;
  } else if(number === 1) {
    return false;
  }else {
    return isEven(number - 2);
  }

}
console.log(isEven(-28));

