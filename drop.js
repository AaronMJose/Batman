class Drop {
    constructor(x,y){
        var options ={
        restituition : 0.1,
        friction : 0.001
    }
    this.raindrop = Bodies.circle(x,y,5,options);
  this.radius = 5;
  World.add(world,this.raindrop);
}
display(){
var pos = this.raindrop.position;
push();
fill("white");
ellipseMode(RADIUS);
ellipse(pos.x,pos.y,this.radius,this.radius)
pop();
}

updatePosition(){
if(this.raindrop.position.y>height){
    Matter.Body.setPosition(this.raindrop,{x:random(0,400),y:random(0,400)});
}
}

}