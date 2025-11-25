let snake = document.getElementById("snake")

let x = 0

let y = 0

setInterval(()=>{
    y += 10
    snake.style.left = `${y}px`
},500)

document.addEventListener("keydown",(e)=>{
    if(e.key === "w"){
        x -= 10
        snake.style.top = `${x}px`

        let o1 = setInterval(()=>{
        x -= 10
        snake.style.top = `${x}px`
        },500)
    }
    else if(e.key === "s"){
        x += 10
        snake.style.top = `${x}px`

        setInterval(()=>{
        x += 10
        snake.style.top = `${x}px`
        },500)

        clearInterval(o1)
    }
    else if(e.key === "a"){
        y -= 10
        snake.style.left = `${y}px`
        let o2 = setInterval(()=>{
        y -= 10
        snake.style.left = `${y}px`
        },500)
        clearInterval(o2)
    }
    else if(e.key === "d"){
        y += 10
        snake.style.left = `${y}px`
        let o3 = setInterval(()=>{
        y += 10
        snake.style.top = `${y}px`
        },500)

        clearInterval(o3)
    }

})