let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","blue"];

let started = false;
let level = 0;
let h3 = document.querySelector('h3');
let body = document.querySelector('body');

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },200);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },400);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",pressBtn)
}

function pressBtn(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
        }
    } else{
        h3.innerHTML = `Game over! Your Score is <b>${level}</b> <br> Press any key to Start the Game`;
        body.style.backgroundColor = "red";
        setTimeout(function(){
        body.style.backgroundColor = "white";
        },150)
        reset();
    }
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}