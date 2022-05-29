/*
=======  Given an array convert it to a list data structure  ======= 

IMPORTANT: Skipping Ahead, This function does pretty well job of converting array to  list except that when the array contains another array or JavaScript Object then this function fails. I think Regular Expressions will cover that but I am too lazy to revise my understanding of Regular expressions (atleast for now)


Note: List is a nested set of JavaScript Objects 
  for example 

      let list = {
        value : 0,
        rest : {
          value: 1,
          rest : {
            value : 2
            rest : null
            }
          }
        }
TO DO: build a function arrayToList that does the following 

    ['a', 'b', 3, [1,2],'c' ]    ====>  list = {
                                          value : 'a',
                                          rest : {
                                            value : 'b',
                                            rest : {
                                              value : 3,
                                              rest : {
                                                value : [1,2],
                                                rest: {
                                                  value : 'c',
                                                  rest : null
                                                  }
                                                }
                                              }
                                            }
                                          }
*/
const arrayToList = (arr) => {

  let list = `{"value": "0","rest" : `;                             // initialized a list String (which we will parse into a JSON object later) with a value property of 0 a rest property which we will "concatenate" from our given array "arr" 

  let entries = `{"value":`;                                      // entries string will be manipulated to get the values stored in "arr" and add them to entries 

  for(let i = 0; i < arr.length; i++) {

    if ( i === arr.length - 1) {                                  // adding to the end of entries string so that we get "rest": null and close it off with our }}} later using a for loop with the 'j' iterator 
      
      entries = entries.concat( `"${arr[i]}","rest":null` );
      break;                                                      // break statement to break out of the first for loop. This is required for correct manipulation 

    }

    entries = entries.concat( ` "${arr[i]}","rest":{"value":`);     //  let's say arr = [1,2,3] then on first iteration through this loop 'entries' becomes ---> {"value": 1,"rest": {"value": <--- and on second iteration 'entries' becomes ---> {"value": 1,"rest":{"value": 2,"rest":{"value": <----  and so on  
  }
  
  list = list.concat(entries);                                    // simple. using concat() we concatenate 'list'  with 'entries' binding (which has finished iterating through the first loop) 
  
  for(let j = 0; j <= arr.length; j++) {
    list = list.concat(`}`);                                      //  this second loop is used to add the correct number of closing curly brackets ' } ' to the end of our list string
    }
//  console.log('list = ',list,'\ntypeof = ',typeof list);
  return JSON.parse(list);
}
console.log(arrayToList([1,2,3,4,5,6,7,8]));
// try nesting another array or object inside the argument to arrayToList
// for example arrayToList(["a",[1,2],"b",4]). Check the results.The function sort of breaks away because
// we have nested another 'Object' inside the argument to arrayToList. If I figure out a regular expression then this
// problem can be solved
