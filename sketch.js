var john , bground ;
var arrow, arrowImg;
var bg,johnImg ; 
var edges ;
var boulder,boulderImg ; 
var lionImg,pantherImg,cheetahImg,rhinoImg;
var  lion , Panther, Rhino , Cheetah ;
var score=0;
var lionG,pantherG,rhinoG,cheetahG,arrowG;

function preload () {
bg = loadImage("images/Bg.jpg");
johnImg = loadAnimation("images/John.png");
lionImg = loadAnimation("images/Lion.png","images/Lion_2png");
pantherImg = loadAnimation("images/Panther.png","images/Panther_2.png");
rhinoImg = loadAnimation("images/Rhino1.png","images/Rhino 2 .png");
cheetahImg = loadAnimation("images/Cheetah.png" , "images/Cheetah2.png");
arrowImg = loadImage("images/Arrow.png");
}

function setup() {
  createCanvas(400,400);

  lionG = createGroup();
  pantherG= createGroup();
  rhinoG = createGroup();
  cheetahG = createGroup();
  arrowG = createGroup();
 
  bground = createSprite(0,0,400,400);
  bground.addImage(bg);
  bground.velocityX = -2;
  bground.x= bground.width/2;
 
 john =  createSprite(380, 200, 20, 70);
 john.addAnimation("jumping",johnImg);
 john.scale=0.7; 

   
}
function draw() {
  background(0); 

  if (bground.x<0) {

    bground.x= bground.width/2;
  }
  
  john.y=World.mouseY;

  
  drawSprites();

}

function spawnLion () {
   lion = createSprite(0 , randomNumber(20 , 370) ,10 , 10);
  lion.addAnimation("running" , lionImg);
  lion.velocityX = 3;
  lion.lifetime = 150;
  lion.scale=0.1;
  lionG.add(lion);
  }
  
  function spawnPanther () {
     Panther = createSprite(0 , randomNumber(20 , 370) ,10 , 10);
    Panther.addAnimation("running" , pantherImg);
    Panther.velocityX = 3;
    Panther.lifetime = 150;
    Panther.scale=0.1;
    pantherG.add(Panther);
    }

    function spawnRhino () {
       Rhino = createSprite(0 , randomNumber(20 , 370) ,10 , 10);
      Rhino.addAnimation("running" , rhinoImg);
      Rhino.velocityX = 3;
      Rhino.lifetime = 150;
      Rhino.scale=0.1;
      rhinoG.add(Rhino);
      }

      function spawnCheetah () {
         Cheetah = createSprite(0 , randomNumber(20 , 370) ,10 , 10);
        Cheetah.addAnimation("running" , cheetahImg);
        Cheetah.velocityX = 3;
        Cheetah.lifetime = 150;
        Cheetah.scale=0.1;
        cheetahG.add(Cheetah);
        }

        function createArrow () {
         arrow = createSprite(100,100,60,10); 
         arrow.addImage(arrowImg);
         arrow.y=john.y;
         arrow.velocityX=-4;
         arrow.lifetime=100;
         arrow.scale=0.1;
         arrowG.add(arrow);
        }
  
