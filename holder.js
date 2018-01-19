function View() {
    /***************************************************************************************************
     * displayCards - adds the cards to the dom, both the back and the front
     * @param  {undefined} none
     * @returns {undefined} none
     * @calls {undefined} none
     */
    this.desktop = true;
    this.displayCards = function () {
        // var back_image1 = $('<div>').addClass('back').css('background-image', "url('images/card_back.png')");
        // var back_image2 = $('<div>').addClass('back').css('background-image', "url('images/card_back.png')");
        var card_back = "images/cardback.png";
        var back_image1 = $('<div>').addClass('back').prepend('<img src="'+card_back+'">');
        var back_image2 = $('<div>').addClass('back').prepend('<img src="'+card_back+'">');
        var player0BackgroundImage = gameModel.players[0].pokemon.image;
        var player1BackgroundImage = gameModel.players[1].pokemon.image;
        var player_0_front = $('<div>').addClass('front').prepend('<img src=' + "'" + player0BackgroundImage + "'" + '/>');
        var player_1_front = $('<div>').addClass('front').prepend('<img src=' + "'" + player1BackgroundImage + "'" + '/>');
        var player_0_card = $('<div>').addClass('card').append(player_0_front, back_image1);
        var player_1_card = $('<div>').addClass('card').append(player_1_front, back_image2);
        $("#player_0").html(player_0_card);
        $("#player_1").html(player_1_card);
    };

    /***************************************************************************************************
     * displayArrow - controls which arrow image needs to be displayed on the DOM
     * @param  keyInput, playerModel
     * @returns {undefined} none
     * @calls {undefined} none
     */
    this.displayArrow = function (keyInput, playerModel) {
        setTimeout(function () {
            var divID = "#player_" + playerModel.index + "_key_display";
            var image = null;
            switch (keyInput) {
                case "w":
                case "ArrowUp":
                    image = "'images/arrow_up.png'";
                    break;
                case "a":
                case "ArrowLeft":
                    image = "'images/arrow_left.png'";
                    break;
                case "s":
                case "ArrowDown":
                    image = "'images/arrow_down.png'";
                    break;
                case "d":
                case "ArrowRight":
                    image = "'images/arrow_right.png'";
                    break;
            }
            $('#'+keyInput).css('background','yellow');
            $(divID).css("background-image", "url(" + image + ")");
        }, 150)
    };

    /***************************************************************************************************
     * hideArrowForMoment - hide the arrow
     * @param  playerModel
     * @returns {undefined} none
     * @calls {undefined} none
     */
    this.hideArrowForMoment = function (playerModel) {
        var divID = "#player_" + playerModel.index + "_key_display";
        $(divID).css("background-image", "none");
    };

    /***************************************************************************************************
     * arrowBoxMadeMove - highlights box green if the play was correct
     * @param  playerModel
     * @returns {undefined} none
     * @calls {undefined} none
     */
    this.arrowBoxMadeMove = function (playerModel) {
        var divID = "#player_" + playerModel.index + "_key_display";
        $(divID).css("border", "5px solid green").css("box-sizing", "border-box");
        setTimeout(function () {
            $(divID).css("border", "none");
        }, 150)
    };

    /***************************************************************************************************
     * arrowBoxMissMove - highlights box red if the player misses the play
     * @param  playerModel
     * @returns {undefined} none
     * @calls {undefined} none
     */
    this.arrowBoxMissMove = function (playerModel) {
        var divID = "#player_" + playerModel.index + "_key_display";
        $(divID).css("border", "5px solid red").css("box-sizing", "border-box");
        setTimeout(function () {
            $(divID).css("border", "none");
        }, 150)
    };

    /***************************************************************************************************
     * displayCountdownNumber - shows the countdown on the DOM
     * @param  number
     * @returns {undefined} none
     * @calls {undefined} none
     */
    this.displayCountdownNumber = function (number) {
        $("#countDown").text(number).show();
        $("#player_0_key_display").css("background-image", "none");
        $("#player_1_key_display").css("background-image", "none");
        setTimeout(function () {
            $("#countDown").text(number).hide();
        }, 500)
    };

    /***************************************************************************************************
     * updateBarCounter - updates the numbers on the health and power bars
     * @param  {undefined} none
     * @returns {undefined} none
     * @calls {undefined} none
     */
    this.updateBarCounter = function () {
        $('#hp_0').text(gameModel.players[0].hp + "/" + gameModel.players[0].pokemon.hp);
        $('#hp_1').text(gameModel.players[1].hp + "/" + gameModel.players[1].pokemon.hp);
        $('#power_0').text(gameModel.players[0].completedMoves + "/" + gameModel.players[0].completedMovesGoal);
        $('#power_1').text(gameModel.players[1].completedMoves + "/" + gameModel.players[1].completedMovesGoal);
    };

    /***************************************************************************************************
     * updateBars - updates the health and power bars
     * @param  {undefined} none
     * @returns {undefined} none
     * @calls {undefined} none
     */
    this.updateBars = function () {
        var player0HPpercentage = gameModel.players[0].hp / gameModel.players[0].pokemon.hp;
        var player1HPpercentage = gameModel.players[1].hp / gameModel.players[1].pokemon.hp;
        var player0Powerpercentage = gameModel.players[0].completedMoves / gameModel.players[0].completedMovesGoal;
        var player1Powerpercentage = gameModel.players[1].completedMoves / gameModel.players[1].completedMovesGoal;
        $("#player_0_health_bar").css("width", (player0HPpercentage * 100 + "%"));
        $("#player_1_health_bar").css("width", (player1HPpercentage * 100 + "%"));
        $("#player_0_power_bar").css("width", (player0Powerpercentage * 100 + "%"));
        $("#player_1_power_bar").css("width", (player1Powerpercentage * 100 + "%"))
    };

    /***************************************************************************************************
     * displayPlayerName - shows the player name and the pokemon name
     * @param  playerModel
     * @returns {undefined} none
     * @calls {undefined} none
     */
    this.displayPlayerName = function (playerModel) {
        var playerNumber = playerModel.index + 1;
        var pokemonName = playerModel.pokemon.name;
        if (playerModel.index === 0) {
            $("#player_0_name").text("Player " + playerNumber + ": " + pokemonName);
        } else {
            $("#player_1_name").text("Player " + playerNumber + ": " + pokemonName);
        }
    };

    /***************************************************************************************************
     * backgroundImage - creates and adds background images
     * @param  {undefined} none
     * @returns {undefined} none
     * @calls {undefined} none
     */
    this.backgroundImage = function () {
        this.backgroundImageArray = [
            'images/639ff710788da2f05b1879a6cc5e1f2d.jpg',
            'images/Dahara_City.png',
            'images/Pokemon-Sun-and-Moon-ALola-Map-Island-One.jpg',
            'images/Prof_Juniper_Lab_anime-696x392.jpg'
        ];
        this.addImageToBackground = function () {
            var randomIndex = Math.floor(Math.random() * this.backgroundImageArray.length);
            return this.backgroundImageArray[randomIndex]
        };
        $('body').css('background-image', 'url(' + this.addImageToBackground() + ')');
    };

    /***************************************************************************************************
     * playerIcon - adds and displays player icons
     * @param  {undefined} none
     * @returns {undefined} none
     * @calls {undefined} none
     */

    this.displayPlayerIcon = function () {
        var playerIconArray = [
            "images/trainer_1_transparent.png",
            "images/trainer_2_transparent.png",
            "images/trainer_3_transparent.png",
            "images/trainer_4_transparent.png",
            "images/trainer_5_transparent.png",
            "images/trainer_6_transparent.png"
        ];

        var randomIndex = Math.floor(Math.random() * playerIconArray.length);
        this.removeImageFromArray = function () {
            playerIconArray.splice(randomIndex, 1);
        };

        $("#player_0_icon_image").attr("src", playerIconArray[randomIndex]);

        this.removeImageFromArray();

        if (randomIndex === 5) {
            --randomIndex;
            $("#player_1_icon_image").attr("src", playerIconArray[randomIndex]);
        } else {
            $("#player_1_icon_image").attr("src", playerIconArray[randomIndex]);
        }
    };
    this.tabletSwitch = function () {
        $('.arrows_tablet_container').css('display', 'flex');
        $('.player_key_display, .player_stats, .player_icon').css('display', 'none');
        $('.top_player_container').addClass('tablet_player_container');
        $('.main').attr('id', 'tablet_main');
        $('.player_hpAndPower').addClass('tablet_player_hp_and_pp');
        $('.player_box').addClass('tablet_player_box');
        $('.top_container').attr('id', 'tablet_top_container');
        $('.bottom_container').attr('id', 'tablet_bottom_container');
        this.desktop = false;
    };
    this.desktopSwitch = function(){
        $('.arrows_tablet_container').css('display', 'none');
        $('.player_key_display, .player_stats, .player_icon').css('display', 'block');
        $('.top_player_container').removeClass('tablet_player_container');
        $('.main').removeAttr('id');
        $('.player_hpAndPower').removeClass('tablet_player_hp_and_pp');
        $('.player_box').removeClass('tablet_player_box');
        $('.top_container').removeAttr('id');
        $('.bottom_container').removeAttr('id')
    };
    this.applyClickHandlers = function(){
        $("#start_button").on('click', function () {
            if (availableCards === null) {
                return
            }
            gameController.startTimer(3000, true);
            $("#start_button").hide();
        });
        $('#touch_switch').click(this.tabletSwitch);
        $('.close_modal_butt').click(this.closeYoutube);
        $('#winner_modal').on('hidden.bs.modal', this.closeYoutube);
        $('.tablet_arrows').click(gameController.tabletArrows);
        $('#toggleView').click(this.toggleView);
    };
    this.closeYoutube = function(){
        $("#video_display").removeAttr('src');
    };
    this.removeTabletHightlights = function(){
        $('.arrows_tablet_container').removeClass('tablet_right_move tablet_wrong_move');
        $('.tablet_arrows').css('background','none');
    };
    this.toggleView = function(){
        if(view.desktop){
            view.tabletSwitch();
        }else{
            view.desktopSwitch();
            view.desktop = true;
        }
    }
}

