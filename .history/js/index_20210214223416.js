const gameboard = document.querySelector(".gameboard");

const p1 = "player1";
const p2 = "player2";

let player = p1
let searchFor;
const isWinner = false;

const pointsTable = new Array;
const scoreBoard = new Array(3);

let marks;
let counter;


// classes
const circleClass = "circle";
const crossClass = "cross";
const markClass = "mark";
const classList;
const getClassList = () =>{
    const targets = document.querySelectorAll(`.${markClass}`);
    targets.forEach(target => {
        classList = {classList};
        console.log(classList);
    });
}

getClassList();


document.addEventListener("click", e => {







//     if(targets.includes(e.target) == false){
//         if (e.target.classList.contains(mark)){
//             if (player == p1) {
//                 e.target.classList.add(cross);
//                 player = p2;
//                 searchFor = cross;
//             }
//             else if(player == p2){
//                 e.target.classList.add(cricle);
//                 player = p1;
//                 searchFor = circle;
//             }
//             targets.push(e.target)
//         }
//     }

//     marks = document.querySelectorAll(mark);
//     counter = 0;

//     for (let i = 0; i < scoreBoard.length; i++){
//         scoreBoard[i] = new Array(3);
//         for(let j = 0; j < scoreBoard[0].length; j++){
//             scoreBoard[i][j] = marks[counter];
//             counter++;
//         }
//     }



//     scoreBoard.forEach(element => {
//         element.forEach(el => {
//             if(document.querySelector(el).classList.Contains(searchFor)){
//                 isWinner = true;
//             }
//             else{
//                 isWinner = false;
//             }
//         });

//         // for (let i = 0; i < scoreBoard.length; i++){

//         // }
//     });
// console.log(isWinner);


// console.log(isWinner);

});

