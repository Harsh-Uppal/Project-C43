// JavaScript source code
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//All Variables
let Hour, Minute, Second;

function setup() {

    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;

    //Give values to variables
    Hour = hour();
    Minute = minute();
    Second = second();

    camera.positionX = -20;
    camera.positionY = -200;

}

function draw() {
    background("black");
    Engine.update(engine);

    translate(200, 200);
    //display objects
    angleMode(DEGREES);

    fill("grey");
    ellipse(0,0,250,250);

    //seconds
    Second = second();
    push();
    stroke("cyan");
    strokeWeight(8.5);
    rotate(map(Second, 0, 60, 0, 360));
    translate(0, 0);
    line(0, 0, 0, 85);
    pop();

    //minutes
    Minute = minute();
    push();
    stroke("lime");
    strokeWeight(7);
    rotate(map(Minute, 0, 60, 0, 360));
    translate(0, 0);
    line(0, 0, 0, 100);
    pop();

    //hours
    Hour = hour();
    push();
    stroke("yellow");
    strokeWeight(10);
    rotate(map(Hour, 0, 60, 0, 360));
    translate(0, 0);
    line(0, 0, 0, 70);
    pop();

    noStroke();

    fill("red");
    ellipse(0, 0, 15, 15);
} 
