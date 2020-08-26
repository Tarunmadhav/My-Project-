const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var krishna,ground;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7;
var enemygrp;
var obstacle_1,obstacle_2;
var marior,mariol;
var marioattack,mario;
var score=0;
var visibility=255;
function preload(){
ground=loadImage("track.jpg")
 obstacle_1=loadImage("mario/obstacle1.jpg")
 obstacle_2=loadImage("mario/obstacle2.jpg") 
 marior=loadImage("mario/right.jpg")
 mariol=loadImage("mario/left.png")
 marioattack=loadImage("mario/fire.png")
 mario=loadImage("mario/mario.jpg")
}



function setup() {
  createCanvas(displayWidth,displayHeight-200);
  engine = Engine.create();
  world = engine.world;

  enemy1 = createSprite(random(1,1000),50,40,20);
  enemy1.visible=false;
  
  enemy2 = createSprite(random(1,1000),50,40,20);
  enemy2.visible=false;

  enemy3 = createSprite(random(1,1000),20,40,20);
  enemy3.visible=false;

  enemy4 = createSprite(random(1,1000),50,40,20);
  enemy4.visible=false;

  enemy5 = createSprite(random(1,1000),50,40,20);
  enemy5.visible=false;


  enemy6 = createSprite(random(1,1000),50,40,20);
  enemy6.visible=false;

  enemy7 = createSprite(random(1,1000),50,40,20);
  enemy7.visible=false;
  krishna=createSprite((displayWidth-80)/2,50,50,50);
  krishna.addImage("krish",mario)
  krishna.scale=0.1;
 //krishna.shapeColor=("red")
}

function draw() {
  Engine.update(engine);

  background(255,255,255);
  textSize(50);
  fill("white")
  image(ground,0,-(displayHeight*4),displayWidth,displayHeight*5)
   if(frameCount===200){
   enemy1.visible=true;
   enemy1.addImage("ob",obstacle_1)
   enemy1.velocityX=0;
   enemy1.velocityY=1.5;

 }
 if(frameCount===370){
  enemy2.visible=true;
  enemy2.addImage("ob2",obstacle_2)
  enemy2.shapeColor=("pink");
  enemy2.velocityX=0;
  enemy2.velocityY=3;

} if(frameCount===500){
  enemy3.visible=true;
  enemy3.shapeColor=("black");
  enemy3.velocityX=0;
  enemy3.velocityY=3;
  
}
if(frameCount===610){
   enemy4.visible=true;
   enemy4.shapeColor=("white");
   enemy4.velocityX=0;
   enemy4.velocityY=3;

}
if(frameCount===690){
  enemy5.visible=true;
  enemy5.shapeColor=("blue");
  enemy5.velocityX=0;
  enemy5.velocityY=3;

}
if(frameCount===750){
  enemy6.visible=true;
  enemy6.shapeColor=("grey");
  enemy6.velocityX=0;
  enemy6.velocityY=3;
  
}
if(frameCount===780){
  enemy7.visible=true;
  enemy7.shapeColor=("yellow");
  enemy7.velocityX=0;
  enemy7.velocityY=3;

}
if(keyDown(UP_ARROW)){
  krishna.addImage("krish",marioattack)

  krishna.velocityY=-9
  krishna.velocityX=0

}

if(keyWentUp(UP_ARROW)){
  krishna.velocityY=0
  krishna.velocityX=0
  krishna.addImage("krish",mario)
}
if(keyDown(DOWN_ARROW)){
  krishna.addImage("krish",marior)

  krishna.velocityY=9
  krishna.velocityX=0

}
if(keyWentUp(DOWN_ARROW)){
  krishna.velocityY=0
    krishna.velocityX=0
    krishna.addImage("krish",mario)
  }
  
if(keyDown(RIGHT_ARROW)){
  krishna.velocityX=9
  krishna.velocityY=0

}
if(keyWentUp(RIGHT_ARROW)){
  krishna.velocityY=0
    krishna.velocityX=0
  
  }
  
if(keyDown(LEFT_ARROW)){
  krishna.velocityX=-9
  krishna.velocityY=0

}
if(keyWentUp(LEFT_ARROW)){
  krishna.velocityY=0
    krishna.velocityX=0
  
  }
  
edges=createEdgeSprites();
krishna.collide(edges[0]);
krishna.collide(edges[1]);
krishna.collide(edges[3]);
//destroying enemy1.
if(enemy1.isTouching(krishna)){
  enemy1.destroy()
  score=score+5;
}
//console.log(frameCount);
if(frameCount>240&&frameCount<270){
  image(obstacle_1,500,600)
  visibility=visibility-10;
  tint(255,visibility)
image(obstacle_1,500,600)
}

if(frameCount>=270){
  krishna.addImage("krish",mario)
}

//destroying enemy2
if(enemy2.isTouching(krishna)){
  enemy2.destroy()
  score=score+5;
}
//console.log(frameCount);
if(frameCount>400&&frameCount<415){
  image(obstacle_2,500,600)
  visibility=visibility-10;
  tint(255,visibility)
image(obstacle_2,500,600)
}

//destrying enemy3
if(enemy3.isTouching(krishna)){
  enemy3.destroy()
  score=score+5;
}


drawSprites();
text("Score:"+score,displayWidth-300,50);

}

