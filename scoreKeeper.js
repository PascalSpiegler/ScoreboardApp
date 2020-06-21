//Headers and paragraphs
var s1 = document.querySelector("#score1");
var s2 = document.querySelector("#score2");
var winner = document.querySelector("#winner");
var maxScoreText = document.querySelector("#maxScoreText");



// Buttons
var p1ButtonPlus = document.querySelector("#b1plus");
var p1ButtonMinus = document.querySelector("#b1minus");

var p2ButtonPlus = document.querySelector("#b2plus");
var p2ButtonMinus = document.querySelector("#b2minus");

var resetButton = document.querySelector("#bReset");

//Input
var input = document.querySelector("input");

//Score variables
var p1Score = 0;
var p2Score = 0;

maxScore = 5;


input.addEventListener("click", function(){
    maxScore = input.value; 
    checkStatus();
})


p1ButtonPlus.addEventListener("click", function(){
    if (p1Score < maxScore && p2Score < maxScore){
        p1Score+=1;
        s1.textContent = p1Score;
        s2.textContent = p2Score;
    }
    checkStatus()
})

p2ButtonPlus.addEventListener("click", function(){
    if (p1Score < maxScore && p2Score < maxScore){
        p2Score+=1;
        s1.textContent = p1Score;
        s2.textContent = p2Score;
    }
    checkStatus()
})

p1ButtonMinus.addEventListener("click", function(){
    if (p1Score < maxScore && p2Score < maxScore && p1Score >0){
        p1Score -= 1;
        s1.textContent = p1Score;
        s2.textContent = p2Score;
    }
    checkStatus()
})

p2ButtonMinus.addEventListener("click", function(){
    if (p1Score < maxScore && p2Score < maxScore && p2Score >0){
        p2Score -= 1;
        s1.textContent = p1Score;
        s2.textContent = p2Score;
    }
    checkStatus()
})

resetButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    s1.textContent = p1Score;
    s2.textContent = p2Score;
    input.value = "5"
    maxScore = 5;
    winner.textContent = ""
    s1.style.color = "black";
    s2.style.color = "black";
    

})

function checkStatus () {
    maxScore = input.value; 
    if (p1Score == maxScore || p2Score == maxScore){

        if (p1Score > p2Score){
            winner.innerHTML = "Player 1 wins! <i class='fas fa-trophy'></i>"

        } else {
            winner.innerHTML = "Player 2 wins! <i class='fas fa-trophy'></i>"
        }
    }

    if (p1Score > p2Score){
        s1.style.color = "green";
        s2.style.color = "red";
    } 
    else if (p1Score < p2Score){
        s1.style.color = "red";
        s2.style.color = "green";
    }
    else {
        s1.style.color = "black";
        s2.style.color = "black";
    }
}




