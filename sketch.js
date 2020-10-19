var bullet,wall;
var speed;
var weight;
var wallThickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,55);
  wallThickness = random(30,85);

  wall = createSprite(1300, 200, wallThickness, 200);
 
  bullet = createSprite(50, 200, 40, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

}

function draw() {
  background(0,0,0); 
  
   var crash = (0.5 * weight*speed*speed) / (wallThickness * wallThickness * wallThickness);

  text("RED = C-, YELLOW = B-, GREEN = A-",300,300);
  

  if(bullet.isTouching (wall)){
  bullet.velocityX = 0;
  text("WALL DAMAGE RATE = " + Math.round(crash),300,350);
  if(crash > 10 ){
		bullet.shapeColor = "red";	
  }else if(crash <= 10 ){
		bullet.shapeColor = "green";
  }

  }
  drawSprites();
}