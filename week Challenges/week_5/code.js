let cardCal=document.querySelector('.content-cal');
let cardRes=document.querySelector('.col-result');

let data=[1,2,3,4,5,6,7,8,9,10]

function afficheCard(card1,card2){
    let el1="";
    let el2="";
    
    data.forEach(item=>{
        let id = `drag-${item}`;
        el1+=`
        <div class="col-grd">
            <div class="row-calcul">
                <p>9 x ${item} =</p>
            </div>
            <div class="row1" ">
                
            </div>
      </div>
        `
        el2+=`
            <div id="${id}" class="row2" draggable="true">
                ${9 * item}
             </div>
        `
    })
    card1.innerHTML=el1
    card2.innerHTML=el2
    testResult()
}

afficheCard(cardCal,cardRes)

function testResult() {
  let droppables = document.querySelectorAll('.row2');
  let dropZone = document.querySelectorAll('.row1');

  droppables.forEach(droppable => {
    droppable.addEventListener('dragstart', e => {
      e.dataTransfer.setData("text/plain", e.target.id);
    });
  });

  dropZone.forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
    });
    zone.addEventListener('drop', e => {
      e.preventDefault();
      const data = e.dataTransfer.getData("text/plain");
      const element = document.getElementById(data);
      element.style.width="100%"
      zone.appendChild(element);
    //   console.log(element.id,'test')
       compareValues(element,dropZone); 
    });
  });
}
/// test echoué ???
function compareValues(data, dropZone) {
    let tab = [];
    dropZone.forEach((val, index) => {
        console.log(data.id,index)
    //   if (index === parseInt(data.id.split('-')[1])) {
    //     tab.push(val);
    //     console.log(tab, 'mon tableau');
    //   }
    // });
    // if (tab.every(val => val !== null)) {
    //   console.log('vous avez gagné');
     })

    
    };
  