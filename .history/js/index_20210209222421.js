const gameboard = document.querySelector(".gameboard");

const p1 = "player1";
const p2 = "player2";

let player = p1

const targets = new Array;
const pointsTable = new Array;
const scoreBoard = new Array(3);

let marks;
let counter;

document.addEventListener("click", e => {
    if(targets.includes(e.target) == false){
        if (e.target.classList.contains("mark")){
            if (player == p1) {
                e.target.classList.add("cross");
                player = p2;
            }
            else if(player == p2){
                e.target.classList.add("circle");
                player = p1;
            }
            targets.push(e.target)
        }
    }

    marks = document.querySelectorAll(".mark");
    counter = 0;
    for (let i = 0; i < scoreBoard.length; i++){
        scoreBoard[i] = new Array(3);
        for(let j = 0; j < scoreBoard[0].length; j++){
            scoreBoard[i][j] = marks[counter];
            counter++;
        }
    }

    console.log(scoreBoard);

});
