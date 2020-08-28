class Umbrella {
    constructor(x,y){
        var options ={
       isStatic : true
    }
    this.img = loadImage('walking man/walking_1.png');
    this.umbrella = Bodies.circle(x,y,50,options);
  this.radius = 50;
  World.add(world,this.umbrella);
}
display(){
var pos = this.umbrella.position;
push();
imageMode(CENTER);
image(this.img,pos.x,pos.y,300,300)
pop();
}



}