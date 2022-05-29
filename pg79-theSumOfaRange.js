const range = (start, end ,step = 1) => {
  let arr = [];
  if(step > 0) {
    for(start; start <= end; start+= step) {
      arr.push(start);
    }
  } else {
    for(start; start >=end; start+= step) {
      arr.push(start);
    }
  }
  return arr;
}
console.log(range(5,2,-1));


const sum = (arr) => {
  let sum2 = 0;
  for(let item of arr) {
    sum2 += item;
  }
  return sum2;
}

//console.log(sum(range(1,10)));
