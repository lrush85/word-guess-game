window.onload = function() {

    //Create all variables need for the game.

var lives;
var counter;
var space;
var guesses = [];
var guess;
var words = [
    "COWBOYS",
    "BEARS",
    "RAMS",
    "EAGLES",
    "PATRIOTS",
    "STEELERS",
    "CHIEFS",
    "SAINTS",
    "PACKERS",
    "REDSKINS",
    "VIKINGS",
    "SEAHAWKS",
    "GIANTS",
    "LIONS",
    "RAIDERS",
    "FALCONS",
    "BRONCOS",
    "BROWNS",
    "RAVENS",
    "PANTHERS",
    "TEXANS",
    "FOURTY NINERS",
    "CARDINALS",
    "CHARGERS",
    "COLTS",
    "DOLPHINS",
    "JAGUARS",
    "BENGALS",
    "BILLS",
    "JETS",
    "TITANS",
    "BUCCANEERS"
];

var word = words[Math.floor(Math.random() * words.length)];
var alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];

var livesRemaining = document.getElementById("lives");

// Create letters list of alphabet function
// I created a buttons function that hold the alphabet with styles
function buttons() {

    alphaButtons = document.getElementById('buttons');
    letters = document.createElement("ul");

    for(var i = 0; i < alpha.length; i++) {
        letters.id = "alpha";
        list = document.createElement("li");
        list.id = "letter";
        list.innerHTML = alpha[i];
        clicked();
        alphaButtons.appendChild(letters);
        letters.appendChild(list);
    }
}

// Create a function to display result of correct or incorrect guess within the random word selected

function result() {
    wordHolder = document.getElementById("word");
    correct = document.createElement("ul");

    for(var i = 0; i < word.length; i++) {
        correct.setAttribute("id", "correct");
        guess = document.createElement("li");
        guess.setAttribute("class", "guess");
        // if word index is equal to "-" then add guess to "-"
        // and space = 1
        // else add guess to " _ "

        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = " _ ";
        }

        // Push result to guesses array
        // Append to ul and li

        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
}

// Create a function that displays how many lives left, if you win or lose

function status() {
    livesRemaining.innerHTML = "You have " + lives + " lives remaining.";

    // If lives is less than 1 display game over, and an alert
    if (lives < 1) {
        livesRemaining.innerHTML = "Game Over!";
    }
    // Loop through guesses
    for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
            livesRemaining.innerHTML = "You Win!";
        }
    }
}

// Create a function that reacts to click of the li, handles change of status function and added guess to result if correct

function clicked() {
    list.onclick = function () {
        var guess = this.innerHTML;
        this.setAttribute("class", "active");
        this.onclick = null;

        // Loop through guesses and if guess is equal to letter in word display result, then increment the count
        for(var i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                guesses[i].innerHTML = guess;
                counter += 1;
            }
        }
        //If the index of the guess is -1 then we want to decrement the lives remaining
        var indexWord = word.indexOf(guess);
        if (indexWord === -1) {
            lives -= 1;
            status();
        } else {
            status();
        }
    };
}

// Create the function that allows user to play the game
function play() {
    word = words[Math.floor(Math.random() * words.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    status();
}

play();


// Reset the game
    document.getElementById("reset").onclick = function () {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);

    play();
    };
};