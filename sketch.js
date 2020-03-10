
let rubber=false;
//slider for paint brush
let slider1;
let slider2;
let slider3;
//variable for flower
let o =0;
//slider for flower location
let slider4;




function preload(){
  img = loadImage('image/title.png');
}



function setup() {
	createCanvas(windowWidth, windowHeight);
  background ("white");	
  

  //slider for paint brush
  slider1=createSlider(0,255);	
  slider1.position(160, 200);
  slider1.style('width', '100px');
 
  slider2=createSlider(0,255);
  slider2.position(160, 220);
  slider2.style('width', '100px');


  slider3=createSlider(0,255);
  slider3.position(160, 240);
  slider3.style('width', '100px');

  /*
  slider4=createSlider(1/5*windowWidth,windowWidth);
  slider4.position(160, 540);
  slider4.style('width', '150px');
*/
}

function draw() {	

  //***a tool: to find positions
    console.log(mouseX,mouseY);	
  
  //flower
  flower();



  //the frame of iSketch
  noStroke();
  fill("#FFA8C4");
  rect(0,0,1/5*windowWidth, windowHeight);

  //instructions
  fill("#331900");
  textSize(14);
  textFont('Helvetica');
  textStyle(BOLD);
  text("Explore each tool with a click~",20,105);
  text("Don't be anxious if things go wild",20,120);
  text("Press space to start a new page~",20,135);
  text("p.s. click save to download your work :)" ,20,150);



  
  //title
  image(img,0,0,1/5*windowWidth,90);

  //show what color is it now
  fill(slider1.value(),slider2.value(),slider3.value());
  ellipse(70,230,50,50);
 

 
  
    
}


//eraser function
function eraser(){
  rubber=true;
}

//paint brush function
function paint(){
  rubber=false;
}


//mouseDragged--eraser/paint


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
  fill("black")
  f[1] = mouseX;
  l[1]= mouseY;
}

function keyPressed(){
	if(key===" "){
		background("white");
  }
}



function flower(){

	//let o =50 - 50 * abs((Math.cos(frameCount/20)));
	
	if(o<40){
	noStroke();
	fill("black");
	ellipse(f,l-2.1*o,o,3*o);//top

	push();//right-top
	translate(f+1.5*o,l-1.5*o);
	rotate(PI/4);
	ellipse(0,0,o,3*o);
	pop();

	ellipse(f+2.1*o,l,3*o,o);//right

	push();//right-bottom
	translate(f+1.5*o,l+1.5*o);
	rotate(PI/4);
	ellipse(0,0,3*o,o);
	pop();

	ellipse(f,l+2.1*o,o,3*o);//bottom

	push();//left-bottom
	translate(f-1.5*o,l+1.5*o);
	rotate(3*PI/4);
	ellipse(0,0,3*o,o);
	pop();

	ellipse(f-2.1*o,l,3*o,o);//left

	push();//left-top
	translate(f-1.5*o,l-1.5*o);
	rotate(3*PI/4);
	ellipse(0,0,o,3*o);
	pop();

	o = o+0.1;
} else{
  erase();
	noStroke();
	ellipse(f,l-2.1*o,o,3*o);//top

	push();//right-top
	translate(f+1.5*o,l-1.5*o);
	rotate(PI/4);
	ellipse(0,0,o,3*o);
	pop();

	ellipse(f+2.1*o,l,3*o,o);//right

	push();//right-bottom
	translate(f+1.5*o,l+1.5*o);
	rotate(PI/4);
	ellipse(0,0,3*o,o);
	pop();

	ellipse(f,l+2.1*o,o,3*o);//bottom

	push();//left-bottom
	translate(f-1.5*o,l+1.5*o);
	rotate(3*PI/4);
	ellipse(0,0,3*o,o);
	pop();

	ellipse(f-2.1*o,l,3*o,o);//left

	push();//left-top
	translate(f-1.5*o,l-1.5*o);
	rotate(3*PI/4);
	ellipse(0,0,o,3*o);
  pop();
  
  noErase();

	//let o returns value 0
	o = 0;
}
	fill("#FFE326");
	ellipse(f,l,50,50);
}

