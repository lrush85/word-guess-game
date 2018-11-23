var words = [
    "cowboys",
    "bears",
    "rams",
    "eagles",
    "patriots",
    "steelers",
    "chiefs",
    "saints",
    "packers",
    "redskins",
    "vikings",
    "seahawks",
    "giants",
    "lions",
    "raiders",
    "falcons",
    "broncos",
    "browns",
    "ravens",
    "panthers",
    "texans",
    "fortyniners",
    "cardinals",
    "chargers",
    "colts",
    "dolphins",
    "jaguars",
    "bengles",
    "bills",
    "jets",
    "titans",
    "buccaneers",
    "bills"
];
// Pick Random Word
var word = words[Math.floor(Math.random() * words.length)];

// Answer setup

var userName = prompt("What is your name?");
document.getElementById("userName").innerHTML = userName + ", WELCOME!!! This is the NFL Guess Game... lets get started.  Choose a letter and try to figure out what team we are displaying!!! GOOD LUCK!";

var alpha = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var ul = document.createElement("ul");
document.getElementById("letters").appendChild(ul);

alpha.forEach(function(letter) {
    var li = document.createElement("li");
    ul.appendChild(li);
    var button = document.createElement("button");
    li.appendChild(button);
    button.innerHTML += letter;
});

// display random word "_" below buttons
var answer = [];
for (var w = 0; w < word.length; w++) {
    answer[w] = "_";
}

var remainingLetters = word.length;

// If alpha selected, keep active and then push selected alpha or (letter in array) to answer array and join to the random word 

var displayAnswer = document.getElementById("answer").append(answer.join(" "));

document.getElementById("hold").addEventListener("click", function (e) {
    
});

