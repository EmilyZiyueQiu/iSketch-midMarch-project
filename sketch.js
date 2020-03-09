
function setup() {
	createCanvas(windowWidth, windowHeight);
	background (39,38,38);
	
		
}

function draw() {	
	
//***a tool: to find positions
    console.log(mouseX,mouseY);	
 

}

function mouseDragged(){
  stroke(s);
  strokeWeight(7);
  line(mouseX,mouseY,pmouseX,pmouseY);
}


function mousePressed(){
  s=color (random(100,255), random(0,255),random(0,255));
}
