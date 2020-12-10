const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var landindForm;
var gameState;
var rules;
var game;


function preload() {
    
}

function setup(){
   createCanvas(windowWidth,windowHeight);
   gameState="wait";
   landingForm=new LandingForm();
   game=new Game();
   
  

   

}

function draw(){
if(gameState==="wait"){
   landingForm.display();
}
   if(gameState==="rules"){
   rules.display();
   


}
if(gameState==="play"){
  game.start();
}
}





