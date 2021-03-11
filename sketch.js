var bullet,wall;
var speed,weight,thickness;

function setup(){
createCanvas(1000,400);

thickness=random(22,83);

bullet=createSprite(10,200,50,10);

wall=createSprite(950,200,thickness,height/2);

speed=random(25,80);
weight=random(25,30);




}

function draw(){
  background("black");

  bullet.velocityX=speed; 
  
  
if(wall.x-bullet.x<(bullet.width+wall.width/2)){
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
 if(deformation>180){ 
   bullet.shapeColor=("yellow")
 }
 if(deformation<180 && deformation>100){
  bullet.shapeColor=("green")
 }

 if(deformation<100){
  bullet.shapeColor=("red")
 }
}

  drawSprites(); 

}

 


function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge+lwall.x;

if(bulletRightEdge>=wallLeftEdge)
 {
  return true;
 }
  return false;
}
