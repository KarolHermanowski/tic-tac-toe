const gameboard = document.querySelector(".gameboard");

document.addEventListener("click", e => {
    // console.log(e);
    if (e.target.classList.contains("mark")){
        e.target.classList.add("circle")
    }
    // e.target.classList.add("circle");

})
