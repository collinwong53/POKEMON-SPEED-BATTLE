$(window).keydown(function(event){
    game.handleKeyPress(event.key);
});

function Game_controller(){
    this.startGame = function(){
        var playerOne = new Player_model();
        var playerTwo = new Player_model();

        playerOne.initializeAvailableKeys(1);
        playerTwo.initializeAvailableKeys(2);
        game_model.players = [playerOne, playerTwo]
    };
    this.startRound = function(){
        this.startTimer(5000)
        game_model.players[0].getRequiredMove();
        game_model.players[1].getRequiredMove();
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
        if(game_model.players[0].availableKeys.indexOf(keyPress)!== -1){    //player 1 keys
            if(game_model.players[0].requiredMove === keyPress){
                game_model.players[0].completeMove();
            }
            else{
                game_model.players[0].missMove();
            }
        }
        else if(game_model.players[1].availableKeys.indexOf(keyPress)!== -1){   //player 2 keys
            if(game_model.players[1].requiredMove === keyPress){
                game_model.players[1].completeMove();
            }
            else{
                game_model.players[1].missMove();
            }
        }
    }
}