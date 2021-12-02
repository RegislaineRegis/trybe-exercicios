let word ='regislaine';
let wordAux ='';
//console.log(word[word.length -1]);


for(let index = 1; index <= word.length; index +=1){
  wordAux += word[word.length - index];   

}
console.log(" a palavra :", word, "invertida: ", wordAux);