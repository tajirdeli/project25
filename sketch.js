const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,b2,b3,ball
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

ground=createSprite(width/2,height-35,width,10)
ground.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1=new BOX(385,620,200,20)
	b2=new BOX(485,580,20,100)
b3=new BOX(290,580,20,100)
ball=new BALL();
fill("Red");

ground=new Ground(700/2,670,700,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 // drawSprites();
 b1.display();
 b2.display();
 b3.display();
  ball.display();
  ground.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-120})
	}
}
