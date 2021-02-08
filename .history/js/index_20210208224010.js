const gameboard = document.querySelector(".gameboard");

const p1 = "player1";
const p2 = "player2";

let player = p1


document.addEventListener("click", e => {
    if (e.target.classList.contains("mark")){
        if (player = p1) {
            e.target.classList.add("cross");
            player = p2;
        }
        else if(player = p2){
            e.target.classList.add("circle");
            playuer = p1;
        }

    }
})