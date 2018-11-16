// main object that the player will be interacting with

function Player() {
	this.w = 15;
	this.h = 80;

	// set the variables for the player
	this.pos = createVector(this.w*2, height/2-this.h/2);
	this.acc = createVector(0,0);
	this.spd = 10;
	this.axSpd = 10;

	// show the box for the player
	this.show = function() {
		noStroke();
		fill(255);
		rect(this.pos.x, this.pos.y, this.w, this.h);
	}
}