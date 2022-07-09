// *** Write your code here***
const resultDisplay = document.querySelector('input[name="displayResult"]');
const clearB = document.querySelector('input[name="clear"]');
const delB = document.querySelector('input[name="delete"]');

let calcNumbers = (bValue) =>{
    resultDisplay.value = resultDisplay.value + bValue
}

function clearData(){
    clearB.addEventListener('click',()=>{
        resultDisplay.value = " ";
        console.log(resultDisplay.value);
    })
}
function del(){
    delB.addEventListener('click',()=>{
        let displayval = resultDisplay.value;
       let displayR = displayval.split('');
        displayR.pop('');
        console.log (displayR);
        resultDisplay.value = displayR.join(''); 
    })
}
