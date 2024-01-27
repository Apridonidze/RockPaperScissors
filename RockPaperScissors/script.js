const PaperBtn = document.querySelector("#paperBtn")
const ScissorsBtn = document.querySelector("#scissorsBtn");
const RockBtn = document.querySelector("#rockBtn");
let MyChoice;
let Score = 0;


let PaperImg = document.querySelector("#PaperImg");
let RockImg = document.querySelector("#RockImg");
let ScissorsImg = document.querySelector("#ScissorsImg");

let PaperImgBot = document.querySelector("#PaperImgBot");
let RockImgBot = document.querySelector("#RockImgBot");
let ScissorsImgBot = document.querySelector("#ScissorsImgBot");

let MainBody = document.querySelector(".choose");
let ToggleGame = document.querySelector(".ToggleGame");
let Answers = document.querySelector(".ToggleGame-container");
let TextAnswers = document.querySelector(".Answers");
PaperBtn.addEventListener("click",() => {
    document.querySelector("#yourChoice").textContent = "Your Choice is : Paper"
    MyChoice = Paper; 
    ScissorsImg.style.display = "none";
    RockImg.style.display = 'none';
    PaperImg.style.display = 'flex';
    MainBody.style.display = 'none';
    ToggleGame.style.display = 'flex';
    Answers.style.display = 'block';
    TextAnswers.style.display = 'block'
    let ComputerChoiceRandom = Math.floor(Math.random() * 3);
    switch(ComputerChoiceRandom){
        case 0:
        document.querySelector("#ComputerChoice").textContent = ("Computer Choice is : Rock");
        PaperImgBot.style.display = 'none';
        RockImgBot.style.display = 'flex';
        ScissorsImgBot.style.display = 'none';
        break;
        case 1:
        document.querySelector("#ComputerChoice").textContent = ("Computer Choice is : Paper");
        PaperImgBot.style.display = 'flex';
        RockImgBot.style.display = 'none';
        ScissorsImgBot.style.display = 'none';
        break;
        case 2:
        document.querySelector("#ComputerChoice").textContent = ("Computer Choice is : Scissors");
        PaperImgBot.style.display = 'none';
        RockImgBot.style.display = 'none';
        ScissorsImgBot.style.display = 'flex';
        break;
    };
    if (MyChoice == Paper && ComputerChoiceRandom == 0){
        document.querySelector("#Winner").textContent = "You Win";
        Score ++;
        document.querySelector("#score-output").textContent = Score;
    }else if (MyChoice == Paper && ComputerChoiceRandom == 1){
        document.querySelector("#Winner").textContent = "Tie";
    }else{
        document.querySelector("#Winner").textContent = "You Lose";
    };
});
ScissorsBtn.addEventListener("click", () => {
    document.querySelector("#yourChoice").textContent = "Your Choice is : Scissors"
    MyChoice = Scissors; 
    ScissorsImg.style.display = "flex";
    RockImg.style.display = 'none';
    PaperImg.style.display = 'none';
    MainBody.style.display = 'none';
    ToggleGame.style.display = 'flex';
    Answers.style.display = 'block';
    TextAnswers.style.display = 'block'
let ComputerChoiceRandom = Math.floor(Math.random() * 3);
switch(ComputerChoiceRandom){
    case 0:
    document.querySelector("#ComputerChoice").textContent = ("Computer Choice is : Rock");
    PaperImgBot.style.display = 'none';
    RockImgBot.style.display = 'flex';
    ScissorsImgBot.style.display = 'none';
    break;
    case 1:
    document.querySelector("#ComputerChoice").textContent = ("Computer Choice is : Paper");
    PaperImgBot.style.display = 'flex';
    RockImgBot.style.display = 'none';
    ScissorsImgBot.style.display = 'none';
    break;
    case 2:
    document.querySelector("#ComputerChoice").textContent = ("Computer Choice is : Scissors");
    PaperImgBot.style.display = 'none';
    RockImgBot.style.display = 'none';
    ScissorsImgBot.style.display = 'flex';
    break;
};
if (MyChoice == Scissors && ComputerChoiceRandom == 0){
    document.querySelector("#Winner").textContent = "You Lose";
}else if(MyChoice == Scissors && ComputerChoiceRandom == 1){
    document.querySelector("#Winner").textContent = "You Win";
    Score ++;
    document.querySelector("#score-output").textContent = Score;
}else{
    document.querySelector("#Winner").textContent = "Tie";
}
});


RockBtn.addEventListener("click",() => {
    document.querySelector("#yourChoice").textContent = "Your Choice is : Rock"
    MyChoice = Rock;
    ScissorsImg.style.display = "none";
    RockImg.style.display = 'flex';
    PaperImg.style.display = 'none';
    MainBody.style.display = 'none';
    ToggleGame.style.display = 'flex';
    Answers.style.display = 'block';
    TextAnswers.style.display = 'block'
let ComputerChoiceRandom = Math.floor(Math.random() * 3);
switch(ComputerChoiceRandom){
    case 0:
    document.querySelector("#ComputerChoice").textContent = ("Computer Choice is : Rock");
    PaperImgBot.style.display = 'none';
    RockImgBot.style.display = 'flex';
    ScissorsImgBot.style.display = 'none';
    break;
    case 1:
    document.querySelector("#ComputerChoice").textContent = ("Computer Choice is : Paper");
    PaperImgBot.style.display = 'flex';
    RockImgBot.style.display = 'none';
    ScissorsImgBot.style.display = 'none';
    break;
    case 2:
    document.querySelector("#ComputerChoice").textContent = ("Computer Choice is : Scissors");
    PaperImgBot.style.display = 'none';
    RockImgBot.style.display = 'none';
    ScissorsImgBot.style.display = 'flex';
    break;
};
if (MyChoice == Rock && ComputerChoiceRandom == 0){
    document.querySelector("#Winner").textContent = "Tie";
}else if (MyChoice == Rock && ComputerChoiceRandom == 1){
    document.querySelector("#Winner").textContent = "You Lose";
}else{
    document.querySelector("#Winner").textContent = "You Win";
    Score ++;
    document.querySelector("#score-output").textContent = Score;
};
});

let Rock = 0;
let Paper = 1;
let Scissors = 2;


let resetBtn = document.querySelector("#PlayAgain");
PlayAgain.addEventListener("click",() => {
    MainBody.style.display = 'block';
    ToggleGame.style.display = 'none';
    Answers.style.display = 'none';
    TextAnswers.style.display = 'none';
});