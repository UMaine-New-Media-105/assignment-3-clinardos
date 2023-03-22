# assignment-3-clinardos
assignment-3-clinardos created by GitHub Classroom

## assignment-3-question-1
### [Link](https://editor.p5js.org/clinardos/full/wCya8Rmzj)
<p> For this question within the assignment I used a 400 x 400 canvas and the p5.js software to be able to complete it accurately. The first part of this assignment was all about creating our "catcher" this will act as the per se player in the game we will create by the end of this assignment. The "catcher" was required to fit into a 50x50 pixel square. After we had finalized our "catcher" we were then tasked to create a ground for the catcher to sit on. 
<p>We also had to create the code to allow the "catcher" to move with the mouse along the ground. I chose to create a coffee cup, which I created a function for called "addCoffeeCup". I created this using the multiple of the quad shapes. After creating the shape of the coffee cup, I was able to use the "drawingContext" command to create a shadow effect around my cup. I chose complimentary colors for the shadow and the cup. I then copied some code I had already previously made in a lab section for a smiley face and placed it on the center of the cup. I decided after placing the smiley face, that it should turn into a frowny face instead. Also, the smiley face changes as the cup moves across the sketch. I did this previously using "if-else" statements and simply altered the colors to match the already set aesthetic.


## assignment-3-question-2
### [Link](https://editor.p5js.org/clinardos/full/zZu-NgVPU)
<p> For this portion of the assignment, the task was to add a conditional statement that changes the sprite's appearance. It will do this when the mouse is clicked, if the mouse is being held down then the sprite's appearance would be normal.
<p> I completed this by first duplicating my previous sketch onto another 400 by 400 canvas and continued with use of the p5.js software. I first created a conditional if-else statement to allow the coffee cup lid to open when the mouse is pressed. I created a lid function and the added the if-else statement into the coffee cup function that rotated the lid to allow the cup to look open when the mouse was pressed. 
<p> Next, I also created another function that would create a "Smiley Face" and when the mouse is pressed it the face will change from Sad face to Smiley face. I hope to later impliment this conditional statement to occur when the "seed" is caught by the catcher. 


## assignment-3-question-3
### [Link](https://editor.p5js.org/clinardos/sketches/PKxK697W0)
<p> For the next part of the assignment, the task was to finally add our "seed" or the object that falls from the top and your "catcher" catches. The seed is supposed to fall at unpredictable speeds and at unpredictable locations across the sketch. The seed should fall automatically when you play the sketch at this point. 
<p> To be able to complete this portion of the assignment, I made a duplicate of the previous sketch using the same 400 by 400 canvas layout and the p5.js software. The first step was to create a function for my seed. Which looked something like this:

```Javascript 
function addCoffeeBean (x,y,size) {
 drawingContext.shadowOffsetX = 0;
 drawingContext.shadowOffsetY = -10;
 drawingContext.shadowBlur = 400;
 drawingContext.shadowColor = "sienna";
 push()
 translate (x,y)
 scale (size)
 stroke ("hsla(12,90%,23%,1)")
 strokeWeight (0.6)
 fill ('saddlebrown')
 ellipse (10,10, 12,17);
 noFill();
 stroke ("hsla(12,90%,20%,0.5)")
 push()
 strokeWeight (0.5)
 curve(40, 10, 9.5, 1.6, 10, 18.5, -20, 20)
 pop()
 pop()}
 ```
 <p> Next I defined 4 different variables above the set up function which were: 
<ul>
  <li>beanX</li>
  <li>beanY</li>
  <li>beanSpeedX</li>
  <li>beanSpeedY</li>
</ul>
<br> When I called these variables in the set up function I set <strong>beanY</strong> and <strong>beanSpeedY</strong> to zero so that the coffee bean would not move along the Y axis. Next I gave a random variable to <strong>beanX</strong> between 1 and 400. Also, I gave a random variable to <strong>beanSpeedX</strong> which was between 1 and 5. 


## assignment-3-question-4
### [Link] (https://editor.p5js.org/clinardos/sketches/wpoDifwNF)
<p> To start challenge 4, I first duplicated my previous sketch. This means I would still be working with the p5.js software and a 400 by 400 canvas. The task of challenge 4 was to rewrite the already made code of the "seed" so that it is by the user clicking the canvas. Then write a test to see if the seed has hit the ground. If it has, have the "seed" reset and fall again. The next seed should not drop until the previous one is done falling. 
 
 <p> To start this assignment, I had to clear up my code as it was bothering my OCD so for each function I created their own file. Next I edited my code to drop the seed when the mouse was pressed. This is where I got stuck. I couldn't figure out how to allow the seed to continue to fall even when the mouse was no longer being pressed. I also added in a logo I made as the background. I will update this with the solution when I figure it out, and ask for help. 
