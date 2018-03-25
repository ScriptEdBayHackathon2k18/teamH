/* global width, height, Group, createCanvas, collideDebug, createSprite, textAlign, background, noStroke, fill, text, color, CENTER, keyCode, key, drawSprites, LEFT_ARROW, RIGHT_ARROW, hit, collideRectRect, windowHeight, windowWidth, collidePointPoint */ 

var maincharacter;
var hit;
var eighthgraders;
var boyle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  maincharacter = createSprite(
    width/2, height/3, 40, 40);
  
  maincharacter.shapeColor = color(255);
  
  
    boyle = createSprite(
    width/2, height/2, 80, 80);
  
  boyle.shapeColor = color(111);
  
  eighthgraders = createSprite(
    width/2, height/3, 40, 40);
  
  eighthgraders.shapeColor = color(152);


}

function draw() {
  background(50);
  fill(255);
  textAlign(CENTER, CENTER);
  drawSprites();
  hit = collideRectRect(eighthgraders.x,eighthgraders.y, maincharacter.x,maincharacter.y, 50, 50);
  if (hit){
  print("colliding? " + hit);  
  }

}

function randomWithRange(min, max){
   var range = (max - min) + 1;     
   return (Math.random() * range) + min;
}

function genEightGraders(count, stagger) {
  var eighthGraders = new Group();
  var eighthGrader = createSprite(width/2, height/3, 40, 40);
  for(var i=0; i<count; i++)
    {  
      eighthGraders.add(createSprite(width/2, height/3, randomWithRange(40), 40));
    }
  return eighthgraders
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    maincharacter.setSpeed(10, 0);
  }
  else if (keyCode == LEFT_ARROW) {
    maincharacter.setSpeed(10, 180);
  }
  else if (key == ' ') {
    maincharacter.setSpeed(0, 0);
  }
  return false;
}
