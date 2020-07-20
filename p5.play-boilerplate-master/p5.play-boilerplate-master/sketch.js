const ENGINE = Matter.Engine;
const WORLD = Matter.World;
const BODIES = Matter.Bodies;

 var engine,world;

 var object

function setup() {
  createCanvas(400,400);
  engine = ENGINE.create();
  world = engine.world;
 var option2 =  {restitution:1}
 object = BODIES.circle(100, 200,20,option2);
 WORLD.add(world,object)


 var option = {isStatic:true}
 ground = BODIES.rectangle(200,380,400,20,option);
 WORLD.add(world,ground)

 console.log(object);
}

function draw() {
  background(0); 
  ENGINE.update(engine)
  rectMode(CENTER);
  ellipseMode(RADIUS)
  ellipse(object.position.x, object.position.y, 50, 50)
  rect(ground.position.x,ground.position.y,400,20);
  
}