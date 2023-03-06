// Linardos, Caitlin
// Assignment 3 -- Question 2
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("lavenderblush");
  fill("peachpuff");

  // This is for the table the coffee cup is seated on
  rect(0, 330, 400, 70);

  // This is calling the "Coffee Cup" function. This also enables the coffee cup to follow the mouse by using the "mouseX" variable.
  addCoffeeCup(mouseX, 230, 2.5);
}

//This is the function for the complete coffee cup
function addCoffeeCup(x, y, size) {
  translate(x, y);
  scale(size);
  stroke("beige");
  fill("rosybrown");
  noStroke();

  push();
  // This is a shadow that is only around the "cup"
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = "maroon";

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

  if (mouseIsPressed) {
    push();
    addCoffeeLid(0, 30, -120);
    pop();
  } else {
    push();
    stroke("rosybrown");
    strokeWeight(0.3);
    rect(9, 12, 22, 3);
    rect(10, 10, 20, 2);
    pop();
  }
  push();
  //addCoffeeLid (0,30,-120)
  pop();
  // This is the face in the middle of the cup's banner

  if (mouseIsPressed) {
    addSmileyFace(15, 23, 0.09);
  } else {
    addSadFace(15, 23, 0.09);
  }

  // I created this in lab previously and altered it for this sketch.
  function addSadFace(x, y, size) {
    translate(x, y);
    scale(size);

    // These are the if-else statements responsible for the color changes
    if (mouseX < 50) {
      fill("pink");
    } else if (mouseX >= 50 && mouseX < 150) {
      fill("plum");
    } else if (mouseX >= 150 && mouseX < 300) {
      fill("palevioletred");
    } else {
      fill("lightpink");
    }

    // This is the code used to create the actual sad face

    ellipse(55, 55, 100);
    fill("black");
    ellipse(70, 40, 13, 20);
    ellipse(40, 40, 13, 20);

    // push () pop() is used to allow only this section of code to have a strokeWeight of 5
    push();
    noFill();
    stroke("black");
    strokeWeight(5);
    arc(55, 80, 40, 40, 180, 0.1);
    pop();
  }
  // This adds the coffee lid so that it can be easily rotated when mouseIsPressed
  function addCoffeeLid(x, y, turn) {
    // This is for the lid.
    translate(x, y);
    rotate(turn);
    push();
    stroke("rosybrown");
    strokeWeight(0.3);
    rect(9, 12, 22, 3);
    rect(10, 10, 20, 2);
    pop();
  }

  function addSmileyFace(x, y, size) {
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
    } else {
      fill("#F30098");
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
  }
}
