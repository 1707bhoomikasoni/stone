var car,wall
var speed,weight

function setup() {
  createCanvas(600,400);
 car=createSprite(20,300,10,10)
car.shapeColor="red"
 wall=createSprite(300,300,10,40) 
wall.shapeColor="blue"

 speed=random(30,80)
 car.velocityX=speed;
weight=random(400,700)

}

function draw() {
  background(255,255,255);  
 if(wall.x-car.x<car.width/2+wall.width/2) 
{
   car.velocityX=0
   var deformation=0.5*weight*speed*speed/1000
   if(deformation>180){
     car.shapeColor="pink"
   }
   if(deformation<180 && deformation>100){
     car.shapeColor="yellow"
   }
  if(deformation>100){
    car.shapeColor="green"
  }

}
  drawSprites();
}