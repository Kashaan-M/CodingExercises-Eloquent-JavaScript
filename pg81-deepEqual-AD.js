/*
 =======   write a function that takes either two values or two objects and checks if the values
 =======   or the values of the properties of the objects are equal .i.e., performs deep comparison than
 =======   our traditional == or === operators.
 Note: Two JavaScript Objects with same properties and same data (with different bindings) when compared
       with the '==' opearator or '===' operator doesn't produce correct results.That is why we need to 
       write a deep comparison function here.
for example: let obj1 = {'name':'Kashaan','gender':'male'} ; let obj2 = {'name':'Kashaan','gender':'male'}
             obj1 == obj2    // false
             obj1 === obj2   // false
             
             however let's say we have a third obj3 and we declare it like below

             let obj3 = obj1;
             obj3 == obj1   // true
             obj3 === obj1  // true

Problem Solved
------------
The previous problem with the alignment of values was solved.You can run below examples to verify it.
for example: deepEqual( [1,2,3],[1,3,2]) will return false
                             OR
             deepEqual( {'name': 28, 'age':'Kashaan'}, {'name':'Kashaan', 'age':28} ) will also return false
*/
const deepEqual =  (obj1,obj2) => {

  let result;
  // result variable will store a boolean value for various testing conditions based on the described problem
  // result will be true when the two values or the two objects are same; false otherwise.

  if(typeof obj1 === 'object' && typeof obj2 === 'object') {
    if (obj1 === null || obj2 === null) {
      // note : typeof null  gives 'object' because of some unknown reasons.This is a JavaScript thing so 
      // we need to account for this here
      result = false;
    } 
     else if (Object.keys(obj1).length !== Object.keys(obj2).length) {
       // quicktest here. if the properties of the two objects are not equal i.e. one has more other has less
       // then result should be false.
       result = false;
     }
      else if(Object.keys(obj1).every(key => Object.keys(obj2).includes(key)) ) {
        // read slowly here.The above else if condition essentially means if every property or key in obj1
        // is included in obj2 then run the below block of code
          let obj1Keys = Object.keys(obj1);
          let obj1Values = Object.values(obj1);
          let obj2Keys = Object.keys(obj2);
          let obj2Values = Object.values(obj2);
          result = obj1Keys.every( key => obj1Keys.indexOf(key) === obj2Keys.indexOf(key)) &&
                   obj1Values.every( value => obj1Values.indexOf(value) === obj2Values.indexOf(value));
        // this is a bit complex to read at first but essentially we are comparing two arrays containing the keys of obj1
        // and obj2 AND we are comparing two arrays containing the values of obj1 and obj2.If the index of every key
        // in obj1Keys array is equal to the index of the same key in obj2Keys array AND if the index of every value
        // in obj2Values array is equal to the index of the same value in obj2Values array then result will be true.
        // Otherwise (since we have used the '&&' operator) the result will be false
     }
   }
    else if(typeof obj1 === 'string' && typeof obj2 === 'string') {
      // this checks for string values instead of objects
      if (obj1 !== obj2) {
        result = false;
      }
      else {
        result = true;
      }
    } 
    else if(typeof obj1 === 'number' && typeof obj2 === 'number') {
      // this checks for number values instead of objects
      if(obj1 !== obj2) {
        result = false;
      }
      else {
        result = true;
      }
    }

     
  return result;

  };

console.log(deepEqual([1,2,3],[1,3,2]));
