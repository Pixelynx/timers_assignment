const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question(`Welcome to rock, paper, scissors. Please type 'rock, 'paper', or 'scissors' to make a choice.\n`, (res) => {
  console.log(`You chose: ${res}`)

let choices = ['rock', 'paper', 'scissors'];

setTimeout(() => {
  console.log(`Your choice is ${res}. Hmm...`)
}, 1000)
clearTimeout();

let compChoice = choices[Math.floor(Math.random() * choices.length)]

setTimeout(() => {
console.log("The computer's choice is " + compChoice);
if (res === compChoice) {
  console.log("It's a tie!");
} else if (res === "paper") {
    if (compChoice === "rock") {
    console.log("You won!");
  } else {
    console.log("The computer wins!");
  }
} else if (res === "rock") {
  if (compChoice === "scissors") {
    console.log("You won!");
  } else {
    console.log("The computer wins!");
  }
} else if (res === "scissors") {
  if (compChoice === "paper") {
    console.log("You won!");
  } else {
    console.log("The computer wins!");
  }
}
}, 2000)
clearTimeout();

setTimeout(() => {
  console.log("Play again?")
 process.exit(1);
}, 3000)
});
