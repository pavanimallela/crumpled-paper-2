
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binImg =loadImage("Images/dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(200,200,20);
	ground= new Ground(800,height,1600,20);
	bin1 = new Dustbin (1050,680,50,30);
	bin2 = new Dustbin (850,600,30,190);
	bin3 = new Dustbin (1075,600,30,190);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  image(binImg,850,490,230,210);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW)
{
	Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75});
}}


