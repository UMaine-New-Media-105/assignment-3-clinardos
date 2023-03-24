// Linardos, Caitlin
// Assignment 3 -- Question 4/5

// The goal of this game is to catch 95 espresso beans. If each esspresso bean represents 1 mg of caffiene. When you reach the goal of 95, you will have enough for a cup of coffee!
// To place this game you must, press the mouse in to open the cup and collect the beans.

// Defining variables
let logo;
let beanX;
let beanY;
let beanSpeedX;
let beanDiameter;
let beanIsFalling;
let beanIsCaught;
let points = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  // Initializing variables
  beanX = random(380);
  beanY = 0;
  beanDiameter = 1;
  beanSpeedX = 0;
  beanSpeedY = random(1, 10);
  logo = loadImage("coffeeShopLogo.png");
  beanIsFalling = false;
  beanIsCaught = false;
}

function draw() {
  // This is the background which is a seperate file
  coffeeShopBackground();

  // Point counter
  push();
  stroke("blue");
  strokeWeight(5);
  textSize(32);
  text(points, 350, 40);
  pop();

  // Making beans fall 
  push();
  beanX = beanX + beanSpeedX;

  beanY = beanY + beanSpeedY;

  addCoffeeBean(beanX, beanY, 0.8);

  // This allows the bean to restet 
  if (beanY >= height - 130) {
    beanIsFalling = false;
    beanY = 0;
    beanX = random(380);
  }
  
  // This lets you gain points when the beads are caught
  let d = dist(mouseX, 290, beanX, beanY);

  if (d <= 50) {
    beanCaught = true;
    points = points + 1;
  }
  // This is the "YOUVE WON" moment 
  if (points == 95) {
    textSize (40)
     fill ("rgb(255,10,205)")
    text ("You're Caffienated!", 20,80)
    noLoop ()
  }
  pop();

  addCoffeeCup(mouseX - 50, 220, 2.7);
}
//This is the function for the complete coffee cup
function addCoffeeCup(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("steelblue");
  noStroke();
  push();
  // This is a shadow that is only around the "cup"
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = "lightsteelblue";
  // This is the actual "cup" of the coffee cup
  quad(10, 15, 30, 15, 28, 45, 12, 45);
  pop();

  // This is the banner around the middle
  fill("snow");
  quad(10.5, 23, 29.5, 23, 28.8, 33, 11.2, 33);

  // This acts as a place holder for where the face goes (for the future in assignment)
  push();
  strokeWeight(0.5);
  stroke("snow");
  fill("rosybrown");
  ellipse(20, 28, 9.5);
  pop();

  // This is the if else statement that causes the coffee cup to flip open.
  push();
  if (mouseIsPressed) {
    addCoffeeLid(1.5, 30, -120);
  } else {
    stroke("steelblue");
    strokeWeight(0.3);
    rect(9, 12, 22, 3);
    rect(10, 10, 20, 2);
    pop();
  }

  //This is the face in the middle of the cup's banner
  push();
  if (mouseIsPressed) {
    addSmileyFace(15, 23, 0.09);
  } else {
    addSadFace(15, 23, 0.09);
    pop();
    pop();
  }
}

// I created this in lab previously and altered it for this sketch.
function addSadFace(x, y, size) {
  push();
  translate(x, y);
  scale(size);

  // These are the if-else statements responsible for the color changes
  push();
  if (mouseX < 50) {
    fill("pink");
  } else if (mouseX >= 50 && mouseX < 150) {
    fill("plum");
  } else if (mouseX >= 150 && mouseX < 300) {
    fill("palevioletred");
  } else if (mouseX >= 300) {
    fill("hotpink");
  }

  // This is the code used to create the actual sad face

  ellipse(55, 55, 100);
  fill("black");
  ellipse(70, 40, 13, 20);
  ellipse(40, 40, 13, 20);
  pop();
  // push () pop() is used to allow only this section of code to have a strokeWeight of 5
  push();
  noFill();
  stroke("black");
  strokeWeight(5);
  arc(55, 80, 40, 40, 180, 0.1);
  pop();
  pop();
}

// This is the function for the lid
function addCoffeeLid(x, y, turn) {
  // This is for the lid.
  push();
  translate(x, y);
  rotate(turn);
  stroke("steelblue");
  strokeWeight(0.3);
  rect(9, 12, 22, 3);
  rect(10, 10, 20, 2);
  pop();
}

// Function for Smiley Face
function addSmileyFace(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  strokeWeight(10);
  // These are the if-else statements responsible for the color changes

  if (mouseX < 50) {
    fill("rgb(255,130,250)");
  } else if (mouseX >= 50 && mouseX < 150) {
    fill("#FF13CE");
  } else if (mouseX >= 150 && mouseX < 250) {
    fill("rgb(207,0,199)");
  } else if (mouseX >= 250) {
    fill("magenta");
  }

  // This is the code used to create the actual smiley face

  ellipse(55, 55, 100);
  fill("black");
  ellipse(70, 40, 13, 40);
  ellipse(40, 40, 13, 40);

  // push () pop() is used to allow only this section of code to have a strokeWeight of 5
  push();
  noFill();
  stroke("black");
  strokeWeight(8);
  arc(55, 48, 70, 90, 0, 180);
  pop();
  pop();
}

// function for coffee bean
function addCoffeeBean(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  stroke("hsla(12,90%,23%,1)");
  strokeWeight(0.6);
  fill("saddlebrown");
  ellipse(10, 10, 12, 17);
  noFill();
  stroke("hsla(12,90%,20%,0.5)");
  push();
  strokeWeight(0.5);
  curve(40, 10, 9.5, 1.6, 10, 18.5, -20, 20);
  pop();

  pop();
}
