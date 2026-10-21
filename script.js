// Greet logic

const inputField = document.getElementById('userName');
const username = document.getElementById('displayName');
const button = document.getElementById('greetBtn');
button.addEventListener('click', ()=>{
    const name = inputField.value;
    username.textContent = name;
});

// Box Color Manipulation Logic
const redBox = document.getElementById('box1');
const blueBox = document.getElementById('box2');
const greenBox = document.getElementById('box3');
const yellowBox = document.getElementById('box4');

// let lever = false;
redBox.addEventListener('click', () => {
    redBox.classList.toggle('red');
});

blueBox.addEventListener('click', () => {
    blueBox.classList.toggle('blue');
});

greenBox.addEventListener('click', () => {
    greenBox.classList.toggle('green');
});

yellowBox.addEventListener('click', () => {
    yellowBox.classList.toggle('yellow');
});