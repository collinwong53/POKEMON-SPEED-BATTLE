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
        view.backgroundImage();
        $("#start_button").show();
    };
    this.startRound = function(startOfGame){
        if(startOfGame) {
            view.displayCards();
            get_card_api_data.get_pokemonDB(game_model.players[0].pokemon.name, '#player_0_stats').then(get_card_api_data.resolve_pokeDB, get_card_api_data.reject_pokeDB);
            get_card_api_data.get_pokemonDB(game_model.players[1].pokemon.name, '#player_1_stats').then(get_card_api_data.resolve_pokeDB, get_card_api_data.reject_pokeDB);
            setTimeout(function(){
                $('.card').addClass('flipped')
            ,2000})
            view.displayCards();
        }
        handle_audio.sound_object['victory'].pause();
        handle_audio.sound_object['main'].play();
        game_model.roundStarted = true;
        player_controller.getRequiredMove(game_model.players[0]);
        player_controller.getRequiredMove(game_model.players[1]);
        view.displayPlayerName(game_model.players[0]);
        view.displayPlayerName(game_model.players[1])
    };
    // this.endRound = function(){
    //     game_model.roundStarted = false;
    // };

    this.startTimer = function(time, startOfGame){       //Countdown that starts the round - triggered by button press
        view.updateBars();
        if(startOfGame) {
            player_controller.getPokemon(game_model.players[0]);
            player_controller.getPokemon(game_model.players[1]);
            $(".player_stats").html("");
            game_model.players[0].completedMoves = 0;
            game_model.players[1].completedMoves = 0;
            game_model.players[0].completedMovesGoal = 0;
            game_model.players[1].completedMovesGoal = 0;
        }
        handle_audio.sound_object['countdown'].play();
        game_model.timerValue = time;

        var timeBetweenUpdates = 1000;
        game_model.timerInterval = setInterval(function(){
            game_model.timerValue = game_model.timerValue - timeBetweenUpdates;
            console.log(game_model.timerValue);
            view.displayCountdownNumber(game_model.timerValue/1000);
            if(game_model.timerValue <= 0) {
                view.updateBars();
                game_controller.startRound(startOfGame);
                this.clearInterval(game_model.timerInterval);
                view.updateBarCounter()
                $(".player_key_display").show();
            }
        }, timeBetweenUpdates);
        view.displayCountdownNumber(game_model.timerValue/1000);
    };
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