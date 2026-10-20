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

let lever = false;
redBox.addEventListener('click', () => {
    if (lever === false){
        lever = true;
        redBox.classList.add('red');
    } else if (lever === true){
        lever = false;
        redBox.classList.remove('red');
    }
});

blueBox.addEventListener('click', () => {
    if (lever === false){
        lever = true;
        blueBox.classList.add('blue');
    } else if (lever === true){
        lever = false;
        blueBox.classList.remove('blue');
    }
});

greenBox.addEventListener('click', () => {
    if (lever === false){
        lever = true;
        greenBox.classList.add('green');
    } else if (lever === true){
        lever = false;
        greenBox.classList.remove('green');
    }
});

yellowBox.addEventListener('click', () => {
    if (lever === false){
        lever = true;
        yellowBox.classList.add('yellow');
    } else if (lever === true){
        lever = false;
        yellowBox.classList.remove('yellow');
    }
});