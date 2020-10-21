
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxbase,boxleft,boxright;
var package;
var canvas;

var helicoptorImg,packageImg;

function preload(){
	helicopterImg= loadImage("helicopter.png");
	
	packageImg=loadImage("package.png");
}

function setup() {
	canvas=createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;

	package = new Package(400,80,50,50);
	boxbase = new Box(400,490,200,20);
	boxleft=  new Box(300,450,20,100);
	boxright=  new Box(500,450,20,100);
    
	
	
}


function draw() {	
  
  background(0);
  Engine.update(engine);

  package.display();
  boxbase.display();
  boxright.display();
  boxleft.display();
  
  image(helicopterImg,250,30,350,100);
 

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
	Body.setStatic(package.body,false);
	
  }
}



