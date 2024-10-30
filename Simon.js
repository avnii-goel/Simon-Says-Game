let gameSeq = [];
let userSeq = [];

let btns = ["orange","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){               //to start the game
    if (started == false) {
        console.log("Game has started!");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("Current level:", level);

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "#f94449";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        highestScore(level);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// let score = [];
// function highestScore(num) {
//     score.push(num);
//     console.log(score);
//     let highestScore = 0;
//     for (let i=0; i < score.length; i++) {
//         if (score[i] > highestScore) {
//             let h3 = document.querySelector("h3");
//             highestScore = score[i];
//             score.splice(0,1,highestScore);
//             h3.innerText = `Your Highest Score: ${highestScore}`;
//         } else {
//             h3.remove();
//             h3.append(highestScore);
//         }
//     }
// }


function highestScore(num) {
    let highestScore = 0;
    let h3 = document.querySelector("h3");
    if (num > highestScore) {
        highestScore = num;
        h3.innerText = `Your Highest Score: ${highestScore}`;
    } 
    highestScore = num;
}
