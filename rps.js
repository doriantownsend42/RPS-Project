
 const objects = ['rock', 'paper', 'scissors']


 // Player selection 

const playerOne = document.getElementById('playerSelection'); 

function playerSelection() {
 
  const playerChoice = prompt('Choose your object.');
    
  if (playerChoice ==="rock" || playerChoice ==="paper" || playerChoice ==="scissors" ) {
      console.log("You chose " + `${playerChoice}`);
    } else {
      console.log('An error has occured. Try again!');
    }

}

playerSelection();


// Computer Selection

function getComputerChoice() {
    
  const computerInput = objects[Math.floor(Math.random() * objects.length)]
    console.log('Computer chose ' + `${computerInput}`);
  
}

getComputerChoice();

// Play round

function playRound(playerSelection, getComputerChoice) {
  if ('rock' === 'rock') {
    console.log('It\'s a tie!');
  } else if ('rock' === 'paper') {
    console.log('Computer Wins!');
  } 
}