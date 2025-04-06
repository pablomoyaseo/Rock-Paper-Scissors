const max = 3
const rock = 0
const paper = 1
const scissor = 2
const choice = prompt('Make your choice: rock, paper or scissor').toLowerCase()
let humanScore = 0
let computerScore = 0




function getHUmanChoice(choice) {
    return choice
}


function getComputerChoice(max) {
    return Math.floor(Math.random() * max)
}


console.log(getComputerChoice(max));

console.log(getHUmanChoice(choice))





