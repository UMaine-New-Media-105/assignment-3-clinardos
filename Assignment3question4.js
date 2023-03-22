// Linardos, Caitlin
// Assignment 3 -- Question 4

// I put all of my functions into seperate files to allow for the sketch to be more userfriendly

// Defining variables
let logo; 
let beanX;
let beanY;
let beanSpeedX;
let beanSpeedY;
let beanDiameter;
let cupX;
let cupY;
let cupdiameter;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  // Initializing variables
  beanX = random(380);
  beanY = -50;
  beanDiameter = 1;
  beanSpeedX = 0;
  beanSpeedY = random(1, 7);
  cupX = mouseX;
  cupY = 230;
  cupDiameter = 2.5;
  logo = loadImage("coffeeShopLogo.png")
}

function draw() {
  coffeeShopBackground();

// This is the function that allows the coffee bean to drop
  mousePressed();
  
  addCoffeeCup(mouseX, cupY, cupDiameter);
}
