const game = {
    answer: '0',
    leftNumber: '1',
    rightNumber: '1',
    level: '1',
    lives: '3',
};

function initLevel() {
    game.answer = '0';
    game.leftNumber = '1';
    game.rightNumber = '1';
    game.level = '1';
    game.lives = '3';
}

function checkAnswer() {
    const left = parseInt(game.leftNumber);
    const right = parseInt(game.rightNumber);
    const expected = left * right;
    const actual = parseInt(game.answer);
    let currentLives = parseInt(game.lives);

    let message = "";

    if (expected === actual) { // True answer
        message += "Hore! Jawabanmu benar: ";
        message += left.toString();
        message += " x ";
        message += right.toString();
        message += " = ";
        message += expected.toString();
        alert(message);

    } else {
        // False answer
        currentLives--
        game.lives = currentLives.toString();

        message += "Yah! Sayang sekali jawabanmu salah, yang benar: ";
        message += left.toString();
        message += " x ";
        message += right.toString();
        message += " = ";
        message += expected.toString();
        alert(message);
    }

    if (currentLives <= 0) { // initLevel
        alert("Yah, permainan berakhir!");
        initLevel();
    } else { // next level
        nextLevel();
    }
    return;
}

function nextLevel() {
    // to be developed
    let currentLeft = parseInt(game.leftNumber);
    let currentRight = parseInt(game.rightNumber);
    let currentLevel = parseInt(game.level);

    const options = ['incrementLeft', 'incrementRight'];
    const choice = options[Math.floor(Math.random() * options.length)]; // Random choice
    
    if (choice === 'incrementLeft') {
        currentLeft++;
        game.leftNumber = currentLeft.toString();
    } else {
        currentRight++;
        game.rightNumber = currentRight.toString();
    }

    currentLevel++;
    game.level = currentLevel.toString();
}

function clearDisplay() {
    game.answer = '0';
}

function updateDisplay() {
    document.querySelector("#right-number").innerText = game.rightNumber;
    document.querySelector("#left-number").innerText = game.leftNumber;
    document.querySelector("#lives").innerText = game.lives;
    document.querySelector("#level").innerText = game.level;
    document.querySelector("#answer").innerText = game.answer;
}

function inputDigit(digit) {
    if (game.answer === '0'){
        game.answer = digit;
    } else {
        game.answer += digit;
    }
}

// function inverseNumber() {
//     //if (calculator.displayNumber === '0'){
//         //  return;
//     //}
//     calculator.displayNumber = calculator.displayNumber * -1;
// }

// function handleOperator(operator) {
//     if (!calculator.waitingForSecondNumber) {
//         calculator.operator = operator;
//         calculator.waitingForSecondNumber = true;
//         calculator.firstNumber = calculator.displayNumber;

//         calculator.displayNumber = '0';
//     } else {
//         alert('Operator sudah ditetapkan');
//     }
// }

// function performCalculation() {
//     if (calculator.firstNumber == null || calculator.operator == null) {
//         alert("Anda belum menetapkan operator");
//         return;
//     }

//     let result = 0;
//     if (calculator.operator === "+") {
//         result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
//     } else {
//         result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
//     }

//     const history = {
//         firstNumber: calculator.firstNumber,
//         secondNumber: calculator.displayNumber,
//         operator: calculator.operator,
//         result: result
//     }
//     putHistory(history);
//     calculator.displayNumber = result;
//     renderHistory();
// }
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('clear')) {
            clearDisplay();
            updateDisplay();
            return;
        }

        if (target.classList.contains('enter')){
            checkAnswer();
            clearDisplay();
            updateDisplay();
            return;
        }

        inputDigit(target.innerText);
        updateDisplay();
    });
}

