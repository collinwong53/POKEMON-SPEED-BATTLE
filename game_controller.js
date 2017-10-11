$(window).keydown(function(event){
    game_controller.handleKeyPress(event.key);
});

function Game_controller(){
    this.startGame = function(){
        var playerOne = new Player_model();
        var playerTwo = new Player_model();

        playerOne.initializeAvailableKeys(1);
        playerTwo.initializeAvailableKeys(2);

        playerOne.index = 0;
        playerTwo.index = 1;
        game_model.players = [playerOne, playerTwo]
    };
    this.endGame = function(winnerPlayerModel){
        get_youtube_data(winnerPlayerModel.pokemon.name).then(winner_video, failed_video);
        // displayWinVideo(winnerPlayerModel).then(play_video, no_video); // make this into a promise
        backgroundImage();
    };
    this.startRound = function(){
        handle_audio.sound_object['main'].play();
        game_model.roundStarted = true;
        view.displayCards();
        player_controller.getRequiredMove(game_model.players[0]);
        player_controller.getRequiredMove(game_model.players[1]);
    };
    this.endRound = function(){
        game_model.roundStarted = false;
    };

    this.startTimer = function(time, startOfGame){       //Countdown that starts the round - triggered by button press
        if(startOfGame) {
            player_controller.getPokemon(game_model.players[0]);
            player_controller.getPokemon(game_model.players[1]);
        }
        handle_audio.sound_object['countdown'].play();
        game_model.timerValue = time;
        view.displayCountdownNumber(game_model.timerValue/1000);
        var timeBetweenUpdates = 1000;
        game_model.timerInterval = setInterval(function(){
            game_model.timerValue = game_model.timerValue - timeBetweenUpdates;
            console.log(game_model.timerValue);
            view.displayCountdownNumber(game_model.timerValue/1000);
            if(game_model.timerValue <= 0) {
                game_controller.startRound();
                this.clearInterval(game_model.timerInterval)
            }
        }, timeBetweenUpdates)
    };
    // this.stopTimer = function(){
    //     clearInterval(game_model.timerInterval)
    // };

    this.handleKeyPress = function(keyPress){
        if(game_model.roundStarted) {
            if (game_model.players[0].availableKeys.indexOf(keyPress) !== -1) {    //player 1 keys
                if (game_model.players[0].requiredMove === keyPress) {
                    player_controller.completeMove(game_model.players[0]);
                }
                else {
                    player_controller.missMove(game_model.players[0]);
                }
            }
            else if (game_model.players[1].availableKeys.indexOf(keyPress) !== -1) {   //player 2 keys
                if (game_model.players[1].requiredMove === keyPress) {
                    player_controller.completeMove(game_model.players[1]);
                }
                else {
                    player_controller.missMove(game_model.players[1]);
                }
            }
        }
    }
}