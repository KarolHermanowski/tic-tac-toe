const gameboard = document.querySelector(".gameboard");

document.addEventListener("click", e => {
    if (e.target.classList.contains("mark")){
        e.target.classList.add("circle")
    }
})

document.addEventListener("mouseover", e => {
    if (e.target.classList.contains("mark")){
        e.target.classList.add("shadow")
    }
})