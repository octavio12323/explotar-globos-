var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 
  background(0);
  //mover el fondo
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover el arco
  bow.y = World.mouseY
      
  
   //liberar la flecha al presionar la barra espaciadora
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //cambiar el valor de los globos aleatorios a 4 
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1: blueBalloon();
           break;
    case 2:redBalloon();
           break;
    case 3:greenBalloon();
           break;
    case 4:pinkBalloon();
          break;

  }}
  
  drawSprites();
}


//crear flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  var blueBalloon = Math.round(random(1,4));
  //usar createSprite (crear sprite) para el globo
  blueBalloon = createSprite(200,200,20,20);
  //usar addImage (agregar imagen) para el globo
 blueBalloon.addImage(blue_balloonImage);
  //agregar velocidad para hacer que se mueva el globo
  blueBalloon.velocityX = 3;
  blueBalloon.velocityY = 3;
  //cambiar la escala del globo
  blueBalloon.scale = 0.1;
  //agregar lifetime (ciclo de vida) al globo
  blueBalloon.lifetime = 150;
}

function greenBalloon() {
  var greenBalloon = Math.round(random(1,4));
  //usar createSprite para el globo 
  greenBalloon = createSprite(300,300,20,20);
  //usar addImage para el globo
  greenBalloon.addImage(green_balloonImage);
  //agregar velocidad para hacer que se mueva el globo
  greenBalloon.velocityX = 3;

  //cambiar la escala del globo
  greenBalloon.scale = 0.1;
  //agregar lifetime (ciclo de vida) al globo
  greenBalloon.lifetime = 150;
}
function pinkBalloon() {
  var pinkBalloon = Math.round(random(1,4));
  //usar createSprite para el globo 
  pinkBalloon = createSprite(400,400,20,20);
  //usar addImage para el globo
  pinkBalloon.addImage(pink_balloonImage);
  //agregar velocidad para hacer que se mueva el globo
  pinkBalloon.velocityX = 3;
  //cambiar la escala del globo
  pinkBalloon.scale = 0.1;
  //agregar lifetime (ciclo de vida) al globo
  pinkBalloon.lifetime = 150;
}