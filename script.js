const attacks = document.querySelectorAll('button');
console.log(attacks);
attacks.forEach( btn => {
    btn.addEventListener('click', playRound);
})

const roundDisplay = document.querySelector('#roundResult');

let score = [0, 0];
const scoreBoard = document.querySelector('#score');
setScoreboard();

function setScoreboard() {
    scoreBoard.textContent = `Meatbag: ${score[0]} | Toaster: ${score[1]}`;
}

function isGameOver() {
    if (score[0] == 5 || score[1] == 5) {
        return true;
    }
    else { 
        return false; 
    }
}

function clearBoard() {
    score.fill(0);
    setScoreboard();
    roundDisplay.textContent = '';
}

const attackArray = ['Crush', 'Snip', 'Smother'];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return attackArray[choice];
}

function getRoundWinner(meatBagChoice) {
    let roundDetails = {
        winner: '',
        message: ''
    }
    roboAttack = getComputerChoice();

    switch (meatBagChoice.toUpperCase()) {
        case 'CRUSH':
            if (roboAttack.toUpperCase() === 'SNIP') {
                roundDetails.winner = 'Meatbag';
                roundDetails.message = 'Victory: You beat the bot!';
            }
            else if (roboAttack.toUpperCase() === 'SMOTHER') {
                roundDetails.winner = 'Toaster';
                roundDetails.message = 'Defeat: You were smothered by Skynet...';
            }
            else {
                roundDetails.message = 'Tie: You live to fight another day.';
            };
            break;
        case 'SNIP':
            if (roboAttack.toUpperCase() === 'SMOTHER') {
                roundDetails.winner = 'Meatbag';
                roundDetails.message = 'Victory: You are the king of kirigami!';
            }
            else if (roboAttack.toUpperCase() === 'CRUSH') {
                roundDetails.winner = 'Toaster';
                roundDetails.message = 'Defeat: You were brutalized by the bot...';
            }
            else {
                roundDetails.message = 'Tie: You live to fight another day.';
            };
            break;
        case 'SMOTHER':
            if (roboAttack.toUpperCase() === 'CRUSH') {
                roundDetails.winner = 'Meatbag';
                roundDetails.message = 'Victory: Your attack was truly breathtaking!';
            }
            else if (roboAttack.toUpperCase() === 'SNIP') {
                roundDetails.winner = 'Toaster';
                roundDetails.message = 'Defeat: Your electronic enemy tore you to shreads...';
            }
            else {
                roundDetails.message = 'Tie: You live to fight another day.';
            };
            break;
    }

    return roundDetails;
}

function playRound(e) {
    round = getRoundWinner(e.target.id);
    roundDisplay.textContent = round.message;
    if (round.winner.toUpperCase() === 'MEATBAG') {
        score[0] = score[0] + 1;
    }
    else if (round.winner.toUpperCase() === 'TOASTER') {
        score[1] += 1;
    }
    setScoreboard()
    if (isGameOver()) {
        if (score[0] > score[1]) {
            alert("You have won the war!");
        }
        else {
            alert("Humanity is doomed...");
        }
        clearBoard();
    }
}
