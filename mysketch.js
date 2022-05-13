var g = function( grid0 ){
  
grid0.setup = function() {
        let canvas = grid0.createCanvas(740, 640);
        grid0.frameRate(4);
        grid0.background('#ffffff');
        canvas.parent('grid-time');      
      } 


grid0.draw = function() {
        binary = grid0.frameCount.toString(2);     
        grid0.print(binary);
        let grid = [];
        
        for(let c = 0; c < 30; c++){
          grid[c] = 0
          grid[c] = binary.charAt(c);
        }

        //reverse(grid);

        count = 0;

        if(count < 31){
          for(let i = 0; i < 6; i++){
             for(let j = 0; j < 5; j++){
  
                 sub_width = 640 / 6;
                 sub_height = 640 / 6;
  
                   if(grid[count] == 1){
                      grid0.fill('#4FBAC0');
                      grid0.stroke('#FFFFFF');
                      grid0.strokeWeight(4.0);
                      grid0.rect(sub_width * i +50, sub_height * j +50, sub_width, sub_height);
                }
  
                   if(grid[count] == 0){
                       grid0.fill ('#EB2F89');
                       grid0.rect(sub_width * i +50, sub_height * j +50, sub_width, sub_height);
                   } 
  
                   count++;        
               }
  
             }
          }
      }
}
  
var myp5 = new p5(g, 'grid-time')

// divider

var s = function( sky0 ){

let canvas = '#ffffff';
let arcs = 48
let i = 0
let col;



sky0.preload = function() {
    col = sky0.loadStrings('skycolor.txt');
}

sky0.setup = function() {
  let canvas = sky0.createCanvas(640, 640);
  sky0.frameRate(1);
  canvas.parent('sky-time');
  
}

sky0.draw = function() {  
  sky0.background(canvas);
  
 if (i < col.length) {
      let subwidth = (6.28/arcs);
        
  for (var j = 0; j <= i; j++) {
      let st = col[j];
      sky0.print(st);
      sky0.noStroke();
      sky0.fill(st);
      sky0.arc (320, 320, 400, 400, subwidth * j, 
           subwidth * j + subwidth); 
  
      let bright = sky0.brightness(st);
      sky0.fill(canvas);
      sky0.noStroke();
      sky0.arc (320, 320,  bright *1.5, bright *1.5, 
           subwidth * j -0.01, subwidth * j + subwidth+0.01); 
      
      sky0.fill(canvas);
      sky0.noStroke();
      sky0.circle (320, 320, 100);
  }  
        
  sky0.print(i);
      i ++;
      
      if (i>arcs-1){
        i = 0;}

  }
}
}
var myp5 = new p5(s, 'sky-time')