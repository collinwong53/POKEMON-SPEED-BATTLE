$(window).keydown(function(event){
    game.handleKeyPress(event.key);
});

function Game_controller(){
    this.startGame = function(){
        var playerOne = new Player();
        var playerTwo = new Player();
        playerOne.initializeAvailableKeys(1);
        playerTwo.initializeAvailableKeys(2);
        game_model.players = [playerOne, playerTwo]
    };
    this.startRound = function(){
        this.startTimer(5000)
    };
    this.changePlayerTurn = function(){
        game_model.playerTurn = game_model.playerTurn - 1;
    };
    this.startTimer = function(time){
        game_model.timerTimeRemaining = time;
        var timeBetweenUpdates = 25;
        game_model.timerInterval = setInterval(function(){
            game_model.timerTimeRemaining = game_model.timerTimeRemaining - timeBetweenUpdates;
            if(game_model.timerTimeRemaining <= 0) {
                this.clearInterval(game_model.timerInterval)
            }
        }, timeBetweenUpdates)
    };
    this.stopTimer = function(){
        clearInterval(game_model.timerInterval)
    };
    this.handleKeyPress = function(keyPress){
        if(game_model.players[0].availableKeys.indexOf(keyPress)!== keyPress){    //player 1 keys

        }
        else if(game_model.players[1].availableKeys.indexOf(keyPress)!== keyPress){   //player 2 keys

        }
    }
}