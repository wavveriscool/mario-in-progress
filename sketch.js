var mario;
var blockback, obstacles;
var PLAY, END;
var Marios
var invisibleGround;



function preload(){
  Marios = loadAnimation("mario.png");
 blockbacks = loadImage("background.png");
}

function setup() {
    createCanvas(400,400);

 mario = createSprite(200,200);
 mario.scale=0.04;
 mario.addAnimation("mariostill", Marios);
 blockback = createSprite(200,200);

 blockback.addImage( blockbacks);
 //invisibleGround = createSprite(200,190,400,10);
 // invisibleGround.visible = false;
  blockback.velocityX=4;
}

function draw() {
   // background(0);
    
    
    
    
    drawSprites();
}