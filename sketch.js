var krishna,ground;

function preload(){
ground=loadImage("track.jpg")
  
}



function setup() {
  createCanvas(displayWidth,displayHeight-200);
 
 //ground=createSprite((displayWidth-80)/2,displayHeight/2,displayWidth-80,400)
 //ground.shapeColor=("black");
 krishna=createSprite((displayWidth-80)/2,50,50,50);
 krishna.shapeColor=("red")

}

function draw() {
  background(255,255,255);


  image(ground,0,-(displayHeight*4),displayWidth,displayHeight*5)
   if(frameCount===200){
   var enemy1 = createSprite(random(1,1000),50,40,20);
  enemy1.shapeColor=("green");
   enemy1.velocityX=0;
   enemy1.velocityY=3;
 }
 if(frameCount===370){
  var enemy2 = createSprite(random(1,1000),50,40,20);
 enemy2.shapeColor=("pink");
  enemy2.velocityX=0;
  enemy2.velocityY=3;
} if(frameCount===500){
  var enemy3 = createSprite(random(1,1000),20,40,20);
 enemy3.shapeColor=("black");
  enemy3.velocityX=0;
  enemy3.velocityY=3;
}
if(frameCount===610){
  var enemy4 = createSprite(random(1,1000),50,40,20);
 enemy4.shapeColor=("white");
  enemy4.velocityX=0;
  enemy4.velocityY=3;
}
if(frameCount===690){
  var enemy5 = createSprite(random(1,1000),50,40,20);
 enemy5.shapeColor=("blue");
  enemy5.velocityX=0;
  enemy5.velocityY=3;
}
if(frameCount===750){
  var enemy6 = createSprite(random(1,1000),50,40,20);
 enemy6.shapeColor=("grey");
  enemy6.velocityX=0;
  enemy6.velocityY=3;
}
if(frameCount===780){
  var enemy7 = createSprite(random(1,1000),50,40,20);
 enemy7.shapeColor=("yellow");
  enemy7.velocityX=0;
  enemy7.velocityY=3;
}
if(keyDown(UP_ARROW)){
  krishna.velocityY=-5
}
if(keyDown(DOWN_ARROW)){
  krishna.velocityY=5
}
if(keyDown(RIGHT_ARROW)){
  krishna.velocityX=5
}
if(keyDown(LEFT_ARROW)){
  krishna.velocityX=-5
}
edges=createEdgeSprites();
krishna.collide(edges[0]);
krishna.collide(edges[1]);
krishna.collide(edges[3]);
  drawSprites();
}

