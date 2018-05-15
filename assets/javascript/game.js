//set global variables
 $(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var redNumber;
    var blueNumber;
    var yellowNumber;
    var greenNumber;
    var crystalValue = 0;
    var redData;
    var blueData;
    var yellowData;
    var greenData;
    var targetNumber = Math.floor(Math.random() * 120) + 19;

    //reset the game and change variables
    function newGame() {
        targetNumber = Math.floor(Math.random() * 120) + 19;
        userScore = 0;
        $("#goalScore").text(targetNumber);
        $("#userWins").text(wins);
        $("#userLosses").text(losses);

        //choose random number between 1 and 12 for each crystal
        redNumber = Math.floor(Math.random() * 12) + 1;
        blueNumber = Math.floor(Math.random() * 12) + 1;
        yellowNumber = Math.floor(Math.random() * 12) + 1;
        greenNumber = Math.floor(Math.random() * 12) + 1;

        //convert number from string back to number and assign it
        redData = $("#redCrystal").attr("data-redval", redNumber);
        blueData = $("#blueCrystal").attr("data-blueval", blueNumber);
        yellowData = $("#yellowCrystal").attr("data-yellowval", yellowNumber);
        greenData = $("#greenCrystal").attr("data-greenval", greenNumber);
    }

        //when red crystal is clicked, points are added to total score
    $("#redCrystal").on("click", function () {
        crystalValue = ($(this).attr("data-redval"));
        crystalValue = parseInt(crystalValue);
        userScore += crystalValue;
        $("#userScore").text(userScore);

        //checks if user has won game, and then calls winGame function
        if (userScore === targetNumber) {
            winGame();
        }

        //checks if user has lost game, and then calls loseGame function
        if (userScore > targetNumber) {
            loseGame();
        }
    })

    $("#blueCrystal").on("click", function () {
        crystalValue = ($(this).attr("data-blueval"));
        crystalValue = parseInt(crystalValue);
        userScore += crystalValue;
        $("#userScore").text(userScore);
        if (userScore === targetNumber) {
            winGame();
        }

        if (userScore > targetNumber) {
            loseGame();
        }
    })

    $("#yellowCrystal").on("click", function () {
        crystalValue = ($(this).attr("data-yellowval"));
        crystalValue = parseInt(crystalValue);
        userScore += crystalValue;
        $("#userScore").text(userScore);
        if (userScore === targetNumber) {
            winGame();
        }

        if (userScore > targetNumber) {
            loseGame();
        }
    })

    $("#greenCrystal").on("click", function () {
        crystalValue = ($(this).attr("data-greenval"));
        crystalValue = parseInt(crystalValue);
        userScore += crystalValue;
        $("#userScore").text(userScore);
        if (userScore === targetNumber) {
            winGame();
        }

        if (userScore > targetNumber) {
            loseGame();
        }
    })


    //updates total wins, and resets variables by calling newGame function
    function winGame() {
        wins++;
        $("#userWins").text(wins);
        $("#lastGame").text("You won!");
        $("#userScore").empty();
        newGame();
    }
    //updates total losses, and resets variables by calling newGame function
    function loseGame() {
        losses++;
        $("#userLosses").text(losses);
        $("#lastGame").text("You lost!");
        $("#userScore").empty();
        newGame();
    }
    //starts the first game 
    newGame();
})

