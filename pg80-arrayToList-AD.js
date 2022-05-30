/*
=======  Given an array convert it to a list data structure  ======= 

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

  let list = `{"value": ${JSON.stringify(0)},"rest" : `;                             
  /* I have initialized the list binding with a value of "0" (JSON.stringify() is used through out this program so that
   all the property values-whether they be strings,numbers,arrays,objects- are converted to strings.

   This is important because we can then properly communicate this data to someone who needs it and he can make use of it.

   Earlier I was having a little trouble with this program. When the "arr" argument to 'arrayToList' function contained 
   nested arrays or nested objects then the earlier code wasn't quite good at handling them.

   Anyways I have initialized the list variable with a string which is "{"value":"0","rest": " at the start and will get 
   added to further down the road.

   */

  let entries = `{"value":`;
  /* entries string will be manipulated to get the values stored in "arr" and add them to entries*/ 

  for(let i = 0; i < arr.length; i++) {

    if ( i === arr.length - 1) {
      
      entries = entries.concat( `${JSON.stringify(arr[i])},"rest":null` );

      /* adding to the end of entries string so that we get "rest": null and close it off
       with our }}} later using a for loop with the 'j' iterator
       Note again we are using JSON.stringify but this time since we are iterating through the items inside
       our 'arr' array we are converting the items to string format per iteration
      */ 
      break;
      /* break statement to break out of the first for loop. This is required for correct manipulation  */

    }

    entries = entries.concat( ` ${JSON.stringify(arr[i])},"rest":{"value":`);
     /*  let's say arr = [1,2,3] then on first iteration through this loop 'entries' 
      becomes ---> {"value": 1,"rest": {"value": <--- and on second iteration 'entries' becomes
      ---> {"value": 1,"rest":{"value": 2,"rest":{"value": <----  and so on
      */ 
  }
  
  list = list.concat(entries);
     /* simple. using concat() we concatenate 'list'  with 'entries' binding
      (which has finished iterating through the first loop) */
  
  for(let j = 0; j <= arr.length; j++) {
    list = list.concat(`}`);
    /*  this second loop is used to add the correct number of closing curly brackets ' } '
     to the end of our list string */
    }
//  console.log('list = ',list,'\ntypeof = ',typeof list);
  return JSON.parse(list);
}
console.log(arrayToList(["a",[1,2],{"name":"Ali"},"because",65]));
