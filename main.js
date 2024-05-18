const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const curent0 = document.getElementById("curent--0");
const curent1 = document.getElementById("curent--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

score0.textContent = 0;
score1.textContent = 0;

let scores, curentScore, activePlayer, playing;

const switchPlayer = function () {
  document.getElementById(`curent--${activePlayer}`).textContent = 0;
  curentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
const init = function(){
    scores = [0, 0];
    curentScore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    curent0.textContent = 0;
    curent1.textContent = 0;
    
    player0.classList.remove('player-winner');
    player1.classList.remove('player-winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}

init();

btnRoll.addEventListener("click", function () {
  if (playing) {
    let diceNum = Math.trunc(Math.random() * 6) + 1;

    dice.src = `images/dice-${diceNum}.png`;

    if (diceNum !== 1) {
      curentScore += diceNum;
      document.getElementById(`curent--${activePlayer}`).textContent =
        curentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += curentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player-winner");
      dice.src = `images/perspective-dice-six-faces-four.png`;
      playing = false;
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);
