var computerChoices = ["apple", "boy", "cost", "dog", "electric", "facebook", "game", "horse",
    "india", "joke", "kite", "love", "monkey", "nation", "oskar", "pegion", "question", "rose",
    "sun", "time", "unicorn", "visa", "work", "xenon", "youtube", "zebra"]


var win = 0;
var loss = 0;
var totalGuess = 10;
var computerGuess;
var flag = 0;
var flagCom = 0;
var displayUserGuess = [];
var displayBlankSpace = [];
var res = [];
var correctChoicePositions = [];
//var correctChoice = [];
var displayBlankSpaceEl = document.getElementById("displayBlankId");
var guessEl = document.getElementById("guessId");
var displayGuessEl = document.getElementById("displayUserGuessId");
var losses = document.getElementById("lossId");
var wins = document.getElementById("winId");


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
        guessEl.textContent = totalGuess;
        //Display the user guess
        displayUserGuess.push(userGuess);
        console.log("userGuess so far: ", displayUserGuess);
        displayGuessEl.textContent = displayUserGuess.join(', ');
        //If user choice letter matches the computer choice it replace the blank space with the letter
        for (var i = 0; i < res.length; i++) {
            if (userGuess === res[i]) {
                displayBlankSpace[i] = res[i];
                correctChoicePositions.push(i);
                console.log("Choice positions: " , correctChoicePositions);
                displayBlankSpaceEl.textContent = displayBlankSpace.join(' ');
            }

        }

        var counter = comparision();
        if (counter === 1 && totalGuess >= 0) {
            win++;
            wins.textContent = win;
            alert("Congratulations!! You Won!! The word is : " + computerGuess);
            init();

            return;
        }
        if (totalGuess < 0) {
            loss++;
            losses.textContent = loss;
            alert("Sorry!! Try again!!");
            init();
            return;

        }
    }



}

function comparision() {
    if (correctChoicePositions.length === res.length) {
        return 1;
    } else {
        return 0;
    }
}

function init() {
    totalGuess = 10;
    displayUserGuess = [];
    displayBlankSpace = [];
    correctChoicePositions = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Convert string to an array and Display the blank spaces

    res = computerGuess.split("");
    console.log("target word:" , res);
    for (var i = 0; i < res.length; i++) {
        displayBlankSpace.push("_");
    }
    displayBlankSpaceEl.textContent = displayBlankSpace.join(' ');
    displayGuessEl.textContent = '';
    guessEl.textContent = 10;
}