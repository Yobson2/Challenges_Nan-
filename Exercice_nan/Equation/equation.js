
let a;
let b;
let c;
let delta;

let element=prompt('Entrez les nombres a,b et c :');
let tab=element.split(' ');


if(tab.length === 3 && tab.every((item)=>{return !isNaN(item)})){
   a=tab[0];
   b=tab[1];
   c=tab[2];

   delta= b*b - 4*a*c;
   if(delta < 0){
    alert('pas de solution réellle');
   }
   else if(delta > 0){
      let x1=Math.round(-b-Math.sqrt(delta)/2);
      let x2=Math.round(-b+Math.sqrt(delta)/2);
      alert("Deux solutions: x1=" + x1 + ", x2=" + x2)
   }else{
      let x=Math.round(-b/2*a);
      alert("Solution double: x=" + x)
   }
   
};

