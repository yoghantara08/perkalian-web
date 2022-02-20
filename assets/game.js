const game = {
  answer: "0",
  leftNumber: "1",
  rightNumber: "1",
  level: "1",
  lives: "3",
  highscore: localStorage.getItem("highScore"),
};

function initLevel() {
  game.answer = "0";
  game.leftNumber = "1";
  game.rightNumber = "1";
  game.level = "1";
  game.lives = "3";
  game.highscore = localStorage.getItem("highScore");
}

function checkAnswer() {
  const left = parseInt(game.leftNumber);
  const right = parseInt(game.rightNumber);
  const expected = left * right;
  const actual = parseInt(game.answer);
  let currentLives = parseInt(game.lives);

  let message = "";

  if (expected === actual) {
    // True answer
    message += "Hore! Jawabanmu benar: ";
    message += left.toString();
    message += " x ";
    message += right.toString();
    message += " = ";
    message += expected.toString();
    alert(message);
  } else {
    // False answer
    decrementLives();

    message += "Yah! Sayang sekali jawabanmu salah, yang benar: ";
    message += left.toString();
    message += " x ";
    message += right.toString();
    message += " = ";
    message += expected.toString();
    alert(message);
  }

  if (currentLives <= 0) {
    // initLevel
    livesOutHandler();
  } else {
    // next level
    nextLevel();
  }
}

function nextLevel() {
  // Activate and reset the timer
  timer();

  let currentLeft = parseInt(game.leftNumber);
  let currentRight = parseInt(game.rightNumber);

  const options = ["incrementLeft", "incrementRight"];
  const choice = options[Math.floor(Math.random() * options.length)]; // Random choice

  // update history
  document.querySelector("#prev-left-number").innerText = game.leftNumber;
  document.querySelector("#prev-right-number").innerText = game.rightNumber;
  document.querySelector("#prev-answer").innerText = (currentLeft * currentRight).toString();

  if (choice === "incrementLeft") {
    currentLeft++;
    game.leftNumber = currentLeft.toString();
  } else {
    currentRight++;
    game.rightNumber = currentRight.toString();
  }

  incrementLevel();
}

function clearDisplay() {
  game.answer = "0";
}

function updateDisplay() {
  document.querySelector("#right-number").innerText = game.rightNumber;
  document.querySelector("#left-number").innerText = game.leftNumber;
  document.querySelector("#lives").innerText = game.lives;
  document.querySelector("#level").innerText = game.level;
  document.querySelector("#answer").innerText = game.answer;
}

function inputDigit(digit) {
  if (game.answer === "0") {
    game.answer = digit;
  } else {
    game.answer += digit;
  }
}

function highscoreHandler() {
  if (parseInt(game.level) > parseInt(game.highscore)) {
    localStorage.setItem("highScore", game.level);
    game.highscore = game.level;
  }
}

function highscoreUpdate() {
  document.querySelector("#highest-score").innerText = game.highscore;
}

function showHighscoreFirst() {
  window.onload = () => {
    // If the highscore isn't initialized yet
    if (!localStorage.getItem("highScore")) {
      localStorage.setItem("highScore", "0");
    }
    document.querySelector("#highest-score").innerText = game.highscore;
  };
}

// Start Button
const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", function () {
  const main = document.querySelector(".main-container");

  setTimeout(() => {
    main.innerHTML = mainContainer();

    timer();
    showHighscoreFirst();
    tombol();
  }, 1000);
});

function timer() {
  let timeLimit = 5;
  // Update the count down every 1 second
  let x = setInterval(function () {
    // Display the result in the element with id="demo"
    if (timeLimit >= 0) document.getElementById("timer").innerHTML = timeLimit + "s";

    // If the count down is finished, write some text
    if (timeLimit < 0) {
      timeOutHandler(x);
    }
    timeLimit--;
  }, 1000);
}

function timeOutHandler(x) {
  alert("Waktu telah habis, level Anda akan naik dan nyawa Anda akan dikurangi 1");
  clearInterval(x);
  nextLevel();
  decrementLives();
  if (game.lives <= 0) {
    alert("Yah, permainan berakhir!");
    highscoreHandler();
    highscoreUpdate();
    initLevel();
  }
  clearDisplay();
  updateDisplay();
}

function livesOutHandler() {
  alert("Yah, permainan berakhir!");
  highscoreHandler();
  highscoreUpdate();
  initLevel();
}

function decrementLives() {
  // Decrement lives
  let tempLives = parseInt(game.lives);
  tempLives--;
  game.lives = tempLives.toString();
}

function incrementLevel() {
  let tempLevel = parseInt(game.level);
  tempLevel++;
  game.level = tempLevel.toString();
}

function tombol() {
  const buttons = document.querySelectorAll(".button");
  for (let button of buttons) {
    button.addEventListener("click", function (event) {
      const target = event.target;

      if (target.classList.contains("clear")) {
        clearDisplay();
        updateDisplay();
        return;
      }

      if (target.classList.contains("enter")) {
        checkAnswer();
        clearDisplay();
        updateDisplay();
        return;
      }

      inputDigit(target.innerText);
      updateDisplay();
    });
  }
  return;
}

function mainContainer() {
  return `<div class="flex-container-column card">
            ${showCalculator()}
            ${showTimer()}
            ${showScore()}
          </div>`;
}

function showCalculator() {
  return `<div class="title-message"><h3>Ayo hitung hasil perkalian ini!</h3></div>

          <div class="flex-container-row">
            <h2 id="left-number">1</h2>
            <h2 class="operator">x</h2>
            <h2 id="right-number">1</h2>
            <h2 id="right-number">=</h2>
          </div>
          <div class="display">
            <h1 id="answer">0</h1>
          </div>
          <div class="flex-container-row">
            <div class="button">7</div>
            <div class="button">8</div>
            <div class="button">9</div>
          </div>
          <div class="flex-container-row">
            <div class="button">4</div>
            <div class="button">5</div>
            <div class="button">6</div>
          </div>
          <div class="flex-container-row">
            <div class="button">1</div>
            <div class="button">2</div>
            <div class="button">3</div>
          </div>
          <div class="flex-container-row">
            <div class="button clear">Hapus</div>
            <div class="button">0</div>
            <div class="button enter">Enter</div>
          </div>
        </div>`;
}

function showTimer() {
  return `<div class="flex-container-column">
            <div class="flex-container-column card">
              <div class="title-message" style="text-align: center">
                <h3 style="color: red">Sisa Waktu:</h3>
                <h3 style="color: red" id="timer">5<span>s</span></h3>
                <h3>Perhitungan terakhir:</h3>
              </div>
              <div class="flex-container-row">
                <h2 id="prev-left-number">...</h2>
                <h2 class="prev-operator">x</h2>
                <h2 id="prev-right-number">...</h2>
                <h2 class="prev-operator">=</h2>
                <h2 id="prev-answer">...</h2>
              </div>
            </div>`;
}

function showScore() {
  return `<div class="flex-container-column card">
            <div class="title-message">
              <h3 style="color: blue">Skor tertinggi: <span id="highest-score">0</span></h3>
            </div>
            <div class="title-message">
              <h3>Level: <span id="level">1</span></h3>
            </div>
            <div class="title-message">
              <h3>Sisa nyawa: <span id="lives">3</span></h3>
            </div>
          </div>`;
}
