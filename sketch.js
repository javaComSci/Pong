var player;

var dots = [];
var dSize = 10;

function setup() {
  // put setup code here
  createCanvas(800, 500);

  player = new Player;

  // like drawing half the empty square
  for(let y = dSize/2; y < height; y += dSize*2) {
  	dots.push(createVector(width/2 - dSize/2, y));
  }
}

function draw() {
  	// background as pink for the canvas
	background('#fae');

	// no outline
	noStroke();

	// fill the stuff in the canvas such as shapes with white
	fill(255);

	// draw the squares in the middle
	drawSquares();

	player.show();
}

function drawSquares() {
	for(let i = 0; i < dots.length; i++) {
		let x = dots[i].x;
		let y = dots[i].y;

		rect(x, y, dSize, dSize);
	}
}