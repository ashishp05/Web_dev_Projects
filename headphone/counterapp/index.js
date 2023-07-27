const counterValue =document.querySelector('#zero');

// const inc =() =>{
//     let value = parseInt(counterValue.innerText);
//     value =value +1;
//     counterValue.innerText =value;

// }

// const dec =() =>{
//     let value =parseInt(counterValue.innerText);
//     value =value-1;
//     counterValue.innerText =value ;

// }
const minus =document.querySelector("#minus");
minus.addEventListener('click',function(){
    let value = parseInt(counterValue.innerText);
   value =value -1;
   counterValue.innerText =value;
});
const plus =document.querySelector("#plus");
plus.addEventListener('click',function(){
    let value = parseInt(counterValue.innerText);
   value =value +1;
   counterValue.innerText =value;
});