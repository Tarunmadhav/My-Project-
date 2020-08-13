const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var krishna,ground;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7;
var enemygrp;
var obstacle_1,obstacle_2;
var marior,mariol;
var marioattack,mario;
var a=0;
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
 //ground=createSprite((displayWidth-80)/2,displayHeight/2,displayWidth-80,400)
 //ground.shapeColor=("black");
 krishna=createSprite((displayWidth-80)/2,50,50,50);
 krishna.addImage("krish",mario)
 //krishna.shapeColor=("red")

enemygrp=new Group();
}

function draw() {
  Engine.update(engine);

  background(255,255,255);
  textSize(50);
  fill("white")
  image(ground,0,-(displayHeight*4),displayWidth,displayHeight*5)
   if(frameCount===200){
     enemy1.visible=true;
     enemy1.addImage("ob",obstacle_2)
      enemy1.shapeColor=("green");
   enemy1.velocityX=0;
   enemy1.velocityY=1.5;
   enemygrp.add(enemy1)
 }
 if(frameCount===370){
   enemy2 = createSprite(random(1,1000),50,40,20);
 enemy2.shapeColor=("pink");
  enemy2.velocityX=0;
  enemy2.velocityY=3;
  enemygrp.add(enemy2)
} if(frameCount===500){
 enemy3 = createSprite(random(1,1000),20,40,20);
 enemy3.shapeColor=("black");
  enemy3.velocityX=0;
  enemy3.velocityY=3;
  enemygrp.add(enemy3)
}
if(frameCount===610){
 enemy4 = createSprite(random(1,1000),50,40,20);
 enemy4.shapeColor=("white");
  enemy4.velocityX=0;
  enemy4.velocityY=3;
  enemygrp.add(enemy4)
}
if(frameCount===690){
   enemy5 = createSprite(random(1,1000),50,40,20);
 enemy5.shapeColor=("blue");
  enemy5.velocityX=0;
  enemy5.velocityY=3;
  enemygrp.add(enemy5)
}
if(frameCount===750){
  enemy6 = createSprite(random(1,1000),50,40,20);
 enemy6.shapeColor=("grey");
  enemy6.velocityX=0;
  enemy6.velocityY=3;
  enemygrp.add(enemy6)
}
if(frameCount===780){
   enemy7 = createSprite(random(1,1000),50,40,20);
 enemy7.shapeColor=("yellow");
  enemy7.velocityX=0;
  enemy7.velocityY=3;
  enemygrp.add(enemy7)
}
if(keyDown(UP_ARROW)){
  a=1
  console.log(a)
  krishna.velocityY=-9
  krishna.velocityX=0

}
if(a===1){
  krishna.addImage("right",marioattack)
console.log(a)
}
if(keyWentUp(UP_ARROW)){
  krishna.velocityY=0
  krishna.velocityX=0

}
if(keyDown(DOWN_ARROW)){
  krishna.addImage("right",marior)

  krishna.velocityY=9
  krishna.velocityX=0

}
if(keyWentUp(DOWN_ARROW)){
  krishna.velocityY=0
    krishna.velocityX=0
  
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
if(enemy1.isTouching(krishna)){
   //enemy1.destroy()
  //enemygrp.destroyEach();
  //push();
  //krishna.visible=true
  visibility=visibility-10;
  tint(255,visibility)
image(obstacle_1,500,600)
//pop();
score=score+50
}
drawSprites();
text("Score:"+score,displayWidth-300,50);

}

