class Enemy1{
    constructor(){

        enemy1 = createSprite(random(1,1000),50,40,20);
        enemy1.addImage(obstacle_1);
        this.image=loadImage("mario/obstacle1.jpg")
        this.visibility=255;
    }
    display(){
       
     push();
     visibility=visibility-10;
     tint(255,visibility)
   image(this.image,500,600);
   pop();
     
   enemy1.velocityX=0;
   enemy1.velocityY=1.5;
   
   //enemygrp.add(enemy1)
   drawSprites();
    }
}