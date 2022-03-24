let canvas = '#ffffff';
let arcs = 48
let i = 0;
let col;

function preload() {
    col = loadStrings('skycolor.txt');
}

function setup() {
  createCanvas(640, 640);
  frameRate(1);
  
}

function draw() {  
  background(canvas);
  
 if (i < col.length) {
      let subwidth = (TWO_PI/arcs);
        
  for (var j = 0; j <= i; j++) {
      let st = col[j];
      print(st);
      noStroke();
      fill(st);
      arc (320, 320, 400, 400, subwidth * j, 
           subwidth * j + subwidth); 
  
      let bright = brightness(st);
      fill(canvas);
      noStroke();
      arc (320, 320,  bright *1.5, bright *1.5, 
           subwidth * j -0.01, subwidth * j + subwidth+0.01); 
      
      fill(canvas);
      noStroke();
      circle (320, 320, 100);
  }  
        
  print(i);
      i ++;
      
      if (i>arcs-1){
        i = 0;}

  }
}
  
