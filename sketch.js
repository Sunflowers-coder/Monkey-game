var monkey ,monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground
var bananaGroup, obstacleGroup
var score


function preload(){
  
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(600,600)
monkey = createSprite(60,515,20,20);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.2;
  
ground = createSprite(590,590,600,30)
ground.x = ground.width/2
ground.shapeColor = ("green")
console.log(ground.x)

obstaclesGroup= createGroup();
bananaGroup= createGroup();
  
score = 0;
}


function draw() {
background("skyBlue");
  
if(bananaGroup.isTouching(monkey)){
bananaGroup.destroyEach();
score = score + 1
}
  
if(ground.x<0){
    ground.x = ground.width/2
}


obstacles();
banana();
 
if(keyDown("space") && monkey.y >= 510) {
monkey.velocityY = -13;
}
monkey.velocityY = monkey.velocityY + 0.8

noStroke();
textFont("Times New roman");
fill("black");
textSize(15);
text("Bananas collected: "+ score, 10,30);
  
textFont("Times New roman");
textSize(15);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time: "+ survivalTime, 200,30);
  
monkey.collide(ground);

drawSprites();
}
function banana() {
if (frameCount % 120 == 0) {
var banana =createSprite(400,400,40,40)
banana.y =Math.round(random(120,200));
banana.addImage(bananaImage);
banana.velocityX = -3;
banana.lifetime = 200;
banana.scale = 0.2
bananaGroup.add(banana);
}
}
function obstacles() {
if (frameCount % 200 == 0) {
var obstacle=createSprite(400,400,40,40)
obstacle.y =Math.round(random(550,550));
obstacle.addImage(obstacleImage);
obstacle.velocityX = -3;
obstacle.lifetime = 100;
obstacle.scale = 0.2
}
}






