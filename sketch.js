
let rubber=false;
let slider1;
let slider2;
let slider3;

function preload(){
  img = loadImage('image/title.png');
}



function setup() {
	createCanvas(windowWidth, windowHeight);
  background ("white");	
  

  //slider
  slider1=createSlider(0,255);	
  slider1.position(100, 80);
  slider1.style('width', '100px');
 
  slider2=createSlider(0,255);
  slider2.position(100, 100);
  slider2.style('width', '100px');


  slider3=createSlider(0,255);
  slider3.position(100, 120);
  slider3.style('width', '100px');

}

function draw() {	

  //***a tool: to find positions
    console.log(mouseX,mouseY);	
  
  //the frame of iSketch
  noStroke();
  fill("#FFA8C4");
  rect(0,0,1/5*windowWidth, windowHeight);

  //instructions
  fill("#331900");
  textSize(20);
  textFont('Helvetica');
  textStyle(BOLD);
  text("1.click the tool you like",80,100);

  
  
  //title
  image(img,0,0,1/5*windowWidth,90);

  //show what color is it now
  fill(slider1.value(),slider2.value(),slider3.value());
  rect(50,200,40,40);

  
    
}



function eraser(){
  rubber=true;
}
function paint(){
  rubber=false;
}


function mouseDragged(){
  if (rubber===false){
  stroke(s);
  strokeWeight(7);
  line(mouseX,mouseY,pmouseX,pmouseY);
}else if(rubber===true){
  erase();
  stroke(s);
  strokeWeight(7);
  line(mouseX,mouseY,pmouseX,pmouseY);
  noErase();
}
}


function mousePressed(){
  s=color (slider1.value(),slider2.value(),slider3.value());
}

function keyPressed(){
	if(key===" "){
		background("white");
  }
}
