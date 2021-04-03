var tom,tomImage,tomWalking,tomImage2;
var jerry,jerryImage,jerryimage2;
var garden,gardenImage;


function preload() {
    tomImage = loadAnimation("cat1.png");
    tomWalking = loadAnimation("cat2.png","cat3.png");
    tomImage2 = loadAnimation("cat4.png");
  
    jerryImage = loadAnimation("mouse1.png");
    jerryimage2 = loadAnimation("mouse2.png","mouse3.png");
  jerryImage3 = loadAnimation("mouse4.png");
    gardenImage = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(900,700,10,10);
    tom.addAnimation("Tom",tomImage);
    tom.scale = 0.2;
    jerry = createSprite(200,700,10,10);
    jerry.addAnimation("Jerry",jerryImage);
    jerry.scale = 0.2;
    
}

function draw() {

    background(gardenImage);
   keyPressed();
  if(tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.addAnimation(tomImage2);
       jerry.addAnimation(jerryImage3);
   }
    drawSprites();
}


function keyPressed(){
if(keyDown(LEFT_ARROW)){
   jerry.addAnimation("Teasing",jerryimage2);
   jerry.changeAnimation("Teasing");
   jerry.frameDelay = 25;
   tom.x = tom.x-3;
   tom.addAnimation("Moving",tomWalking);
   tom.changeAnimation("Moving");
}
if(keyDown(RIGHT_ARROW)){
    jerry.addAnimation("Teasing",jerryimage2);
    jerry.changeAnimation("Teasing");
    jerry.frameDelay = 25;
    tom.x = tom.x+3;
    tom.addAnimation("Moving",tomWalking);
    tom.changeAnimation("Moving");
 }
  if(keyWentUp(LEFT_ARROW)|| keyWentUp(RIGHT_ARROW)){
    jerry.changeAnimation("Jerry",jerryImage);
    tom.changeAnimation("Tom",tomImage);
  }

}
