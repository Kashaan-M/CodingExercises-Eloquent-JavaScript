const repeat = (n,action) => {
  for(let i = 0; i < n; i++) {
   action(i);
  }
};

const unless = (test, then) => {
  if(!test) then();
}
console.log( repeat(30, n => {
  unless(n%2 === 1, () => {
    console.log(n, ' is even');
  });
}));

