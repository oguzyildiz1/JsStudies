var numberToGuess = Math.floor(Math.random() * 10) + 1;
var attempts = 0;

function playGame(){
    

    for(let i =0; i <3; i++){
        var number = prompt("Please enter a number");
        var guess = Number(number);
        attempts++;

        if(isNaN(guess) || guess <1 || guess > 10 ) {
            console.log("please enter a valid number");
            continue;
        }

        let message = "";
        
        if(guess === numberToGuess){
            message = "You have find the number";
            var guessed = true;
            break;
        }
        else if(guess < numberToGuess){
            message = "Number is bigger";
        }else if(guess > numberToGuess){
            message = "Number is smaller";
        }

        console.log(message);
    };
    
    var guessedMessage = guessed ? 'guessed' : 'didn\'t guessed';
    console.log(`you have ${guessedMessage}. The number was ${numberToGuess}` );
};
