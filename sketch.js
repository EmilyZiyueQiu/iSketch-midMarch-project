
let control=0;
let rubber=0;
//slider for paint brush
let slider1;
let slider2;
let slider3;
let slider4;
//variable for flower
let o =0;
let fx=[];
let lx=[];
let i =0;

//preload------------------------------------------------------------------

function preload(){
  img = loadImage('image/title.png');
}


//setup function-----------------------------------------------------------
function setup() {
	createCanvas(windowWidth, windowHeight);
  background ("white");	
  

  //slider for paint brush
  slider1=createSlider(0,255);	
  slider1.position(30, 210);
  slider1.style('width', '100px');
 
  slider2=createSlider(0,255);
  slider2.position(170, 210);
  slider2.style('width', '100px');


  slider3=createSlider(0,255);
  slider3.position(30, 235);
  slider3.style('width', '100px');

  slider4=createSlider(1,25);
  slider4.position(170, 235);
  slider4.style('width', '100px');
}


//draw function------------------------------------------------------------
function draw() {	

  //***a tool: to find positions
   // console.log(mouseX,mouseY);	
  
  //flower
  for(let i =0; i<fx.length; i++){ 
      flower(fx[i],lx[i]);
  }

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

  //paint tags
  fill("#331900");
  textSize(11);
  textFont('Helvetica');
  textStyle(BOLD);
  text("R",10,224);
  text("G",150,224);
  text("B",10,250);
  textSize(14);
  text("#",150,250);



  
  //title
  image(img,0,0,1/5*windowWidth,90);

  //show what color is it now
  stroke(slider1.value(),slider2.value(),slider3.value());
  strokeWeight(slider4.value());
  line(150,185,260,185);
 

 
  
    
}



//function selection--------------------------------------------------------

//paint brush function
function paint(){
  control=1;
}

//eraser function
function eraser(){
  control=2;

}

//rubber Size
function rubberSize1(){
  rubber=1;
  control=2;
}
function rubberSize2(){
  rubber=2;
  control=2;
}
function rubberSize3(){
  rubber=3;
  control=2;

}

//draw flower
function drawFlower(){
  control=3;
}

//refresh
function refresh(){
  window.location.reload();
}



//mouse interaction----------------------------------------------------------

function mouseDragged(){
  if (control==1){
  stroke(s);
  strokeWeight(slider4.value());
  line(mouseX,mouseY,pmouseX,pmouseY);
}else if(control==2){
  if(rubber==1){
  erase();
  stroke(s);
  strokeWeight(5);
  line(mouseX,mouseY,pmouseX,pmouseY);
  noErase();
  }else if(rubber==2){
  erase();
  stroke(s);
  strokeWeight(12);
  line(mouseX,mouseY,pmouseX,pmouseY);
  noErase();
  }else if(rubber==3){
    erase();
    stroke(s);
    strokeWeight(20);
    line(mouseX,mouseY,pmouseX,pmouseY);
    noErase();
    }
}
}


function mousePressed(){
  s=color (slider1.value(),slider2.value(),slider3.value());
  if(control==3){
    fx[i]=mouseX;
    lx[i]=mouseY;
    i=i+1;
  }
  }





//drawing flower--------------------------------------------------------------

function flower(f,l){
	if(o<30){
	noStroke();
	fill("#E90A0A");
	ellipse(f,l-2.1*o,o,3*o);//top

  push();//right-top
  fill("#F635A9");
	translate(f+1.5*o,l-1.5*o);
	rotate(PI/4);
	ellipse(0,0,o,3*o);
	pop();
  
  fill("#C935F6");
	ellipse(f+2.1*o,l,3*o,o);//right

	push();//right-bottom
	translate(f+1.5*o,l+1.5*o);
  rotate(PI/4);
  fill("#353CF6");
	ellipse(0,0,3*o,o);
	pop();
  
  fill("#35F6F6");
	ellipse(f,l+2.1*o,o,3*o);//bottom

	push();//left-bottom
	translate(f-1.5*o,l+1.5*o);
  rotate(3*PI/4);
  fill("#35F63C");
	ellipse(0,0,3*o,o);
	pop();
  
  fill("#E9F635");
	ellipse(f-2.1*o,l,3*o,o);//left

	push();//left-top
	translate(f-1.5*o,l-1.5*o);
  rotate(3*PI/4);
  fill("#F68F35");
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
	ellipse(f,l,40,40);
}

