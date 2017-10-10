$(window).keydown(function(event){
    console.log(event.key);
    game.handleKeyPress(event.key);
});

function game_controller(){
    this.startGame = function(){
        var playerOne = new Player();
        var playerTwo = new Player();
        playerOne.initializeAvailableKeys(1);
        playerTwo.initializeAvailableKeys(2);
        game.players = [playerOne, playerTwo]
    };
    this.startRound = function(){

    };
    this.changePlayerTurn = function(){
        game.playerTurn = game.playerTurn - 1;
    };
    this.startTimer = function(time){
        game.timerTimeRemaining = time;
        var timeBetweenUpdates = 25;
        game.timerInterval = setInterval(function(){
            while(game.timerTimeRemaining > 0) {
                game.timerTimeRemaining = game.timerTimeRemaining - timeBetweenUpdates;
            }
                this.clearInterval(game.timerInterval)
            }, timeBetweenUpdates)
    };
    this.stopTimer = function(){
        clearInterval(game.timerInterval)
    };
    this.handleKeyPress = function(keyPress){
        if(game.players[0].availableKeys.indexOf(keyPress)!== keyPress){    //player 1 keys

        }
        else if(game.players[1].availableKeys.indexOf(keyPress)!== keyPress){   //player 2 keys

        }
    }
}