'use strict';

let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    //when guess is not a number
    if (!guess) {
        document.querySelector('.message').textContent = '🙁 No Number';
    }

    //when player win the game
    else if (guess === secretNum) {
        document.querySelector('.message').textContent = '😍Correct Number';
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('body').style.backgroundColor = 'green';
        if (score > highscore) {

            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            document.querySelector('.number').style.width = '25rem';

        }
    }

    //when guess is wrong
    else if (guess !== secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNum ? '📈 Too high!' : '📉 Too low!';

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';

            document.querySelector('.score').textContent = 0;
        }
    }

});

//when player wants to play again
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNum = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing......';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'rgb(221, 168, 168)';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

})