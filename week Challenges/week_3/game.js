let cmdAdd=document.querySelector('.commande-add');
let cmdDelete=document.querySelector('.commande-delete');
let card=document.querySelector('.content-dés')

let tabDes=[];
let sum = 0;

cmdAdd.addEventListener('click',()=>{
    addDes()
    
})
cmdDelete.addEventListener('click',()=>{
    deleteDes()
})
function addDes() {
    let de = `<div class="dice">            
      <div class="face front">?</div>
      <div class="face back"></div>
      <div class="face top"></div>
      <div class="face bottom"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>`;
    tabDes.push(de);
    if (tabDes.length <= 5) {
      card.innerHTML = tabDes.join('');
    } else {
      alert('Vous avez ajouté le nombre requis.');
      cmdAdd.disabled = true;
    }
    
    let data = document.querySelectorAll('.dice');
    let sum = 0;
    data.forEach(item => {
      item.addEventListener('click', () => {
        data.forEach(element => {
          setTimeout(() => {
            element.classList.add('add-animated');
            
            // Met à jour le texte de l'élément avec un nombre aléatoire
            element.children[0].innerText = randomDice();
  
            sum = 0;
            data.forEach(item => {
              sum += parseInt(item.children[0].innerText);
            });
            setTimeout(() => {
  
              // Après 1 seconde, supprime la classe "add-animated" pour terminer l'animation
              element.classList.remove('add-animated');
            }, 1000);
          }, 100);
        });
        alert(`La somme de tous les dés est ${sum}.`);
      });
    });
  }
  
function deleteDes() {
    if (tabDes.length !== 0) {
      let data = document.querySelectorAll('.dice');
      const dataArray = Array.from(data);
      dataArray.reverse();
      
      // Supprime chaque élément dans l'ordre inverse
      dataArray.forEach(element => {
        element.remove();
      });
      cmdAdd.disabled = false;
      // Vide le tableau de dés
      tabDes = [];
    } else {
      alert('Vous avez tous supprimé.');
    }
  }
  

 function randomDice() {
    let result = Math.floor(Math.random() * 6) + 1;
    return result;
  }
  
  