/***************************************************************************************************
 * displayWinVideo - shows a video of the winning pokemon
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

function displayWinVideo(winnerPlayerModel) {

    this.displayVideo = function () {
        $(".modal-title").text("Player " + parseInt(winnerPlayerModel.index + 1) + " Wins!"); // The text will be the name of the pokemon
        $("#video_display").attr('src', winnerVideoLink);
        $("#winner_modal").modal('show');
        view.removeTabletHightlights();
    };
    this.displayVideo();
}


function closeYoutube() {
    $("#video_display").removeAttr('src');
}

/***************************************************************************************************
 * grab youtube api - gets the information from the youtube api
 * @param  {pokemon_name} name of winner player model's pokemon
 * @calls winnerVideo();
 *        failed_video();
 */


function getYoutubeData(pokemonName) {
    var promise = { //create an object that will handle the promise itself
        then: function (resolve, reject) {
            this.reject = reject;
            this.resolve = resolve;
        }
    };

    $.ajax({
        url: 'https://s-apis.learningfuze.com/hackathon/youtube/search.php',
        dataType: 'json',
        method: 'post',
        data: {
            q: pokemonName,
            maxResults: 10,
            type: "video"
        },
        success: function (data) {
            promise.resolve(data); //use the promise object to trigger the success function
        },
        error: function () {
            promise.reject('oops!'); //use the promise object to trigger the error function
        }
    });
    return promise;
}
/***************************************************************************************************
 * winner pokemon video
 * @param  {data} pokemon youtube video list from api
 * @calls displayWinVideo(winnerPlayerModel);
 */

