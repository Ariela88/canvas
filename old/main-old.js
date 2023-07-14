const canvas = document.getElementById('canvas1')

const ctx = canvas.getContext('2d')

setInterval(crearSingleArt, 2000)



function clearArt() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < 100; i++) {

        const r1 = Rect.random(canvas.width, canvas.height)

        r1.draw(ctx)
    }


}


function crearSingleArt() {
    

   
        const r1 = Rect.random(canvas.width, canvas.height)

        r1.draw(ctx)
    }


