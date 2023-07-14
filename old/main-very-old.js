


// const canvasCollection = document.getElementsByClassName('my-canvas')
// const canvasA = canvasCollection[0]


// const canvasCollection2 = document.getElementsByTagName('canvas')
// const canvasB = canvasCollection2[0]


// console.log(canvasA)
// console.log(canvasB)


// const canvasC = document.querySelector('.my-canvas')//Il Query chiama l'elemento con la modalità del CSS e prende il primo che trova


const canvas = document.getElementById('canvas1')
// console.log(canvas.width)
// console.log(canvas.height)

const ctx = canvas.getContext('2d')



ctx.rect(10, 10, 100, 100)

ctx.rect(canvas.width - 110, canvas.height - 110, 100, 100)
ctx.rect(canvas.width - 110, 10 - 110, 100, 100)
ctx.rect(10, canvas.height - 110, 100, 100)
ctx.rect(canvas.width - 110, 10, 100, 100)
ctx.rect(canvas.width / 2 - 55 ,canvas.height / 2 - 55, 100, 100)


ctx.fill()

ctx.fillStyle = '#531600'
ctx.strokeStyle = '#00c5c9'
ctx.lineWidth = 10

ctx.strokeRect(canvas.width - 110, canvas.height - 110, 100, 100)
ctx.fillRect(10, 10, 100, 100)
ctx.clearRect(50,50,20,20)

ctx.beginPath()

ctx.arc(canvas.width/2,canvas.height/2,200,100, Math.PI)
ctx.fill()


ctx.beginPath()

ctx.moveTo(50, 50)

ctx.lineTo(100, 100)

ctx.lineTo(50, 150)

ctx.lineTo(50, 50)

ctx.fill()

