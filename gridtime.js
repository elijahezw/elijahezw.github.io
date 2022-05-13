
function setup() {
        let canvas = createCanvas(740, 640);
        frameRate(4);
        background('#ffffff');
        canvas.parent('grid-time');      
      } 


function draw() {
        binary = frameCount.toString(2);     
        print(binary);
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
                      fill('#4FBAC0');
                      stroke('#FFFFFF');
                      strokeWeight(4.0);
                      rect(sub_width * i +50, sub_height * j +50, sub_width, sub_height);
                }
  
                   if(grid[count] == 0){
                       fill ('#EB2F89');
                       rect(sub_width * i +50, sub_height * j +50, sub_width, sub_height);
                   } 
  
                   count++;        
               }
  
             }
          }
      }
