var wall;
var car1, car2, car3;
var speed1, speed2, speed3;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, 60, 400);
  wall.shapeColor = (80, 80, 80);
  car1 = createSprite(400, 100, 30, 30);
  car1.shapeColor = "white";
  car1.weight = random(400, 1500);
  speed1 = random(55, 90);
  car1.velocityX = speed1;
  car2 = createSprite(400, 200, 30, 30);
  car2.shapeColor = "white";
  car2.weight = random(400, 1500);
  speed2 = random(55, 90);
  car2.velocityX = speed2;
  car3 = createSprite(400, 300, 30, 30);
  car3.shapeColor = "white";
  car3.weight = random(400, 1500);
  speed3 = random(55, 90);
  car3.velocityX = speed3;
}

function draw() {
  //background(950,18,900);
  background("pink");  

if(wall.x - car1.x < wall.width/2 + car1.width/2){
  car1.velocityX = 0;
  var deformation = 0.5*car1.weight*speed1*speed1/22500 

  if(deformation <100) {
   car1.shapeColor = "green";
  }

  if(deformation >180){
    car1.shapeColor = "red";
  }

  if(deformation >100 
    && deformation <180){
    car1.shapeColor = "yellow";
  } 
}

if(wall.x - car2.x < wall.width/2 + car2.width/2){
  car2.velocityX = 0;
  var deformation1 = 0.5*car2.weight*speed2*speed2/22500 

  if(deformation1 <100) {
   car2.shapeColor = "green";
  }

  if(deformation1 >180){
    car2.shapeColor = "red";
  }

  if(deformation1 >100 
    && deformation1 <180){
    car2.shapeColor = "yellow";
  } 
}

if(wall.x - car3.x < wall.width/2 + car3.width/2){
  car3.velocityX = 0;
  var deformation2 = 0.5*car3.weight*speed3*speed3/22500 

  if(deformation2 <100) {
   car3.shapeColor = "green";
  }

  if(deformation2 >180){
    car3.shapeColor = "red";
  }

  if(deformation2 >100 
    && deformation2 <180){
    car3.shapeColor = "yellow";
  } 
}
  
  drawSprites();
}