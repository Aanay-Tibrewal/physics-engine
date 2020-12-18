const Engine = Matter .Engine;
const Bodies = Matter. Bodies;
const World = Matter.World;
var engine, world;
 var ball;
 var ground;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var option2 = {
    restitution:0.5
  }
  ball = Bodies.circle(200, 100, 20,option2);
  World.add(world, ball);
 
  var options = {
  isStatic:true
  }
  ground = Bodies.rectangle(200,380,400,20,options);
  World.add(world,ground);
}

function draw() {
  background(0);
  Engine.update(engine);
  ellipseMode(RADIUS)
  ellipse (ball.position.x, ball.position.y, 20);
  rectMode(CENTER)
  rect (ground.position.x,ground.position.y,400,20);
  drawSprites();
}