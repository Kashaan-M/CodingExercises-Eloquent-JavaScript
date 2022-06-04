/*
 Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays.
*/
let array  = [ [1,2,3], [{'name':'Kashaan'}], ['a','b','c']];

console.log(array.reduce( (flat,current) => flat.concat(current), []));