function winnerVideo(data) {
    var videoList = data;
    var randomVid = videoList.video[Math.floor(Math.random() * videoList.video.length)].id;
    winnerVideoLink = "https://www.youtube.com/embed/" + randomVid;
    displayWinVideo(winnerPlayerModel);
}
/***************************************************************************************************
 * failed to grab youtube video list from api
 */

function failedVideo(message) {
    $(".modal-title").text("Player " + parseInt(winnerPlayerModel.index + 1) + " Wins!"); // The text will be the name of the pokemon
    $("#video_display").text(message);
    $("#winner_modal").modal('show');
}




















//Key Handler
$(window).keydown(function (event) {
    gameController.handleKeyPress(event.key);
});

//Game Controller Constructor
function GameController() {
    /***************************************************************************************************
     * startGame - occurs in initializeApp() on document load.  Creates players and adds them to gameModel
     * @param  {undefined} none
     * @returns {undefined} none
     * @calls {undefined} none
     */
    this.initializePlayers = function () {
        var playerOne = new PlayerModel();
        var playerTwo = new PlayerModel();

        playerOne.initializeAvailableKeys(1);
        playerTwo.initializeAvailableKeys(2);

        playerOne.index = 0;
        playerTwo.index = 1;
        gameModel.players = [playerOne, playerTwo]
    };
    /***************************************************************************************************
     * end game - finds youtube video, changes background image, and shows start button
     * @param  (winnerPlayerModel) - player model of the winner
     */
    this.endGame = function (winnerPlayerModel) {
        getYoutubeData(winnerPlayerModel.pokemon.name).then(winnerVideo, failedVideo);
        // displayWinVideo(winnerPlayerModel).then(play_video, no_video); // make this into a promise
        view.backgroundImage();
        $("#start_button").show();
    };

    /***************************************************************************************************
     * startTimer - initiates countdown, and triggers the start of the round after the countdown
     * @param  (time, startOfGame) - length of countdown, and a bool to check if this is the first round of the game
     */
    this.startTimer = function (time, startOfGame) { //Countdown that starts the round - triggered by button press
        view.updateBars();
        if (startOfGame) {
            playerController.getPokemon(gameModel.players[0]);
            playerController.getPokemon(gameModel.players[1]);
            $(".player_stats").find('ul').remove();
            gameModel.players[0].completedMoves = 0;
            gameModel.players[1].completedMoves = 0;
            view.displayCards();
            setTimeout(function(){
                $('.card').addClass('flipped');
            },2000);
        }
        <<<<<<< HEAD
            audioHandler.playSound('countdown');
        gameModel.timerValue = time;
        view.removeTabletHightlights();
=======
        audio_handler.play_sound('countdown');
        game_model.timerValue = time;
        view.remove_tablet_highlights();
>>>>>>> 0ee852ec57b1322ab2d6e5c047a9dd208ff4526b
        var timeBetweenUpdates = 1000;
        gameModel.timerInterval = setInterval(function () {
            gameModel.timerValue = gameModel.timerValue - timeBetweenUpdates;
            if (gameModel.timerValue / 1000 !== 0) {
                view.displayCountdownNumber(gameModel.timerValue / 1000);
            } else {
                $("#pokeBall").show();
                setTimeout(function () {
                    $("#pokeBall").hide();
                }, 750)
            }

            if (gameModel.timerValue <= 0) {
                view.updateBars();
                gameController.startRound(startOfGame);
                this.clearInterval(gameModel.timerInterval);
                view.updateBarCounter()
            }
        }, timeBetweenUpdates);
        view.displayCountdownNumber(gameModel.timerValue / 1000);
    };

    /***************************************************************************************************
     * startRound - round begins, player commands are given and received
     * @param  (startOfGame) -  a bool to check if this is the first round of the game
     */
    this.startRound = function (startOfGame) {
        if (startOfGame) {
<<<<<<< HEAD
            getCardApiData.getPokemonDB(gameModel.players[0].pokemon.name, '#player_0_stats').then(getCardApiData.resolvePokeDB, getCardApiData.rejectPokeDB);
            getCardApiData.getPokemonDB(gameModel.players[1].pokemon.name, '#player_1_stats').then(getCardApiData.resolvePokeDB, getCardApiData.rejectPokeDB);
            view.removeTabletHightlights();
            audioHandler.playMain();
            audioHandler.stopVictoryMusic();
            audioHandler.victoryPhase = false;
            audioHandler.battlePhase = true;
=======
            get_card_api_data.get_pokemonDB(game_model.players[0].pokemon.name, '#player_0_stats').then(get_card_api_data.resolve_pokeDB, get_card_api_data.reject_pokeDB);
            get_card_api_data.get_pokemonDB(game_model.players[1].pokemon.name, '#player_1_stats').then(get_card_api_data.resolve_pokeDB, get_card_api_data.reject_pokeDB);
            view.remove_tablet_highlights();
            audio_handler.play_main();
            audio_handler.stop_victory_music();
            audio_handler.victory_phase = false;
            audio_handler.battle_phase = true;
>>>>>>> 0ee852ec57b1322ab2d6e5c047a9dd208ff4526b
        }
        gameModel.roundStarted = true;
        playerController.getRequiredMove(gameModel.players[0]);
        playerController.getRequiredMove(gameModel.players[1]);
        view.displayPlayerName(gameModel.players[0]);
        view.displayPlayerName(gameModel.players[1]);
    };

    /***************************************************************************************************
     * handleKeyPress - deals with player input and compares it with game commands.  Triggered by key handler
     * @param  (keyPress)
     */
    this.handleKeyPress = function (keyPress) {
        if (gameModel.roundStarted) {
            if (gameModel.players[0].availableKeys.indexOf(keyPress) !== -1) { //player 1 keys
                if (gameModel.players[0].requiredMove === keyPress) {
                    playerController.completeMove(gameModel.players[0]);
                    $('.player_0_arrows').addClass('tablet_right_move');
                    $('.player_0_arrows').removeClass('tablet_wrong_move');
                } else {
                    playerController.missMove(gameModel.players[0]);
                    $('.player_0_arrows').addClass('tablet_wrong_move');
                    $('.player_0_arrows').removeClass('tablet_right_move');
                }
                $('.player_0_arrows').find('.tablet_arrows').css('background', 'none');

            } else if (gameModel.players[1].availableKeys.indexOf(keyPress) !== -1) { //player 2 keys
                if (gameModel.players[1].requiredMove === keyPress) {
                    playerController.completeMove(gameModel.players[1]);
                    $('.player_1_arrows').addClass('tablet_right_move');
                    $('.player_1_arrows').removeClass('tablet_wrong_move');
                } else {
                    playerController.missMove(gameModel.players[1]);
                    $('.player_1_arrows').addClass('tablet_wrong_move');
                    $('.player_0_arrows').removeClass('tablet_right_move');
                }
                $('.player_1_arrows').find('.tablet_arrows').css('background', 'none');
            }
        }
    };
    this.tabletArrows = function () {
        const arrow = $(this).attr('id');
        console.log(arrow);
        gameController.handleKeyPress(arrow);
    }
}