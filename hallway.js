/* global createCanvas, Group , line, angleMode , DEGREES , createSprite , drawSprites , rect , fill , frameRate, LEFT_ARROW, RIGHT_ARROW, textAlign, hit, background, CENTER, key, keyCode, collideRectRect, width, height, color,keyDown*/
let student1;
let student2;
let student3;
// let hero;
let maincharacter;
let hit;
let leftWall;
let rightWall;
let boyle;
let eighthGraders;

// http://p5play.molleindustria.org/examples/index.html?fileName=pong.js
// http://p5play.molleindustria.org/examples/index.html?fileName=collisions2.js
function setup()
{
  createCanvas(400, 700);   
  // hero = createSprite(200,500,20,20);
  scene();
  genMainCharacter();
  student1 = createSprite(300,50,30,30);  
  student2 = createSprite(200,30,30,30);
  student3 = createSprite(100,10,30,30);
  eighthGraders = new Group();
  eighthGraders.add(student1)
  eighthGraders.add(student2)
  eighthGraders.add(student3)
}
function scene()
{
  hallway();
  stairs();
  door(0,400);
  door(0,300);
  door(0,200);
  door(0,100);
  door(379,400);
  door(379,300);
  door(379,200);
  door(379,100);
  //let boyle = genBoyle();
}
function door(x,y)
{
rect(x,y,20,40);
}
function hallway()
{
  leftWall = createSprite(0,0,20,1400);
  leftWall.immovable = true;
  rightWall = createSprite(400,0,20,1400);
  rightWall.immovable = true;
}
function stairs()
{
  rect(0,600,200,100);
  line(0,620,200,620);
  line(0,640,200,640);
  line(0,660,200,660);
  line(0,680,200,680);
  line(0,700,200,700);
}

function draw() {
  
  student1.setSpeed(12, 90);
  student2.setSpeed(13, 90);
  student3.setSpeed(11, 90);
  maincharacter.bounce(leftWall);
  maincharacter.bounce(rightWall);
  maincharacter.collide(eighthGraders);
  background(50);
  fill(255);
  if(keyDown(LEFT_ARROW))
     {
      maincharacter.position.x -= 10;   
     }
   if(keyDown(RIGHT_ARROW))
     {
      maincharacter.position.x += 10;   
     }
  drawSprites();
  
}



function genMainCharacter() {
  maincharacter = createSprite(
  200, 500, 40, 40);
  maincharacter.shapeColor = color(255);
  return maincharacter
}
function genBoyle() {     
  boyle = createSprite(
  width/2, height/2, 80, 80);
  boyle.shapeColor = color(111);
}
function genEightGraders() {
  var eighthGraders = createSprite(
  width/2, height/3, 40, 40);
  eighthGraders.shapeColor = color(57);
  return eighthGraders
}