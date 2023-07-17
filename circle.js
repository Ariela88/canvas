canvas = document.getElementById('canvas1')

class Circle {
    constructor(){
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;
      this.radius = 30;
      this.color = 'red';
    }
  
    draw(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#000';
      ctx.stroke();
    }
  }
  
  
  let loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height  / 2, 30, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000';
    ctx.stroke();
  
    requestAnimationFrame(loop)
  }

  class Ball {

  }
  
  let ball = new Circle();
  requestAnimationFrame(loop)
  
        
      
    
 
    
    


    

  
  

  
  

let init = () => {
  for (i = 0; i < 10; i++) {
    balls.push( new Ball())
  } 
  requestAnimationFrame(loop)
}





let balls = []







init()


 