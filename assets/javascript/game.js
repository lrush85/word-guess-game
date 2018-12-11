window.onload = function() {

    // Prompt to ask for user name
    var userName = document.getElementById("user-name");
    var user = prompt("What is your name?");
    userName.textContent = "Hello " + user + ". Welcome to the NFL Guessing Game.  All you have to do is choose the team we are thinking of.  Good Luck!!";

    // Prompt to ask for the favorite team name.
    var favTeam = prompt("What is your favorite NFL team").toLowerCase();
    

    //Create all variables need for the game.

    var lives;
    var counter;
    var space;
    var guesses = [];
    var guess;
    var words = [
        "COWBOYS", "BEARS", "RAMS", "EAGLES", "PATRIOTS", "STEELERS", "CHIEFS", "SAINTS", "PACKERS", "REDSKINS", "VIKINGS", "SEAHAWKS", "GIANTS", "LIONS", "RAIDERS", "FALCONS", "BRONCOS", "BROWNS", "RAVENS", "PANTHERS", "TEXANS", "FORTY NINERS", "CARDINALS", "CHARGERS", "COLTS", "DOLPHINS", "JAGUARS", "BENGALS", "BILLS", "JETS", "TITANS", "BUCCANEERS"
        ];

    // Picking a random word
    var word = words[Math.floor(Math.random() * words.length)+1]; 

    // An array of letters
    var alpha = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
        ];

