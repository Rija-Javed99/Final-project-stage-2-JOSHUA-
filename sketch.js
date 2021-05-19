var backgroundImage;
var city;
var alien


function preload(){
backgroundImage=loadImage("images/background.jpg")
}

function setup() {
  createCanvas(1200,800);
  
 city=createSprite(10,350.1500,1010)
 city.addImage(backgroundImage)
 city.scale=1
 city.x=city.width/2;
 city.velocityX=-3

 alien = createSprite(90,700, 40,70);

}

function draw() {
 background(255);
  
 if(city.x <520){
  city.x = 700;
}


  drawSprites();
 
}

