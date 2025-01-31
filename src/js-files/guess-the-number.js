const inputGuess = document.querySelector(".guess-the-number__input");
const buttonGuess = document.querySelector(".guess-the-number__button");
const dandruffGuessSvg = document.querySelector(".guess-the-number__svg");
const answerGuess = document.querySelector(".guess-the-number__text");

const secretNumber = Math.floor(Math.random() * 100) + 1;

buttonGuess.addEventListener('click', (event) => {
    const guess = parseInt(inputGuess.value);
    if (guess === secretNumber) {
        inputGuess.value = ""
        answerGuess.textContent = `Вітаю, ви вгадали число! ${secretNumber}`;
        answerGuess.style.color = "#039900";
    } else {
        inputGuess.value = ""
        answerGuess.textContent = (guess > secretNumber) ? `Загадане число менше, ніж ${guess}` : `Загадане число більше, ніж ${guess}`;
        answerGuess.style.color = "#990000";
    }
    setTimeout(() => {
        answerGuess.style.opacity = 1;
    }, 100); 
});
