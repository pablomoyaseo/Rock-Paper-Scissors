/* rock = 0
paper = 1
scissor = 2 */


let humanScore = 0
let computerScore = 0


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    
    if (choice === 0) {
        choice = 'rock'
    } else if (choice === 1) {
        choice = 'paper'
    } else {
        choice = 'scissor'
    }

    return choice
}


function getHumanChoice() {
    let choice = prompt('Make your choice: rock, paper or scissor').toLowerCase()

    return choice
}


function playRound (computerChoice, humanChoice) {
    if (computerChoice === humanChoice ) {
        return 'Tie'
    } else if (computerChoice === 'rock' && humanChoice === 'paper'  ) {
        humanScore++
        return 'Paper wins to Rock, Human won'
    } else if (computerChoice === 'rock' && humanChoice === 'scissor' ) {
        computerScore++
        return 'Rock wins to Scissor, Computer won'
    } else if (computerChoice === 'paper' && humanChoice === 'scissor'  ) {
        humanScore++
        return 'Scissor wins to Paper, Human won' 
    } else if (computerChoice === 'paper' && humanChoice === 'rock' ) {
        computerScore++
        return 'Paper wins to Rock, Computer won'
    } else if (computerChoice === 'scissor' && humanChoice === 'rock'  ) {
        humanScore++
        return 'Rock wins to Scissor, Human won'
    }  
    else if (computerChoice === 'scissor' && humanChoice === 'paper' ) {
        computerScore++
        return 'Scissor wins to Paper, Computer won'
    }
}


function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        console.log(`Round ${i + 1}:`);
        console.log(playRound(computerChoice, humanChoice));
    }
    
    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame(5);




 









