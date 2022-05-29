function countChar(str, character) {
  let characters = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] == character) {
      characters +=1;
    }
  }
  return characters;
}

console.log(countChar('BehBaveBB', 'B'));
