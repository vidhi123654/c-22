 const Engine=Matter.Engine
 const World=Matter.World
 const Bodies=Matter.Bodies
var engine,world,ground

function setup() {
createCanvas(800,400);

engine=Engine.create()
world=engine.world
ball=Bodies.circle(200,100,30,{restitution:1})
World.add(world,ball)

ground=Bodies.rectangle(200,400,200,20,{isStatic:true})
World.add(world,ground)
 
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
 ellipse(ball.position.x,ball.position.y,30,30)
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,200,20)


}