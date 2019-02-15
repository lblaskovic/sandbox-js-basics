const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('try again');
  }
};

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if(userChoice === computerChoice){
    return 'tie';
  }
  if(userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'computer won';
    } else {
      return 'you won!';
    }
  }
  if(userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return 'computer won';
    } else {
      return 'you won!';
    }
	}
  if(userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return 'computer won';
    } else {
      return 'you won!';
    }
  }  
}

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You picked: ' + userChoice);
  console.log('Computer picked: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();