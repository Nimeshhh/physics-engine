const Engine = Matter.Engine
const World =Matter.World
const Bodies= Matter.Bodies

var engine,world

function setup() {
  createCanvas(400,400);
  engine= Engine.create()
  world=engine.world

var ground_option ={
  isStatic:true
}
  ground= Bodies.rectangle(200,390,200,20,ground_option)
  World.add(world,ground)

  var ball_option = {
    restitution :2.0
  }

  ball = Bodies.circle(200,100,20,ball_option)
  World.add(world,ball)
  

  var ball1_option={
    restitution :2.0
  }

  ball1 = Bodies.circle(300,100,20,ball1_option)
  World.add(world,ball1)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)

ellipseMode(RADIUS)
ellipse(ball1.position.x,ball1.position.y,20,20)


  drawSprites();
}
