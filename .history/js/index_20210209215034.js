const gameboard = document.querySelector(".gameboard");

const p1 = "player1";
const p2 = "player2";

let player = p1

const targets = new Array;
const pointsTable = new Array;
const temp = new Array

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
    gameboard.childNodes.forEach(area => {
        area.childNodes.forEach(square => {
            square.childNodes.forEach(mark => {
                console.log(mark.target);
                //  if(mark.classList.Contains("cross")){
                //     temp.push("cross");
                //  }
                //  else if(mark.classList.Contains("circle")){
                //     temp.push("circle");
                //  }
                //  else{
                //     temp.push("nothing");
                //  }
            });
        });
    });
    console.log(temp);
});
