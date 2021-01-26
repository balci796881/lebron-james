const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,object
var ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  var options = {
    isStatic:true
  }
ground = Bodies.rectangle(200,365,400,35,options)
World.add(world,ground)
console.log(ground)
var objectoptions = {
  restitution:1.32
}
object = Bodies.circle(150,180,35,objectoptions)
  World.add(world,object)

}

function draw() {
  background(255,25,55);
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,35)
  ellipseMode(RADIUS)  
  ellipse(object.position.x,object.position.y,35,35)
}