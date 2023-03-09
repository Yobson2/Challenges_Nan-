let btn=document.querySelector('button');
let input=document.querySelector('.input-text');
let paragraphe=document.querySelector('p');



btn.addEventListener('mouseover', ()=>{

    if(input.value !==0){
        input.value='je suis nanien'
    }else{
        alert("Please don't enter");
    }
   
})
input.addEventListener('input', ()=>{
    let data = input.value.split('').reverse().join('');
     paragraphe.textContent=data
})