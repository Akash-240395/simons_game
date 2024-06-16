let gameSeq = [];
let userSeq = [];   

let started = false;
let level = 0;
let highestScore = 0;

const btn_list = ["red", "yellow", "green", "blue"];

let h3 = document.querySelector("h3");

document.addEventListener("keydown", function(event){
    if(started == false){
        console.log("Game started");
        started = true;
        level_up();
    }    
})

// When user clicks on buttons
let btns = document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click", function(event){
        console.log(this);
        // event.target.style.backgroundColor = "white";
        flash_btn(this);
        userClr = this.getAttribute("id");
        userSeq.push(userClr);
        console.log(userSeq); 
        checkAns(userSeq.length-1);
    })
}

function checkAns(indx){    
    if(gameSeq[indx] == userSeq[indx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(level_up, 1000);            
        }                
    } else{
        console.log("Game Over");
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        if(highestScore < level){
            highestScore = level;
        }
        h3.innerHTML = `Game Over! Your score was <b>${level}</b>.<br>Highest score is <b>${highestScore}</b>. Press any key to restart the game`;
        resetGame();        
    }
}

function flash_btn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");        
    }, 500)    
}

function level_up(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    // random button generator code
    let ranIndx = Math.floor(Math.random() * 3); // genrerated random index    
    let ranClr = btn_list[ranIndx];    
    let ranBtn = document.querySelector(`.${ranClr}`);    
    console.log(ranIndx);
    console.log(ranClr);
    console.log(ranBtn);

    gameSeq.push(ranClr);
    console.log(gameSeq);
    
    flash_btn(ranBtn);
}

function resetGame(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

