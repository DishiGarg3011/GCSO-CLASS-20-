var car, wall, speed, weight ; 


function setup() {
  createCanvas(900,400);
  wall  = createSprite(850,200,50,height/2);
   wall.shapeColor = "orange"
   

   car= createSprite(50,200,50,50);
   car.shapeColor = "blue";

   
   speed = random (55,90);
   weight = random (400,1500);
}

function draw() {

  background("black");  

  car.velocityX = speed;

  if(wall.x- car.x < (car.width+wall.width)/2){
    
    deformation = 0.5 * weight * speed * speed / 22500;
    car.velocityX = 0;

    if (deformation>180){

      car.shapeColor = "red";
    
    }
    if (deformation<180 && deformation>100){

      car.shapeColor = "yellow";
    
    }

    if (deformation<100){

      car.shapeColor = "green";
    
    }
   
  }



  drawSprites();
}