

let canvas = document.getElementById('canvas1');


let ctx = canvas.getContext('2d');


  
function edgeIsTouched(){
    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
      this.speedX = -this.speedX;
    } 
    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.speedY = -this.speedY;
    }
}    

function update(){
    this.edgeIsTouched();
    this.x += this.speedX;
    this.y += this.speedY;
  }
  


// const r1 = new Rect(400, 400, 100, 100);

// r1.draw(ctx);

// function moveRect(){

// ctx.clearRect(0,0,canvas.width,canvas.height)
// r1.animate();
// r1.draw(ctx)


// }

// setInterval(moveRect,0.5)

// const rectArray = [];

// for (let i = 0; i < 2000; i++) {
//     const rect = Rect.random(canvas.width, canvas.height);
//     rectArray.push(rect);


    
// }

// function moveAll(){

//     for (const rect of rectArray) {
        

//         rect.animate(canvas.width,canvas.height);
//         rect.draw(ctx);
        
        
//     }
// requestAnimationFrame(moveAll)

// }

// requestAnimationFrame(moveAll)