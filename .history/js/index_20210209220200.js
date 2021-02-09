const gameboard = document.querySelector(".gameboard");

const p1 = "player1";
const p2 = "player2";

let player = p1

const targets = new Array;
const pointsTable = new Array;
const temp = new Array

let marks;

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

    marks = document.querySelectorAll(".marks");
    console.log(marks);
    // gameboard.childNodes.forEach(area => {
    //     console.log(area.classList);
    //         // if(area.classList.Contains("cross")){
            //     temp.push("cross");
            //  }
            //  else if(area.classList.Contains("circle")){
            //     temp.push("circle");
            //  }
            //  else{
            //     temp.push("nothing");
            //  }
    // });
});