/* 
   ===================================================
   ------------------ FUNCTIONS ---------------------- 
   ===================================================
*/

    function theme(){

        var themeSong= document.getElementById("theme-song");
        themeSong.load();
        themeSong.currentTime = 0;
        themeSong.play();

        setInterval(function(){
            if(themeSong.currentTime>30) {
                themeSong.pause();
                }
            }, 1000);
    }

    theme();



    function logo() {
        teamLogo = document.getElementById("team-logo");
        teamLogoImg = document.createElement("img");
        switch (favTeam) {
            case "falcons": 
                teamLogoImg.src = "./assets/images/Atlanta_Falcons_logo-300x285.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "cardinals":
                teamLogoImg.src = "./assets/images/Arizona_Cardinals_logo-300x270.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "ravens":
                teamLogoImg.src = "./assets/images/Baltimore_Ravens_logo-300x147.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "bills":
                teamLogoImg.src = "./assets/images/Buffalo_Bills_logo-300x200.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "panthers":
                teamLogoImg.src = "./assets/images/Carolina_Panthers_logo-300x164.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "bears":
                teamLogoImg.src = "./assets/images/Chicago_Bears_logo-300x201.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "bengals":
                teamLogoImg.src = "./assets/images/Cincinnati_Bengals_logo-300x211.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "browns":
                teamLogoImg.src = "./assets/images/Cleveland_Browns_logo-300x232.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "cowboys":
                teamLogoImg.src = "./assets/images/Dallas_Cowboys_logo-300x285.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "broncos":
                teamLogoImg.src = "./assets/images/Denver_Broncos_logo-300x175.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "lions":
                teamLogoImg.src = "./assets/images/Detroit_Lions_logo-300x230.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "packers":
                teamLogoImg.src = "./assets/images/Green_Bay_Packers_logo-300x198.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "colts":
                teamLogoImg.src = "./assets/images/indianapolis_colts_logo_colors.png";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "texans":
                teamLogoImg.src = "./assets/images/Houston_Texans_logo-300x274.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "jaguars":
                teamLogoImg.src = "./assets/images/Jacksonville_Jaguars_logo-300x226.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "chiefs":
                teamLogoImg.src = "./assets/images/Kansas_City_Chiefs_logo-300x191.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "chargers":
                teamLogoImg.src = "./assets/images/NFL_Chargers_logo-300x164.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "rams":
                teamLogoImg.src = "./assets/images/Los_Angeles_Rams_logo-300x214.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "dolphins":
                teamLogoImg.src = "./assets/images/dolphins_logo_2018-300x220.png";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "vikings":
                teamLogoImg.src = "./assets/images/Minnesota_Vikings_logo-244x300.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "patriots":
                teamLogoImg.src = "./assets/images/New_England_Patriots_logo-300x146.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "saints":
                teamLogoImg.src = "./assets/images/New_Orleans_Saints_logo-246x300.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "giants":
                teamLogoImg.src = "./assets/images/New_York_Giants_logo.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "jets":
                teamLogoImg.src = "./assets/images/new_york_jets_colors-300x176.png";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "raiders":
                teamLogoImg.src = "./assets/images/Oakland_Raiders_logo-283x300.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "eagles":
                teamLogoImg.src = "./assets/images/Philadelphia_Eagles_logo-300x207.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "steelers":
                teamLogoImg.src = "./assets/images/Pittsburgh_Steelers_logo-300x300.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "forty niners":
                teamLogoImg.src = "./assets/images/San_Francisco_49ers_logo-300x177.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "seahawks":
                teamLogoImg.src = "./assets/images/Seattle_Seahawks_logo-300x133.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "buccaneers":
                teamLogoImg.src = "./assets/images/bucs_97-300x276.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "titans":
                teamLogoImg.src = "./assets/images/Tennessee_Titans_logo-300x214.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            case "redskins":
                teamLogoImg.src = "./assets/images/Washington_Redskins_logo-279x300.jpg";
                teamLogo.appendChild(teamLogoImg);
                break;
            default:
            teamLogoImg.src = "./assets/images/nfllogo.gif";
            teamLogo.appendChild(teamLogoImg);
        }
    }
    logo();

    function favoriteTeam(favTeam) {

        teamName = document.getElementsByClassName("team-background");
        

        for(var i = 0; i < teamName.length; i++) {

            switch (favTeam) {

                case "falcons":
                    document.body.style.backgroundColor = "#A71930";
                    teamName[i].style.backgroundColor = "#A71930";
                    break;
                
                case "cardinals":
                    document.body.style.backgroundColor = "#97233F";
                    teamName[i].style.backgroundColor = "#97233F";
                    break;

                case "ravens":
                    document.body.style.backgroundColor = "#241773";
                    teamName[i].style.backgroundColor = "#241773";
                    break;

                case "bills":
                    document.body.style.backgroundColor = "#C60C30";
                    teamName[i].style.backgroundColor = "#C60C30";
                    break;

                case "panthers":
                    document.body.style.backgroundColor = "#0085ca";
                    teamName[i].style.backgroundColor = "#0085ca"; 
                    break;

                case "bears":
                    document.body.style.backgroundColor = "#0B162A";
                    teamName[i].style.backgroundColor = "#0B162A";
                    break;

                case "bengals":
                    document.body.style.backgroundColor = "#FB4F14";
                    teamName[i].style.backgroundColor = "#FB4F14";
                    break;

                case "browns":
                    document.body.style.backgroundColor = "#FF3C00";
                    teamName[i].style.backgroundColor = "#FF3C00";
                    break;

                case "cowboys":
                    document.body.style.backgroundColor = "#041E42";
                    teamName[i].style.backgroundColor = "#041E42";
                    break;

                case "broncos":
                    document.body.style.backgroundColor = "#002244";
                    teamName[i].style.backgroundColor = "#002244";
                    break;

                case "lions":
                    document.body.style.backgroundColor = "#0076B6";
                    teamName[i].style.backgroundColor = "#0076B6";
                    break;

                case "packers":
                    document.body.style.backgroundColor = "#203731";
                    teamName[i].style.backgroundColor = "#203731";
                    break;

                case "texans":
                    document.body.style.backgroundColor = "#03202F";
                    teamName[i].style.backgroundColor = "#03202F";
                    break;

                case "colts":
                    document.body.style.backgroundColor = "#002C5F";
                    teamName[i].style.backgroundColor = "#002C5F";
                    break;

                case "jaguars":
                    document.body.style.backgroundColor = "#006778";
                    teamName[i].style.backgroundColor = "#006778";
                    break;

                case "chiefs":
                    document.body.style.backgroundColor = "#E31837";
                    teamName[i].style.backgroundColor = "#E31837";
                    break;

                case "chargers":
                    document.body.style.backgroundColor = "#002A5E";
                    teamName[i].style.backgroundColor = "#002A5E";
                    break;

                case "rams":
                    document.body.style.backgroundColor = "#002244";
                    teamName[i].style.backgroundColor = "#002244";
                    break;

                case "dolphins":
                    document.body.style.backgroundColor = "#008E97";
                    teamName[i].style.backgroundColor = "#008E97";
                    break;

                case "vikings":
                    document.body.style.backgroundColor = "#4F2683";
                    teamName[i].style.backgroundColor = "#4F2683";
                    break;

                case "patriots":
                    document.body.style.backgroundColor = "#012169";
                    teamName[i].style.backgroundColor = "#012169";
                    break;

                case "saints":
                    document.body.style.backgroundColor = "#D3BC8D";
                    teamName[i].style.backgroundColor = "#D3BC8D";
                    break;

                case "giants":
                    document.body.style.backgroundColor = "#0B2265";
                    teamName[i].style.backgroundColor = "#0B2265";
                    break;

                case "jets":
                    document.body.style.backgroundColor = "#003F2D";
                    teamName[i].style.backgroundColor = "#003F2D";
                    break;

                case "raiders":
                    document.body.style.backgroundColor = "#000000";
                    teamName[i].style.backgroundColor = "#000000";
                    break;

                case "eagles":
                    document.body.style.backgroundColor = "#004C54";
                    teamName[i].style.backgroundColor = "#004C54";
                    break;

                case "steelers":
                    document.body.style.backgroundColor = "#101820";
                    teamName[i].style.backgroundColor = "#101820";
                    break;

                case "forty niners":
                    document.body.style.backgroundColor = "#AA0000";
                    teamName[i].style.backgroundColor = "#AA0000";
                    break;

                case "seahawks":
                    document.body.style.backgroundColor = "#002244";
                    teamName[i].style.backgroundColor = "#002244";
                    break;

                case "buccaneers":
                    document.body.style.backgroundColor = "#D50A0A";
                    teamName[i].style.backgroundColor = "#D50A0A";
                    break;

                case "titans":
                    document.body.style.backgroundColor = "#002A5C";
                    teamName[i].style.backgroundColor = "#002A5C";
                    break;

                case "redskins":
                    document.body.style.backgroundColor = "#773141";
                    teamName[i].style.backgroundColor = "#773141";
                    break;

            }
        }
    }




    function buttons() {

        alphaButtons = document.getElementById('buttons');
        letters = document.createElement("ul");

        for(var i = 0; i < alpha.length; i++) {
            letters.id = "alpha";
            list = document.createElement("li");
            list.id = "letter";
            list.innerHTML = alpha[i];
            isClicked();
            alphaButtons.appendChild(letters);
            letters.appendChild(list);


            switch(favTeam) {
                case "cardinals":
                    list.style.border = "1px solid #FFB612";
                    list.style.color = "#FFB612";
                    break;

                case "falcons":
                    list.style.border = "1px solid #000000";
                    list.style.color = "#000000";
                    break;

                case "ravens":
                    list.style.border = "1px solid #000000";
                    list.style.color = "#000000";
                    break;

                case "bills":
                    list.style.border = "1px solid #00338D";
                    list.style.color = "#00338d";
                    break;
                
                case "panthers":
                    list.style.border = "1px solid #101820";
                    list.style.color = "#101820";
                    break;

                case "bears":
                    list.style.border = "1px solid #C83803";
                    list.style.color = "#C83803";
                    break;
                
                case "bengals":
                    list.style.border = "1px solid #000000";
                    list.style.color = "#000000";
                    break;

                case "browns":
                    list.style.border = "1px solid #311D00";
                    list.style.color = "#311D00";
                    break;
                
                case "cowboys":
                    list.style.border = "1px solid #869397";
                    list.style.color = "#869397";
                    break;

                case "broncos":
                    list.style.border = "1px solid #FB4F14";
                    list.style.color = "#FB4F14";
                    break;

                case "lions":
                    list.style.border = "1px solid #B0B7BC";
                    list.style.color = "#B0B7BC";
                    break;

                case "packers":
                    list.style.border = "1px solid #FFB612";
                    list.style.color = "#FFB612";
                    break;

                case "texans":
                    list.style.border = "1px solid #A71930";
                    list.style.color = "#A71930";
                    break;

                case "colts":
                    list.style.border = "1px solid #A2AAAD";
                    list.style.color = "#A2AAAD";
                    break;

                case "jaguars":
                    list.style.border = "1px solid #D7A22A";
                    list.style.color = "#D7A22A";
                    break;

                case "chiefs":
                    list.style.border = "1px solid #FFB81C";
                    list.style.color = "#FFB81C";
                    break;

                case "chargers":
                    list.style.border = "1px solid #FFC20E";
                    list.style.color = "#FFC20E";
                    break;

                case "rams":
                    list.style.border = "1px solid #866D4B";
                    list.style.color = "#866D4B";
                    break;

                case "dolphins":
                    list.style.border = "1px solid #F26A24";
                    list.style.color = "#F26A24";
                    break;

                case "vikings":
                    list.style.border = "1px solid #FFC62F";
                    list.style.color = "#FFC62F";
                    break;

                case "patriots":
                    list.style.border = "1px solid #C8102E";
                    list.style.color = "#C8102E";
                    break;

                case "saints":
                    list.style.border = "1px solid #101820";
                    list.style.color = "#101820";
                    break;

                case "giants":
                    list.style.border = "1px solid #A71930";
                    list.style.color = "#A71930";
                    break;

                case "jets":
                    list.style.border = "1px solid #27251F";
                    list.style.color = "#27251F";
                    break;

                case "raiders":
                    list.style.border = "1px solid #A5ACAF";
                    list.style.color = "#A5ACAF";
                    break;

                case "eagles":
                    list.style.border = "1px solid #A5ACAF";
                    list.style.color = "#A5ACAF";
                    break;
                
                case "steelers":
                    list.style.border = "1px solid #FFB612";
                    list.style.color = "#FFB612";
                    break;

                case "forty niners":
                    list.style.border = "1px solid #B3995D";
                    list.style.color = "#B3995D";
                    break;

                case "seahawks":
                    list.style.border = "1px solid #69BE28";
                    list.style.color = "#69BE28";
                    break;

                case "buccaneers":
                    list.style.border = "1px solid #0A0A08";
                    list.style.color = "#0A0A08";
                    break;

                case "titans":
                    list.style.border = "1px solid #4495D1";
                    list.style.color = "#4495D1";
                    break;

                case "redskins":
                    list.style.border = "1px solid #FFB612";
                    list.style.color = "#FFB612";
                    break;



            }
        }
    }

    // Create a function to display result of correct or incorrect guess within the random word selected

    function result() {
        wordHolder = document.getElementById("word");
        correct = document.createElement("ul");

        // Iterating through each letter of the word
        for(var i = 0; i < word.length; i++) {

            // Adding an id attribute to correct UL
            correct.setAttribute("id", "correct");

            // Create an element for the guess var
            guess = document.createElement("li");

            //setting a class attribute to guess LI
            guess.setAttribute("class", "guess");

            // this ensures if there is a space it puts a dash in its place
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

            switch(favTeam) {
                case "cardinals":
                    guess.style.color = "#ffb612";
                    break;
                case "falcons":
                    guess.style.color = "#000000";
                    break;
                case "ravens":
                    guess.style.color = "#000000";
                    break;
                case "bills":
                    guess.style.color = "#00338D";
                    break;
                case "panthers":
                    guess.style.color = "#101820";
                    break;
                case "bears":
                    guess.style.color = "#C83803";
                    break;
                case "bengals":
                    guess.style.color = "#000000";
                    break;
                case "browns":
                    guess.style.color = "#311D00";
                    break;
                case "cowboys":
                    guess.style.color = "#869397";
                    break;
                case "broncos":
                    guess.style.color = "#FB4F14";
                    break;
                case "lions":
                    guess.style.color = "#B0B7BC";
                    break;
                case "packers":
                    guess.style.color = "#FFB612";
                    break;
                case "texans":
                    guess.style.color = "#A71930";
                    break;
                case "colts":
                    guess.style.color = "#A2AAAD";
                    break;
                case "jaguars":
                    guess.style.color = "#D7A22A";
                    break;
                case "chiefs":
                    guess.style.color = "#FFB81C";
                    break;
                case "chargers":
                    guess.style.color = "#FFC20E";
                    break;
                case "rams":
                    guess.style.color = "#866D4B";
                    break;
                case "dolphins":
                    guess.style.color = "#F26A24";
                    break;
                case "vikings":
                    guess.style.color = "#FFC62F";
                    break;
                case "patriots":
                    guess.style.color = "#C8102E";
                    break;
                case "saints":
                    guess.style.color = "#101820";
                    break;
                case "giants":
                    guess.style.color = "#A71930";
                    break;
                case "jets":
                    guess.style.color = "#27251F";
                    break;
                case "raiders":
                    guess.style.color = "#A5ACAF";
                    break;
                case "eagles":
                    guess.style.color = "#A5ACAF";
                    break;
                case "steelers":
                    guess.style.color = "#FFB612";
                    break;
                case "forty niners":
                    guess.style.color = "#B3995D";
                    break;
                case "seahawks":
                    guess.style.color = "#69BE28";
                    break;
                case "buccaneers":
                    guess.style.color = "#0A0A08";
                    break;
                case "titans":
                    guess.style.color = "#4495D1";
                    break;
                case "redskins":
                    guess.style.color = "#FFB612";
                    break;
                    
                    


            }
        }
    }

    // Create a function that displays how many lives left, if you win or lose
    var livesRemaining = document.getElementById("lives");

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

    function whistleButton(){
        var whistleSound= document.getElementById("whistle");
        whistleSound.currentTime=0;
        whistleSound.play();
        console.log(whistleSound.currentTime);
    }
    

    function isClicked() {

        // list is pulled from 
        list.onclick = function () {

            var guess = this.innerHTML;
            this.setAttribute("class", "active");

            // Loop through guesses and if guess is equal to letter in word display result, then increment the count
            for(var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    counter += 1;
                }
            }
            //If the index of the guess is -1 then we want to decrement the lives remaining
            var indexWord = word.indexOf(guess);
            // -1 refers to the letter not in the array
            if (indexWord === -1) {
                lives -= 1;
                status();
                whistleButton();
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
        isClicked();
        favoriteTeam(favTeam);
        

        reset = document.getElementsByClassName("reset-button");
            for (var i = 0; i < reset.length; i++) {

                if (favTeam === "cardinals") {
                    reset[i].style.color = "#ffb612";
                    reset[i].style.border = "1px solid #ffb612";
                } else if (favTeam === "falcons") {
                    reset[i].style.color = "#000000";
                    reset[i].style.border = "1px solid #000000";
                } else if (favTeam === "ravens") {
                    reset[i].style.color = "#000000";
                    reset[i].style.border = "1px solid #000000";
                } else if (favTeam === "bills") {
                    reset[i].style.color = "#00338D";
                    reset[i].style.border = "1px solid #00338D";
                } else if (favTeam === "panthers") {
                    reset[i].style.color = "#101820";
                    reset[i].style.border = "1px solid #101820";
                } else if (favTeam === "bears") {
                    reset[i].style.color = "#C83803";
                    reset[i].style.border = "1px solid #C83803";
                } else if (favTeam === "bengals") {
                    reset[i].style.color = "#000000";
                    reset[i].style.border = "1px solid #000000";
                } else if (favTeam === "browns") {
                    reset[i].style.color = "#311D00";
                    reset[i].style.border = "1px solid #311D00";
                } else if (favTeam === "cowboys") {
                    reset[i].style.color = "#869397";
                    reset[i].style.border = "1px solid #869397";
                } else if (favTeam === "broncos") {
                    reset[i].style.color = "#FB4F14";
                    reset[i].style.border = "1px solid #FB4F14";
                } else if (favTeam === "lions") {
                    reset[i].style.color = "#B0B7BC";
                    reset[i].style.border = "1px solid #B0B7BC";
                } else if (favTeam === "packers") {
                    reset[i].style.color = "#FFB612";
                    reset[i].style.border = "1px solid #FFB612";
                } else if (favTeam === "texans") {
                    reset[i].style.color = "#A71930";
                    reset[i].style.border = "1px solid #A71930";
                } else if (favTeam === "colts") {
                    reset[i].style.color = "#A2AAAD";
                    reset[i].style.border = "1px solid #A2AAAD";
                } else if (favTeam === "jaguars") {
                    reset[i].style.color = "#D7A22A";
                    reset[i].style.border = "1px solid #D7A22A";
                } else if (favTeam === "chiefs") {
                    reset[i].style.color = "#FFB81C";
                    reset[i].style.border = "1px solid #FFB81C";
                } else if (favTeam === "chargers") {
                    reset[i].style.color = "#FFC20E";
                    reset[i].style.border = "1px solid #FFC20E";
                } else if (favTeam === "rams") {
                    reset[i].style.color = "#866D4B";
                    reset[i].style.border = "1px solid #866D4B";
                } else if (favTeam === "dolphins") {
                    reset[i].style.color = "#F26A24";
                    reset[i].style.border = "1px solid #F26A24";
                } else if (favTeam === "vikings") {
                    reset[i].style.color = "#FFC62F";
                    reset[i].style.border = "1px solid #FFC62F";
                } else if (favTeam === "patriots") {
                    reset[i].style.color = "#C8102E";
                    reset[i].style.border = "1px solid #C8102E";
                } else if (favTeam === "saints") {
                    reset[i].style.color = "#101820";
                    reset[i].style.border = "1px solid #101820";
                } else if (favTeam === "giants") {
                    reset[i].style.color = "#A71930";
                    reset[i].style.border = "1px solid #A71930";
                } else if (favTeam === "jets") {
                    reset[i].style.color = "#27251F";
                    reset[i].style.border = "1px solid #27251F";
                } else if (favTeam === "raiders") {
                    reset[i].style.color = "#A5ACAF";
                    reset[i].style.border = "1px solid #A5ACAF";
                } else if (favTeam === "eagles") {
                    reset[i].style.color = "#A5ACAF";
                    reset[i].style.border = "1px solid #A5ACAF";
                } else if (favTeam === "steelers") {
                    reset[i].style.color = "#FFB612";
                    reset[i].style.border = "1px solid #FFB612";
                } else if (favTeam === "forty niners") {
                    reset[i].style.color = "#B3995D";
                    reset[i].style.border = "1px solid #B3995D";
                } else if (favTeam === "seahawks") {
                    reset[i].style.color = "#69BE28";
                    reset[i].style.border = "1px solid #69BE28";
                } else if (favTeam === "buccaneers") {
                    reset[i].style.color = "#0A0A08";
                    reset[i].style.border = "1px solid #0A0A08";
                } else if (favTeam === "titans") {
                    reset[i].style.color = "#4495D1";
                    reset[i].style.border = "1px solid #4495D1";
                } else if (favTeam === "redskins") {
                    reset[i].style.color = "#FFB612";
                    reset[i].style.border = "1px solid #FFB612";
                }


            }

    }

    play();


    // Reset the game
    document.getElementById("reset").onclick = function () {
        // Clears out the letters.
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        
        play();
    };

};