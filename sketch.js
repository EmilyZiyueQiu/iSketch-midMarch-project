
//mode control variable
let control=0;
let rubber=0;

//slider for paint brush
let slider1;
let slider2;
let slider3;
let slider4;
let slider5;
let slider6;
let slider7;
let slider8;
let slider9;

//variable for flower
let o =0;
let fx=[];
let lx=[];
let i =0;

//variable for stars
let x,y,a1,a2

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


  slider5=createSlider(0,255);	
  slider5.position(33, 500);
  slider5.style('width', '70px');

  slider6=createSlider(0,255);	
  slider6.position(123, 500);
  slider6.style('width', '70px');

  slider7=createSlider(0,255);	
  slider7.position(210, 500);
  slider7.style('width', '70px');

  slider8=createSlider(10,250);	
  slider8.position(40, 520);
  slider8.style('width', '100px');

  slider9=createSlider(10,250);	
  slider9.position(180, 520);
  slider9.style('width', '100px');
  
}


//draw function------------------------------------------------------------
function draw() {	

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
  text("Don't be anxious if things go wild",20,122);
  text("You can always start a new page~",20,139);
  text("p.s. click save to download your work :)" ,20,156);
  text("1. Click the shape button you want" ,20,418);
  text("2. Adjust it as you like~" ,20,435);
  text("3. Place it with a DOUBLECLICK" ,20,452);

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

  //shape tags
  textSize(9);
  text("RGB",9,512);
  text("Width",9,532);
  text("Height",150,532);


  //title
  /*fill("white");
  textSize(40);
  textFont('Helvetica');
  textStyle(BOLD);
  text("iSketch : )",30,50);*/
  image(img,0,0,1/5*windowWidth,90);

  //show what color is it now
  stroke(slider1.value(),slider2.value(),slider3.value());
  strokeWeight(slider4.value());
  line(150,185,260,185);
  if(control==3){
    flower(140,680);
    fill("#F60039");
    textSize(14);
    textFont('Helvetica');
    textStyle(BOLD);
    text("Sorry~You cannot do change to this ",20,560);
    text("magical annimated seven-color flower~",20,580);
    text("Just double-click on the paper!",20,600);

  }else if(control==4){
    noStroke();
    fill(slider5.value(),slider6.value(),slider7.value())
    ellipse(140, 670,slider8.value(),slider9.value());
  }else if (control==5){
    noStroke();
    fill(slider5.value(),slider6.value(),slider7.value())
    rect(10, 550,slider8.value(),slider9.value());
  }else if (control==6){
    noStroke();
    fill(slider5.value(),slider6.value(),slider7.value())
    star(140, 630,1/2*slider8.value(),1/2*slider9.value());
  }


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

//draw ellipse
function drawEllipse(){
  control=4;
}

//draw rectangle
function drawRectangle(){
  control=5;
}

//draw star
function drawStar(){
  control=6;
}


//mouse interaction----------------------------------------------------------

function mouseDragged(){
  if (control==1){
  stroke(s);
  strokeWeight(slider4.value());
  line(mouseX,mouseY,pmouseX,pmouseY);
}else if(control==2){
  if(rubber==1){
  stroke("white");
  strokeWeight(5);
  line(mouseX,mouseY,pmouseX,pmouseY);

  }else if(rubber==2){
    stroke("white");
  strokeWeight(12);
  line(mouseX,mouseY,pmouseX,pmouseY);

  }else if(rubber==3){
    stroke("white");
    strokeWeight(20);
    line(mouseX,mouseY,pmouseX,pmouseY);

    }
}
}


function mousePressed(){
  s=color (slider1.value(),slider2.value(),slider3.value());
}

function doubleClicked(){
  if(control==3){
    fx[i]=mouseX;
    lx[i]=mouseY;
    i=i+1;
  }else if (control==4){
    noStroke();
    fill(slider5.value(),slider6.value(),slider7.value());
    ellipse(mouseX, mouseY,slider8.value(),slider9.value());
  }else if (control==5){
    noStroke();
    fill(slider5.value(),slider6.value(),slider7.value());
    rect(mouseX, mouseY,slider8.value(),slider9.value());
  }else if (control==6){
    noStroke();
    fill(slider5.value(),slider6.value(),slider7.value());
    star(mouseX, mouseY,1/2*slider8.value(),1/2*slider9.value());
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
  noStroke();
  fill("white");
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
  

	//let o returns value 0
	o = 0;
}
	fill("#FFE326");
	ellipse(f,l,40,40);
}

//drawing star--------------------------------------------------------------

function star(x, y, a1, a2) {
  let angle = 2*PI / 5;
  beginShape();
  for (let a = 0; a < 2*PI; a += angle) {
    let p1 = x + cos(a) * a2;
    let p2 = y + sin(a) * a2;
    vertex(p1, p2);
    p1 = x + cos(a + angle/2) * a1;
    p2 = y + sin(a + angle/2) * a1;
    vertex(p1, p2);
  }
  endShape(CLOSE);
}