var inquirer = require('inquirer');

var basicCard = require("./BasicCard.js");
var basicQ = require("./basic.js")


// holds the resolved questions//

var resolvedQ = [];

for (var i = 0; i < basicQ.length; i++) {

	var q = new basicCard (basicQ[i].front, basicQ[i].back);
	resolvedQ.push(q);
}

// How many questions the user has gotten right
var answerRight = 0;
// How many questions the user has gotten wrong
var answerWrong = 0;



function askQuestion(q) {

    inquirer.prompt ([{
        type: 'input',
        // If I call q.front[i] there is not question prompted in the terminal// q.front is prompting the same question
        message: resolvedQ[q].front,
        name: 'userGuess'
    }

]).then(function(answers) {
    console.log('\n');
    if(answers.userGuess.toLowerCase() === q.back.toLowerCase()){
        console.log("Your answers is correct!" )
        answerRight++;
    } else {
        console.log("Incorrect")
        answerWrong++;
    }
	// Go to the next question
    if (q< resolvedQ.length - 1) {
        
        askQuestion(q++);
    } else {
        console.log('Game Over!');
        console.log('Correct Answers: ' + answerRight);
        console.log('Incorrect Answers: ' + answerWrong); 

        inquirer.prompt([
            {
                type: 'confirm',
                message: 'Would you like to play again?',
                name: 'playAgain'
            }
        ]).then(function (answers) {
            if (answers.playAgain) {
                // Reset the game
                q = 0;
                answerRight = 0;
                answerWrong = 0;
    
                // Ask the questions again
                //Is not working when the user wants to play again
                askQuestion(q);
            } else {
                // Exit the game
                console.log('Thanks for playing Flashcards!');
            }
        })
    }
})
}

askQuestion(0);
