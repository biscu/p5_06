var myData;
var astronauts = [];



function preload() {
	myData = loadJSON('assets/peopleinspace.json');
}

function setup() {
  
  img = loadImage("assets/space.jpg"); 
 
	createCanvas(windowWidth, windowHeight);

	for (var i = 0; i < myData.people.length; i++) {

		var astroData = myData.people[i];

		var newAstronaut = new Astronaut(astroData.name, astroData.country, astroData.launchdate, astroData.countryflag);
		astronauts.push(newAstronaut);
	}
}

function draw() {
  image(img, 0, 0);
	

	for (var i = 0; i < astronauts.length; i++) {
		var astro = astronauts[i];
		astro.move();
		astro.display();
	}

}

function Astronaut(name, country, date) {

	this.name = name;
	this.country = country;
	this.launchDate = date;

	var daysInSpace = (Date.now() - Date.parse(this.launchDate)) / 1000 / 60 / 60 / 24;

	this.radius = daysInSpace;

	this.x = random(this.radius, width - this.radius);
	this.y = random(this.radius, height - this.radius);

	this.incrementX = 1;
	this.incrementY = 1;

	this.display = function() {
		
		console.log('display ' + this.radius)
		noStroke();
		fill(255,255,255);
		textAlign(CENTER);

		
		
		if(mouseIsPressed) {
		  if(mouseButton == 'left') {
		    
		  fill(100,190,200)
		  ellipse(this.x, this.y, this.radius * 0.6)
		  text(this.name, this.x, this.y + this.radius/2)
		  text(this.launchDate, this.x, this.y + this.radius/1.4);
		    
		  } 
		  else  {
		  fill(26,0,58)
	   	  
		   
		  }
		}
		
		
		
		
	}

	this.move = function() {

		this.x += this.incrementX;
		this.y += this.incrementY;

		if (this.x > width - this.radius || this.x < this.radius) {
			this.incrementX *= -1
			print(this.x);
			print(this.radius);
		}

		if (this.y > height - this.radius || this.y < this.radius) {
			this.incrementY *= -1
			print(this.y);
			print(this.radius);
		}
		
		
	}
	
	
}


	function windowResized(){
resizeCanvas(windowWidth,windowHeight);
                                        
}