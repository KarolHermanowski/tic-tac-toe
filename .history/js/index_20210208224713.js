const gameboard = document.querySelector(".gameboard");

const p1 = "player1";
const p2 = "player2";

let player = p1
const targets = new Array;

document.addEventListener("click", e => {
    if(targets.includes(e.target) == false){
        if (e.target.classList.contains("mark")){
            if (player == p1) {
                e.target.classList.add("cross");
                player = p2;
            }
            if(player == p2){
                e.target.classList.add("circle");
                playuer = p1;
            }
            targets.push(e.target)
        }
    }

})