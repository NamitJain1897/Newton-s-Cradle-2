const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var slingshot1,slingshot2,slingshot3,slingshot4,slingshot5;
var ball1,ball2,ball3,ball4,ball5;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	ball1 = new Ball(250,250,80,80);
	ball2 = new Ball(330,100,80,80);
	ball3 = new Ball(410,100,80,80);
	ball4 = new Ball(490,100,80,80);
	ball5 = new Ball(570,100,80,80);
	slingshot1 = new SlingShot(ball1.body,{x:250,y:50});
	slingshot2 = new SlingShot(ball2.body,{x:330,y:50});
	slingshot3 = new SlingShot(ball3.body,{x:410,y:50});
	slingshot4 = new SlingShot(ball4.body,{x:490,y:50});
	slingshot5 = new SlingShot(ball5.body,{x:570,y:50});
}

function draw(){
    
        background("black");

    Engine.update(engine);
    
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	slingshot1.display();
	slingshot2.display();
	slingshot3.display();
	slingshot4.display();
	slingshot5.display();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-10});
	}
   
}


function mouseReleased(){
    
}
