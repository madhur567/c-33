const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,bgImg;
var snowflake,snowImg, boy1,boy1Img,boy2,boy2Img;


function preload(){
bgImg = loadImage ("snow1.jpg");
boy1Img= loadImage("download.jpg")
boy2Img=loadImage("images.jpg")
snowImg= loadImage("snow4.webp")

}

function setup() {
  createCanvas(1600,700);

  boy1= createSprite(400,350,10,10)
boy1.addImage(boy1Img);

boy2= createSprite(1200,350,10,10)
boy2.addImage(boy2Img);
}

function draw() {
  background(bgImg);  

  if(keyDown("space")){
boy2.x = boy2.x-5;
  }

  if(boy2.isTouching(boy1)){
    boy2.x=600
  }

  snowfall()
  drawSprites();
}

function snowfall(){
  if(frameCount % 60 === 0){
  var snow = createSprite(Math.round(random(80,1300)),50,10,10)
  snow.addImage (snowImg);
  snow.scale=0.2

  snow.velocityY = 4

  }
}