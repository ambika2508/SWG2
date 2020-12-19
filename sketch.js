
var bgImg, a, d1, d2;
var drop3, gamestate = 1, drop2;
var button, button2, name1, intro, title, rules, flag = 0, okay;
var q1, q2, q3,s1,s2,s3,s4,s5,s6,b1,b2,b3,b4,b5,b6;
var scene ;
var score;

function preload(){
   bgImg = loadImage("bg.jpg")
  d1 = loadAnimation("drop1.png","drop2.png")
   d2 = loadAnimation("d1.png","d2.png")
   q1 = loadImage("sea.jpg")
   q2 = loadImage("sewer.jpg")
   q3 = loadImage("tap.jpg")
}

function setup() {
  createCanvas(800,500);
  scene=0
 score = 0;
  drop3 = createSprite(200,200,30,30)
  drop3.addAnimation('d1',d1)
  drop3.scale = 0.5;
  drop3.visible=false;
   
  s1=createSprite(200,250,400,400);
  s1.shapeColor="yellow";
  s1.visible=false;

  b1=createButton("Select")
  b1.position(100,450);
  b1.size(150,30);
  b1.hide();
  
  s2 = createSprite(600,250,400,400)
  s2.shapeColor = "green";
  s2.visible = false;
  
  b2 = createButton("Select")
  b2.position(530,450);
  b2.size(150,30);
  b1.hide();
//scene 1-->yellow
  s3=createSprite(200,250,400,400);
  s3.shapeColor="lightblue";
  s3.visible=false;

  b3=createButton("Select")
  b3.position(100,450);
  b3.size(150,30);
  b3.hide();
  
  s4 = createSprite(600,250,400,400)
  s4.shapeColor = "pink";
  s4.visible = false;
  
  b4 = createButton("Select")
  b4.position(530,450);
  b4.size(150,30);
  b4.hide();
  
  //scene 2-->green
  s5=createSprite(200,250,400,400);
  s5.shapeColor="orange";
  s5.visible=false;

  b5=createButton("Select")
  b5.position(100,450);
  b5.size(150,30);
  b5.hide();
  
  s6 = createSprite(600,250,400,400)
  s6.shapeColor = "brown";
  s6.visible = false;
  
  b6 = createButton("Select")
  b6.position(530,450);
  b6.size(150,30);
  b6.hide();
  
  drop2 = createSprite(400,300,30,30)
  drop2.addAnimation('d2',d2)
  drop2.scale = 0.2;
  drop2.visible=false;
 
  

   rules = createSprite(10,10,50,20)
   okay = createSprite(400,480,50,20)
   okay.visible = false;


  
}

function draw() {
  background(0); 
  drawSprites(); 
  
  if(mousePressedOver(rules)){
     flag = 1;
  }
  

if(flag === 1){
  info();
  drop3.visible= true;
}
if(flag === 2){
  okay.visible = false;
  flag = 0;
}

  if(gamestate === 0){
     start();
  }
  if(gamestate === 1){
   play();
   drop3.visible=false;
  
  }
  if(gamestate === 2){
    end();
  }
 
 
}
