jQuery(document).ready(function($){

var x = 1,
	y = 1,
	z = 1,
	deg = 0,
	p = 0,
	counter = 0,
	aTrans = [],
	rootDiv = document.getElementById('sphere'),
	scene = document.getElementsByClassName('scene'),
	ring = 12,
	newDiv = 0,
	ringRotate = 0,
	radius = 300,
	dotObj = {a1:0,b1:0,c1:0,d1:0,a2:0,b2:0,c2:0,d2:0,a3:0,b3:0,d3:0,a4:0,b4:0,c4:0,d4:0},
	face = 24;

var ma1=0,mb1=0,mc1=0,md1=0,ma2=0,mb2=1,mc2=0,md2=0,ma3=0,mb3=0,mc3=0,md3=0,ma4=0,mb4=0,mc4=0,md4=1;

var slicenum = document.getElementById('sliced');
slicenum.oninput = function() {
   document.getElementById("sliced-output").innerHTML = this.value;
   rootDiv.innerHTML = "";
   ring = this.value;
   TheWholeThing();
}

var dotnum = document.getElementById('dotted');
dotnum.oninput = function() {
   document.getElementById("dotted-output").innerHTML = this.value;
   rootDiv.innerHTML = "";
   face = this.value;
   TheWholeThing();
}


// sliders

// row 1
var a1num = document.getElementById('ida1');
var a1out = document.getElementById("a1-output");
a1num.oninput = function() {
   a1out.innerHTML = this.value;
   ma1 = this.value;
   rootDiv.innerHTML = ""; 
   TheWholeThing();
   dotMove();
	
}

var b1num = document.getElementById('idb1');
var b1out = document.getElementById("b1-output");
b1num.oninput = function() {
   b1out.innerHTML = this.value;
   mb1 = this.value;
   rootDiv.innerHTML = ""; 
   TheWholeThing();
   dotMove();
}

var c1num = document.getElementById('idc1');
var c1out = document.getElementById("c1-output");
c1num.oninput = function() {
   c1out.innerHTML = this.value;
   mc1 = this.value;
   rootDiv.innerHTML = "";
   TheWholeThing();
   dotMove(); 
}

var d1num = document.getElementById('idd1');
var d1out = document.getElementById("d1-output");
d1num.oninput = function() {
   d1out.innerHTML = this.value;
   md1 = this.value;
   rootDiv.innerHTML = "";
   TheWholeThing();
   dotMove(); 

}

//row2 
var a2num = document.getElementById('ida2');
var a2out =document.getElementById("a2-output");
a2num.oninput = function() {
   a2out.innerHTML = this.value;
   ma2 = this.value;
   rootDiv.innerHTML = ""; 
   TheWholeThing();
   dotMove();
	
}

var b2num = document.getElementById('idb2');
var b2out = document.getElementById("b2-output");
b2num.oninput = function() {
   b2out.innerHTML = this.value;
   mb2 = this.value;
   rootDiv.innerHTML = ""; 
   TheWholeThing();
   dotMove();
}

var c2num = document.getElementById('idc2');
var c2out = document.getElementById("c2-output");
c2num.oninput = function() {
   c2out.innerHTML = this.value;
   mc2 = this.value;
   rootDiv.innerHTML = "";
   TheWholeThing();
   dotMove(); 
}

var d2num = document.getElementById('idd2');
var d2out = document.getElementById("d2-output");
d2num.oninput = function() {
   d2out.innerHTML = this.value;
   md2 = this.value;
   rootDiv.innerHTML = "";
   TheWholeThing();
   dotMove(); 

}

//row3
var a3num = document.getElementById('ida3');
var a3out = document.getElementById("a3-output");
a3num.oninput = function() {
   a3out.innerHTML = this.value;
   ma3 = this.value;
   rootDiv.innerHTML = ""; 
   TheWholeThing();
   dotMove();
	
}

var b3num = document.getElementById('idb3');
var b3out = document.getElementById("b3-output");
b3num.oninput = function() {
   b3out.innerHTML = this.value;
   mb3 = this.value;
   rootDiv.innerHTML = ""; 
   TheWholeThing();
   dotMove();
}

var c3num = document.getElementById('idc3');
var c3out = document.getElementById("c3-output");
c3num.oninput = function() {
   c3out.innerHTML = this.value;
   mc3 = this.value;
   rootDiv.innerHTML = "";
   TheWholeThing();
   dotMove(); 
}

var d3num = document.getElementById('idd3');
var d3out = document.getElementById("d3-output");
d3num.oninput = function() {
   d3out.innerHTML = this.value;
   md3 = this.value;
   rootDiv.innerHTML = "";
   TheWholeThing();
   dotMove(); 

}

//row4
var a4num = document.getElementById('ida4');
var a4out = document.getElementById("a4-output");
a4num.oninput = function() {
   a4out.innerHTML = this.value;
   ma4 = this.value;
   rootDiv.innerHTML = ""; 
   TheWholeThing();
   dotMove();
	
}

var b4num = document.getElementById('idb4');
var b4out = document.getElementById("b4-output");
b4num.oninput = function() {
   b4out.innerHTML = this.value;
   mb4 = this.value;
   rootDiv.innerHTML = ""; 
   TheWholeThing();
   dotMove();
}

var c4num = document.getElementById('idc4');
var c4out = document.getElementById("c4-output");
c4num.oninput = function() {
   c4out.innerHTML = this.value;
   mc4 = this.value;
   rootDiv.innerHTML = "";
   TheWholeThing();
   dotMove(); 
}

var d4num = document.getElementById('idd4');
var d4out = document.getElementById("d4-output");
d4num.oninput = function() {
   d4out.innerHTML = this.value;
   md4 = this.value;
   rootDiv.innerHTML = "";
   TheWholeThing();
   dotMove(); 

}



scene[0].style.width = radius*2+"px";


// getting random integers
function randomInt(outerMin, outerMax, innerMin, innerMax)
{
    var usableRange = innerMin - outerMin + outerMax - innerMax,
    threshold = innerMin - outerMin,
    num = (Math.random() * (usableRange + 1));

    if (num < threshold) {
        return num - threshold;
    } else {
        return num - threshold + innerMax;
    }
}



function TheWholeThing(){
//making rings
function makeRings(){
	newDiv = document.createElement("div");
	newDiv.classList.add('ring');
	rootDiv.appendChild(newDiv);

	var ringDivision = 180/ring;
	ringRotate = ringRotate + ringDivision;
	$(newDiv).css("transform", "rotateZ("+ringRotate+"deg)");
}
//make dots
function makeDots(){
	var newFace = document.createElement('div');
	newFace.classList.add('face');
	newDiv.appendChild(newFace);


	var ringDivision = 360/face;
	ringRotate = ringRotate + ringDivision;
	//console.log(ringRotate);
	$(newFace).css("transform", "rotateY("+ringRotate+"deg) translateZ("+radius+"px)");
}

for( q = 0; q < ring; q++){
		makeRings();
	for(m = 0; m < face; m++){
		makeDots();

	}

}
};
TheWholeThing();



	function slowtick(x, y, z, deg){
		$('.sphere').css("transform" , "rotate3d("+x+", "+y+", "+z+" , "+deg+"deg)");
	}


	function dotMove(){

		$('.face').each(function(){
		
			var currenTrans = $(this).css("transform");
			var removeMatrix = currenTrans.replace("matrix3d(", "");
			var removeSpace = removeMatrix.replace(/ /g, "");
			var removeLastone = removeSpace.replace(")", ",");

			aTrans = removeLastone.split(",", 16);
			dotObj.a1 = Number(aTrans[0])+ma1;
			dotObj.b1 = mb1;
			dotObj.c1 = Number(aTrans[0])+mc1;
			dotObj.d1 = md1;
			dotObj.a2 = Number(aTrans[4])+ma2;
			dotObj.b2 = mb2;
			dotObj.c2 = Number(aTrans[6])+mc2;
			dotObj.d2 = md2;
			dotObj.a3 = Number(aTrans[8])+ma3;
			dotObj.b3 = Number(aTrans[9])+mb3;
			dotObj.c3 = Number(aTrans[10])+mc3;
			dotObj.d3 = md3;
			dotObj.a4 = Number(aTrans[12])+ma4;
			dotObj.b4 = mb4;
			dotObj.c4 = Number(aTrans[14])+mc4;
			dotObj.d4 = md4;

			console.log(dotObj.b3);
			
		$(this).css("transform", "matrix3d("+dotObj.a1+","+dotObj.b1+","+dotObj.c1+","+dotObj.d1+","+dotObj.a2+","+dotObj.b2+","+dotObj.c2+","+dotObj.d2+","+dotObj.a3+","+dotObj.b3+","+dotObj.c3+","+dotObj.d3+","+dotObj.a4+","+dotObj.b4+","+dotObj.c4+","+dotObj.d4+")");
			
		});
	}


	

	setInterval(function() {
		// x = randomInt(-20, 20, 0, 0);
		// y = randomInt(-20, 20, 0, 0);
		// z = randomInt(-20, 20, 0, 0);
		// deg = randomInt(-360, 360, 0, 0);
		x = x+2;
		y = y+1;
		z=z+1;

    	slowtick(x,y,z,x);
    	dotMove(); 


	}, 1000);


 document.getElementById('reset').onclick = function() {
 	ma1=0,mb1=0,mc1=0,md1=0,ma2=0,mb2=1,mc2=0,md2=0,ma3=0,mb3=0,mc3=0,md3=0,ma4=0,mb4=0,mc4=0,md4=1;
 	a1num.value=0;
a1out.innerHTML = 0;
b1num.value=0;
b1out.innerHTML = 0;
c1num.value=0;
c1out.innerHTML = 0;
d1num.value=0;
d1out.innerHTML = 0;
a2num.value=0;
a2out.innerHTML = 0;
b2num.value=0;
b2out.innerHTML = 0;
c2num.value=0;
c2out.innerHTML = 0;
d2num.value=0;
d2out.innerHTML = 0;
a3num.value=0;
a3out.innerHTML = 0;
b3num.value=0;
b3out.innerHTML = 0;
c3num.value=0;
c3out.innerHTML = 0;
d3num.value=0;
d3out.innerHTML = 0;
a4num.value=0;
a4out.innerHTML = 0;
b4num.value=0;
b4out.innerHTML = 0;
c4num.value=0;
c4out.innerHTML = 0;
d4num.value=0;
d4out.innerHTML = 0;
	rootDiv.innerHTML = ""; 
   TheWholeThing();
}






});
