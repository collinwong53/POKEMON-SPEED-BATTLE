function game_controller(){
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
    }
}