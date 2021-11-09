const reset = document.querySelector('#reset');
reset.addEventListener('click', function () {
    score1.innerText = 0;
    score2.innerText = 0;
    score1.style.color = 'black';
    score2.style.color = 'black';
    player1.disabled = false;
    player2.disabled = false;
})

const maxScore = document.querySelector('select');
maxScore.addEventListener('input', function () {
    console.log(`maxScore = ${maxScore.value}`);
})


const player1 = document.querySelector('#button1');
let score1 = document.querySelector('#score1');
player1.addEventListener('click', function () {
    score1.innerText++;
    if (score1.innerText === maxScore.value) {
        score1.style.color = '#4ceb13';
        score2.style.color = 'red';
        player1.disabled = true;
        player2.disabled = true;
    }
})

const player2 = document.querySelector('#button2');
let score2 = document.querySelector('#score2');
player2.addEventListener('click', function () {
    score2.innerText++;
    if (score2.innerText === maxScore.value) {
        score2.style.color = '#4ceb13';
        score1.style.color = 'red';
        player1.disabled = true;
        player2.disabled = true;
    }
})



