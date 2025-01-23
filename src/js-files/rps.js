const choices = ["Камінь", "Ножиці", "Папір"];
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(computerChoice);
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Нічия!";
    }
    else {
        switch (playerChoice) {
            case "Камінь":
                result = (computerChoice === "Ножиці") ? "Ви виграли раунд!" : "Комп’ютер виграв раунд!";
                break;
            case "Ножиці":
                result = (computerChoice === "Папір") ? "Ви виграли раунд!" : "Комп’ютер виграв раунд!";
                break;
            case "Папір":
                result = (computerChoice === "Камінь") ? "Ви виграли раунд!" : "Комп’ютер виграв раунд!";
                break;
        }
    }

    computerDisplay.textContent = `${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText")

    switch (result) {
        case "Ви виграли раунд!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Комп’ютер виграв раунд!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}