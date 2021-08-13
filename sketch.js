
var path;

function preload(){
  //pre-load images
  pathImg.loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.velocityY = 4;
  path.scale = 1.2;
  path.addImage("path2",pathImg);
}

function draw() {
  background("black");
  
  drawSprites();
}
 