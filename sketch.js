var krishna,ground;

function preload(){
ground=loadImage("track.jpg")
  
}



function setup() {
  createCanvas(displayWidth-80,displayHeight-200);
 
 //ground=createSprite((displayWidth-80)/2,displayHeight/2,displayWidth-80,400)
 //ground.shapeColor=("black");
 krishna=createSprite((displayWidth-80)/2,50,50,50);
 krishna.shapeColor=("red")
 if(frameCount%10===0){
   var enemy = createSprite(random(1,300),20,10,20);
   enemy.shapeColor=("green");
 }
}

function draw() {
  background(255,255,255);
  image(ground,0,-(displayHeight*4),displayWidth,displayHeight*5)
  drawSprites();
}

