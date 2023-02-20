let canvas = document.getElementById("canvas");
let widthSquare = 20;
let heigthSquare = 20;
let x = 1;
let y = 1;
// default right
let direction=39; 
let increX=1;
let inscreY=0;

let snack = [
  [2, 3],
  [3, 3],
  [4, 3],
  [5, 3],
  [6, 3],
];
document.body.addEventListener("keydown", (e)=>{
  changeDirection(e.keyCode)
});
function changeDirection(keyCode) {
     
     if(keyCode == 39 && direction !=37){
      increX=1;
      inscreY=0;
      direction=keyCode;
     }
     if(keyCode == 37 && direction !=39){
      increX=-1;
      inscreY=0;
      direction=keyCode;
     }
     if(keyCode == 38 && direction!=40){
      increX=0;
      inscreY=-1;
      direction=keyCode;
     }
     if(keyCode == 40 && direction!=38){
      increX=0;
      inscreY=1;
      direction=keyCode;
     }
     
}

function moveSnack(){
  let [x,y]=snack[snack.length-1];
  snack.shift();
  snack.push([x + increX, y + inscreY]);
}

console.log(canvas);
let context = canvas.getContext("2d");

context.fillStyle = "red";

context.fillRect(x * widthSquare, y * heigthSquare, widthSquare, heigthSquare);

function drow(snacke) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snacke.length; i++) {
    const [x, y] = snacke[i];
    context.fillStyle = "orange";
    context.fillRect(
      x * widthSquare,
      y * heigthSquare,
      widthSquare,
      heigthSquare
    );
  }
}
drow(snack);

setInterval(() => { 
  moveSnack();
   drow(snack);
}, 100);
