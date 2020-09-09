var bullet
var wall
var bullet_speed
var bullet_weight
var IsTouchingTarget
var thickness
function setup() {
  createCanvas(800,400);
  bullet_speed = Math.round(random(223,321))
  bullet_weight = Math.round(random(30,52))
  IsTouchingTarget=0;

  thickness = Math.round(random(22,83))
  
  bullet = createSprite(50,200,40/2,20/2);
  bullet.shapeColor = "black"
  
  wall = createSprite(700,200,thickness,200);
  wall.shapeColor = "blue";

  bullet.velocityX = bullet_speed


  }
function draw() {
  background(255,255,255);  
  
  text("Speed: "+ bullet_speed+" mph",50,25);
  text("Weight: "+ bullet_weight + " lbs",50,75);
  text("Wall Width: "+ thickness,50,125);

  
  
  


  text("Damage: " + Math.round(((0.5 * bullet_speed * bullet_speed*bullet_weight) / (thickness * thickness * thickness))),600,25);
  

  
  
  if (bullet.isTouching(wall)) {
    bullet.velocityX=0;
    var Damage= Math.round(((0.5 * bullet_speed * bullet_speed*bullet_weight) / (thickness * thickness * thickness)));
    console.log(Damage)
      if (Damage>10) {
        wall.shapeColor = "red";
      
      }
    
      if (Damage<10 || Damage === 10){
        wall.shapeColor = "green";
        console.log("hi")
      }
    
  }
  
  
    
  
  drawSprites();
}