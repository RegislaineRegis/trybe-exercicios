// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const elementoA = document.getElementById('href');
elementoA.addEventListener('click', chamaFuncao);

function chamaFuncao(event){
    event.preventDefault();
}
const elementoCheckBox = document.getElementById('input-checkbox');
elementoCheckBox.addEventListener('click', chamaFuncao2);

function chamaFuncao2(event){
    event.preventDefault();
}
const elementoKey = document.getElementById('input-text');
elementoKey.addEventListener('keypress', chamafuncao3);

function chamafuncao3(event){
    if(event.key !== "a"){
        event.preventDefault();
    }
}