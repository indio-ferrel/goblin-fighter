// import functions and grab DOM elements
import { renderer } from '/utils.js';

const form = document.querySelector('form');
const goblinList = document.querySelector('goblins');
const defeatedCount = document.querySelector('defeated-count');
const playerHP = document.querySelector('#player-hp');
const playerImg = document.querySelector('#player-img');

// let state
let defeatedCount = 0;
let heroHP = 5;
let goblins = [
    { name: 'Snobgoblin', hp: 1 },
    { name: 'Treasure Goblin', hp: 2 },
    { name: 'Leisure Goblin', hp: 3 }
];
// remember that naming goblins BOTH
// here like this AND 
// in html like that 
// may or may not be problematic but definitely seems dumb

// set event listeners
form.addEventListener('submit', (e) => {

    // get user input
    // use user input to update state 
    let newGoblin {
    name: goblinName,
    hp: Math.ceil(Math.random() * 6),
    };
    // update DOM to reflect the new state
    goblins.push(newGoblin);
    displayGoblins();
    form.reset();
});

function goblinClickHandler(goblin) {
    console.log(`I am clicking on ${goblin.name}`);
    if (goblin.hp === 0) return;
    if (heroHP === 0) return;

    const playerHit = Math.random();
    if (playerHit >= 0.5) {
        goblin.hp--;
        displayGoblins();
        alert(`You hit ${goblin.name}!`);

        if(goblin.hp === 0) {
            defeatedCount++;
            defeatedCounter.textContent = defeatedCount;
        }
    } else {
        alert('You missed!');
    }
    const goblinHit = Math.random();
    if (goblinHit >= 0.5) {
        heroHP--;
        
        playerHP.textContent = herorHP;
        alert (`${goblin.name} hit you!`);

        if (heroHP === 0) {
            alert('Your character fainted!  You black out and wake up at the nearest Pokemon Center (not the most recent one)!')
            playerImg.classList.add('ded');
        }
    } else {
        alert('${goblin.name} missed!');
    }
}

displayGoblins();