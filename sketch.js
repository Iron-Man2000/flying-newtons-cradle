
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var world, engine;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter = 50;

	//Create the Bodies Here.
	bob1 = new bob(width/2-bobDiameter, height/4+500, bobDiameter);
	//bob2 = new bob(250, 300, 50);
	//bob3 = new bob(200, 300, 50);
	//bob4 = new bob(150, 300, 50);
	//bob5 = new bob(100, 300, 50);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	rope1 = new rope(bob1.body, roofStructure.body, -bobDiameter*2, 0);
	//rope2 = new rope(bob2.body, roofStructure.body, -bobDiameter*2, 0);
	//rope3 = new rope(bob3.body, roofStructure.body, -bobDiameter*2, 0);
	//rope4 = new rope(bob4.body, roofStructure.body, -50*2, 0);
	//rope5 = new rope(bob5.body, roofStructure.body, -50*2, 0);

	roofStructure = new roof(width/2, height/4, width/7, 30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  bob1.display();
  //bob2.display();
  //bob3.display();
  //bob4.display();
  //bob5.display();

  rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();
  
  roofStructure.display();

  drawSprites();
 
}



