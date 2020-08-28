const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var  thun1,thun2,thun3,thun4;
var umbrella;
var drops = [];
var maxDrop = 100;
var rand;
var thunder;
var engine,world;

function preload(){
    thun1 = loadImage('thunder/1.png')
    thun2 = loadImage('thunder/2.png')
    thun3 = loadImage('thunder/3.png')
    thun4 = loadImage('thunder/4.png')

}

function setup(){
   createCanvas(400,700)
     engine = Engine.create();
     World = engine.world;
     umbrella = new Umbrella(200,500);
     for(var i = 0; i < maxDrop ; i++){
         drops.push(new createDrop(random(0,400),random(0,400)));
     }
}

function draw(){
  Engine.update(engine);
  background(0);
  
rand = math.round(random(1,4));
if(frameCount%80 === 0){
thunder = createSprite(random(10,370),random(10,30),10,10);
switch(rand){
    case 1 : thunder.addImage(thun1);
    break;
    case 2 : thunder.addImage(thun2);
    break;
    case 3 : thunder.addImage(thun3);
    break;
    case 4 : thunder.addImage(thun4);
    break;
default:break;
}

}
umbrella.display();
for(var k = 0;k < maxDrop ; k++){
    drops[k].display();
    drops[k].updatePosition();
}


  drawSprites();
}   

