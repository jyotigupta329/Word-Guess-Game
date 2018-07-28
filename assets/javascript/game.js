var computerChoices = ["apple", "boy", "cost", "dog", "electric", "facebook", "game", "horse",
    "india", "joke", "kite", "love", "monkey", "nation", "oskar", "pegion", "question", "rose",
    "sun", "time", "unicorn", "visa", "work", "xenon", "youtube", "zebra"]

var win = 0;
var loss = 0;
var totalGuess = 10;
var displayUserGuess = [];
var displayBlankSpace = [];
var flag = 0;
var res = [];
var displayBlankSpaceEl = document.getElementById("displayBlankId");
var guessEl = document.getElementById("guessId");
var displayGuessEl = document.getElementById("displayUserGuessId");
var losses = document.getElementById("lossId");
var wins = document.getElementById("winId");
// Randomly chooses a choice from the options array. This is the Computer's guess.

init();
document.onkeyup = function (event) {

    var userGuess = event.key;

    //Alert for duplicates guesses
    for (var i = 0; i < displayUserGuess.length; i++) {
        if (userGuess === displayUserGuess[i]) {
            flag = 1;
            alert("U already guessed this alphabet!");
            break;
        } else {
            flag = 0;
        }
    }

    if (flag === 0) {
        totalGuess--;
        //Display the user guess
        displayUserGuess.push(userGuess);

        displayGuessEl.textContent = displayUserGuess.join(', ');

        //If user choice letter matches the computer choice it replace the blank space with the letter
        for (var i = 0; i < res.length; i++) {
            if (userGuess === res[i]) {
                displayBlankSpace[i] = res[i];

            } else {

            }
            displayBlankSpaceEl.textContent = displayBlankSpace.join(' ');
        }


        for (var i = 0; i < res.length; i++) {
            console.log(res[i] !== displayBlankSpace[i] || totalGuess === 0);
            if (res[i] !== displayBlankSpace[i] && totalGuess === 0) {

                loss++;
                losses.textContent = loss;
                init();

                //alert("Game Lost!");
                break;
            }
            if (res[res.length - 1] === displayBlankSpace[displayBlankSpace.length - 1]) {
                win++;
                wins.textContent = win;
                losses.textContent = loss;
                init();
                break;
            }
            break;
        }

        guessEl.textContent = totalGuess;
    }

};

function init() {
    totalGuess = 10;
    displayUserGuess = [];
    displayBlankSpace = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Convert string to an array and Display the blank spaces

    res = computerGuess.split("");
    console.log(res);
    for (var i = 0; i < res.length; i++) {
        displayBlankSpace.push("_");
    }

    displayBlankSpaceEl.textContent = displayBlankSpace.join(' ');
    displayGuessEl.textContent = '';
    guessEl.textContent = 10;
}

