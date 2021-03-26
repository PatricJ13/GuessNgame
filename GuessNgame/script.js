'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `🥳Correct Number!`;
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 18;
document.querySelector('.guess').value;*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //document.querySelector('.message').textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);

  document.querySelector('.number').textContent = `?`;

  document.querySelector('.guess').value = ' ';

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

//Check click
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = `⛔ No Number!`;
    displayMessage(`⛔ No Number!`);

    //When the player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = `🥳 Correct Number!`;
    displayMessage(`🥳 Correct Number!`);
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      displayMessage(
        guess > secretNumber ? `👎 Guess was too high!` : `👎 Guess was to low`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = `😭 You lost the game!`;
      displayMessage(`😭 You lost the game!`);
      document.querySelector('.score').textContent = 0;
    }
  }
});
