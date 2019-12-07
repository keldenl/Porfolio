var color = [];
var brush = "NORMAL brush";

function setup() {
  // put setup code here

  //create canvas of the whole window
  createCanvas(windowWidth, windowHeight);

  //background white
  background(255);
  frameRate(60);

  smooth();

  color[0] = 0;
  color[1] = 0;
  color[2] = 0;
}

function draw() {
  // put drawing code here
  //create nav bar
  noStroke();
  fill(225);
  rect(0,0, windowWidth, 75);

  drawColors();
  noStroke();

  fill(color[0], color[1], color[2]);
  rect(0, 0, 75, 75);




  //paint brush function
  if (mouseIsPressed && mouseY > 75) {
  	fill(color[0], color[1], color[2], 100);
  } else {
  	noFill();
  }

  if (brush === "ABSTRACT brush") {
    ellipse(mouseX, mouseY, mouseX/3, mouseY/3);
  } else {
    ellipse(mouseX, mouseY, 75, 75);
  }


  // checks for "clear" mouseover
  if (mouseX > windowWidth - 175 && mouseX < windowWidth - 75 && mouseY > 0 && mouseY < 75) {
  	//mouseover is true
  	//fills rect behind "clear"
  	fill(200);
  	rect(windowWidth - 175, 0, 100, 75);

  	//fills "clear"
  	fill(50);

  	//clear function
  	if (mouseIsPressed) {
  		fill(0,50,205);
  		clearCanvas();
  	}

  } else {
  	//no mouseover, just displays "clear" in black
  	fill(0);
  }

 // checks for "brush" mouseover
  if (mouseX > windowWidth - 325 && mouseX < windowWidth - 175 && mouseY > 0 && mouseY < 75) {
    //mouseover is true
    //fills rect behind "brush"
    fill(200);
    rect(windowWidth - 350, 0, 175, 75);

    //fills "brush"
    fill(50);

    //brush function
    if (mouseIsPressed) {
      if (brush === "NORMAL brush") {
        brush = "ABSTRACT brush";
        delay(2000);
      } else {
        brush = "NORMAL brush";
        delay(2000);
      }
    }

  } 

  textSize(20);
  text(brush, windowWidth - 340, 47);

  //draws "clear"
  textSize(23);
  text("clear", windowWidth - 150, 47);

  //draws "made by kelden" on the bottom
  textSize(15);
  fill(150);
  text("Made by Kelden Lin", (windowWidth/2) - 50, windowHeight - 50);

}

//clear canvas function
function clearCanvas() {
	clear();

	//draw nav bar right away to skip lag
	noStroke();
	fill(225);
	rect(0,0, windowWidth, 75);
}

//draws the colors
function drawColors() {
	//black
	fill(0);
	rect(100, 20, 35, 35);

	//gray
	fill(127);
	rect(150, 20, 35, 35);

	//light gray
	fill(200);
	rect(200, 20, 35, 35);

	//red
	fill(247,72,59);
	rect(250, 20, 35, 35);

	//green
	fill(24,188,156);
	rect(300, 20, 35, 35);

	//blue
	fill(35,134,200);
	rect(350, 20, 35, 35);

	//aoi
	fill(105,210,231);
	rect(400, 20, 35, 35);

	//pond blue
	fill(167,219,216);
	rect(450, 20, 35, 35);

  //beach storm
  fill(224,228,204);
  rect(500, 20, 35, 35);

  //goldfish
  fill(243,134,48);
  rect(550, 20, 35, 35);

  //food pills
  fill(250,105,0);
  rect(600, 20, 35, 35);
	

	checkHover(100, 20, 0, 0, 0);
	checkHover(150, 20, 127, 127, 127);
	checkHover(200, 20, 200, 200, 200);
	checkHover(250, 20, 247,72,59);
	checkHover(300, 20, 24,188,156);
	checkHover(350, 20, 35,134,200);
	checkHover(400, 20, 105,210,231);
	checkHover(450, 20, 167,219,216);
  checkHover(500, 20, 224,228,204);
  checkHover(550, 20, 243,134,48);
  checkHover(600, 20, 250,105,0);

}

function checkHover(x, y, r, g, b) {
	if (mouseX > x && mouseX < x+35 && mouseY > 20 && mouseY < 55) {
		noFill();
		stroke(255);
		strokeWeight(3);
		rect(x-2, y-2, 39, 39);

		if(mouseIsPressed && mouseButton == LEFT){
			color[0] = r;
			color[1] = g;
			color[2] = b;
		}

    if (mouseIsPressed && mouseButton == RIGHT){
      color[0] = r;
      color[1] = g;
      color[2] = b;
      background(color[0], color[1], color[2]);
    }
	}
}

