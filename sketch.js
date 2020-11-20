
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
const MouseConstraint = Matter.MouseConstraint;
const Mouse =Matter.Mouse;


var Pendulum1,Pendulum2,Pendulum3,Pendulum4,Pendulum5;

var Sling1,Sling2,Sling3,Sling4,Sling5;



function setup() {
	canvas =createCanvas(windowWidth/2, windowHeight/1.5);
	rectMode(CENTER);  


	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	let options={
		mouse:canvasmouse
	};
	mConstraint=MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	//Create the Bodies Here.
	Pendulum1 = new Pendulum(180,230,255);
	Pendulum2 = new Pendulum(135,130,155);
	Pendulum3 = new Pendulum(290,330,55);
	Pendulum4 = new Pendulum(346,330,55);
	Pendulum5 = new Pendulum(400,330,55);

	
	Sling1 = new Sling(Pendulum1.body,{x:340,y:200});
	Sling2 = new Sling(Pendulum2.body,{x:490,y:200});
	Sling3 = new Sling(Pendulum3.body,{x:395,y:200});
	Sling4 = new Sling(Pendulum4.body,{x:560,y:200});
	Sling5 = new Sling(Pendulum5.body,{x:290,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  Pendulum1.display();
  Pendulum2.display();
 Pendulum3.display();
 Pendulum4.display();
  Pendulum5.display();
  
  Sling1.display();
  Sling2.display();
  Sling3.display();
  Sling4.display();
  Sling5.display();
  drawSprites();
 
}

function mouseDragged() {
    

      Matter.Body.setPosition(Pendulum1.body,{x:mouseX,y:mouseY});
  
    }


