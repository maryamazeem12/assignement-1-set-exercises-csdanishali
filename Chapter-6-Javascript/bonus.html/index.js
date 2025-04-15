//run this when the page loads
window.onload = () => {
    iniGame();//start new game
    //restart the game by play again button
    document.querySelector('#playAgainBtn').addEventListener('click',iniGame);
    //restart the game when difficulty is changed
    document.querySelector('#difficultySelect').addEventListener('change',iniGame);

};
//default values
let score= 0;
let lives = 3;
let correctColor = '';
let totalOptions = 6;
//start or restart game
function iniGame(){
    score=0;
    lives=3;
    updateStats();
//hide the game over modal
    document.getElementById('gameOverModal').style.display = 'none';
//number of boxes according to the option selected
    totalOptions = parseInt(document.getElementById('difficultySelect').value);
//generate new colors
    generateColors();
}
//update score and lives
function updateStats() {
    document.getElementById('score').textContent = score;
    document.getElementById('lives').textContent = lives;
}
//generate random rgb colors
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
//create color boxes 
function generateColors(){
    const colorGrid = document.getElementById('colorGrid');
    //clear previous boxes
    colorGrid.innerHTML = '';

    const colors = [];
    //generate an array of random rgb colors
    for (let i = 0; i< totalOptions; i++) {
        colors.push(randomRGB());
    }
//select any random color
    const correctIndex = Math.floor(Math.random() * totalOptions);
    correctColor= colors[correctIndex];
    //display the correct rgb value for the user to guess
    document.getElementById('rgbDisplay').textContent = correctColor.toUpperCase();
//create a box for each rgb color
    colors.forEach(color=> {
        const box = document.createElement('div');
        box.classList.add('color-box');
        box.style.backgroundColor = color;

        box.addEventListener('click', () => {
            if (color === correctColor) {
                //correct answer
                score++;
            }else{
                //wrong answer
                lives--;
            }

            updateStats();

            if (lives===0){
                //End the game if there is no lives
                showGameOver();
            } else{
                //continue game
                generateColors();
            }
            });
            //add box to grid
            colorGrid.appendChild(box);
        });
    }
    //show the game over message and display final score
    function showGameOver() {
        document.getElementById('finalScore').textContent= `Your score: ${score}`;
        document.getElementById('gameOverModal').style.display = `block`;
    }
