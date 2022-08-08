const attackArray = ['Crush', 'Snip', 'Smother'];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return attackArray[choice];
}

function playRound(humanAttack, roboAttack) {
    switch (humanAttack.toUpperCase()) {
        case 'CRUSH':
            if (roboAttack.toUpperCase() === 'SNIP') {
                return 'Victory: You beat the bot!';
            }
            else if (roboAttack.toUpperCase() === 'SMOTHER') {
                return 'Defeat: You were smothered by Skynet...';
            }
            else {
                return 'Tie: You live to fight another day.';
            };
        case 'SNIP':
            if (roboAttack.toUpperCase() === 'SMOTHER') {
                return 'Victory: You are the king of kirigami!';
            }
            else if (roboAttack.toUpperCase() === 'CRUSH') {
                return 'Defeat: You were brutalized by the bot...';
            }
            else {
                return 'Tie: You live to fight another day.';
            };
        case 'SMOTHER':
            if (roboAttack.toUpperCase() === 'CRUSH') {
                return 'Victory: Your attack was truly breathtaking!';
            }
            else if (roboAttack.toUpperCase() === 'SNIP') {
                return 'Defeat: Your electronic enemy tore you to shreads...';
            }
            else {
                return 'Tie: You live to fight another day.';
            };
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let meatBagChoice = prompt('Choose your attack!\n(Crush, Snip, or Smother)');
        let toasterWithAnAttitudeChoice = getComputerChoice();
        console.log(playRound(meatBagChoice, toasterWithAnAttitudeChoice));
    }

    console.log('INSERT COIN TO CONTINUE...');
}