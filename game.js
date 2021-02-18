let boxes = document.querySelectorAll(".box");
boxes = Array.from(boxes);

let width;

window.addEventListener("keydown", (e) => {
    
})

for (let i=0;i<140;i++){
    boxes[i].addEventListener("click", () => {
        console.log(boxes[i]);
    })
}

snake = [0, 1, 2, 3];

for (let i=0;i<snake.length;i++){
    boxes[snake[i]].classList.add("snake");
}

setInterval(() => {

    for (let i=0;i<snake.length;i++){
        snake[i] += width;
    }

}, 500)