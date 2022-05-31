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
One Problem
------------
One Problem with this code is the result will still return true even when the arrangement of values in the two object
doesn't align up
for example: deepEqual( [1,2,3],[1,3,2]) will return true
                             OR
             deepEqual( {'name': 28, 'age':'Kashaan'}, {'name':'Kashaan', 'age':28} ) will also return true
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
          result = Object.values(obj1).every( value => Object.values(obj2).includes(value) );
        // similar expression but this time with values or 'data' of the objects rather than their keys
        // result will be true if the values array of obj2 contains every value from the values array of 
        // obj 1
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

console.log(deepEqual({'name':27,'age':'Kashaan'}, {'name':'Kashaan','age':27}));