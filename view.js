//****************************************View****************************************//

/***************************************************************************************************
 * card animation - card slides in and flips after start
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * button light - lights up buttonsgit
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * start button - starts game, calls start game function in controller
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * displayWinVideo - shows a video of the winning pokemon
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

function displayWinVideo(winnerPlayerModel){

    this.displayVideo = function () {
        console.log(winnerPlayerModel.index);
        $(".modal-title").text("Winner Player " + parseInt(winnerPlayerModel.index +1)); // The text will be the name of the pokemon
        $("#video_display").attr('src', winner_video_link);
        $("#winner_modal").modal('show');
    };
    this.displayVideo();
};

// function play_video (data) {
//     video_list = data;
//     var random_vid = video_list.video[Math.floor(Math.random() * video_list.video.length)].id;
//     winner_video_link = "https://www.youtube.com/embed/" + random_vid;
//
//     console.log('it worked!', data);
// };
//
// function no_video (message) {
//     $('#counter').addClass("player").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/BMqOLULKonM' + '" frameborder="0" allowfullscreen"></iframe>');
//     console.log(message);
// };

function get_youtube_data (pokemon_name) {
    var promise = { //create an object that will handle the promise itself
        then: function (resolve, reject) {
            this.reject = reject;
            this.resolve = resolve;
        }
    };

    $.ajax({
        url: 'http://s-apis.learningfuze.com/hackathon/youtube/search.php',
        dataType: 'json',
        method: 'post',
        data: {
            q: pokemon_name,
            maxResults: 10,
            type: "video"
        },
        success: function (data) {
            promise.resolve(data);  //use the promise object to trigger the success function
        },
        error: function () {
            promise.reject('oops!'); //use the promise object to trigger the error function
        }
    });
    return promise;
};


function winner_video (data) {
    video_list = data;
    var random_vid = video_list.video[Math.floor(Math.random() * video_list.video.length)].id;
    winner_video_link = "https://www.youtube.com/embed/" + random_vid;

    displayWinVideo(winnerPlayerModel);

    console.log('it worked!', data);
};

function failed_video (message) {
    $('#counter').addClass("player").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/BMqOLULKonM' + '" frameborder="0" allowfullscreen"></iframe>');
    console.log(message);
};


function winner_video (data) {
    video_list = data;
    var random_vid = video_list.video[Math.floor(Math.random() * video_list.video.length)].id;
    winner_video_link = "https://www.youtube.com/embed/" + random_vid;

    displayWinVideo(winnerPlayerModel);

    console.log('it worked!', data);
};

function failed_video (message) {
    $('#counter').addClass("player").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/BMqOLULKonM' + '" frameborder="0" allowfullscreen"></iframe>');
    console.log(message);
};

function View(){
    this.displayCards = function(){
        var player0BackgroundImage = game_model.players[0].pokemon.image;
        $("#player_0").css("background-image", "url(" + player0BackgroundImage + ")");
        var player1BackgroundImage = game_model.players[1].pokemon.image;
        console.log(player0BackgroundImage);
        $("#player_1").css("background-image", "url(" + player1BackgroundImage + ")");
    };
    this.displayArrow = function(keyInput, playerModel){
        console.log("DISPLAY ARROW, playerModel is", playerModel);
        setTimeout(function(){
            var divID = "#player_" + playerModel.index + "_key_display";
            var image = null;
            switch(keyInput) {
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
            $(divID).css('"background-image", "url(" + image + ")"')
            $(divID).css("background-image", "url(" + image + ")");
        }, 150)
    };
    this.hideArrowForMoment = function(player_model){
        console.log("hide arrow")
        var divID = "#player_" + player_model.index + "_key_display";
        $(divID).css("background-image", "none");
    };
    this.arrowBoxMadeMove = function(player_model){
        var divID = "#player_" + player_model.index + "_key_display";
        $(divID).css("border", "5px groove green");
        setTimeout(function(){
            $(divID).css("border", "none");
        }, 150)
    };
    this.arrowBoxMissMove = function(player_model){
        var divID = "#player_" + player_model.index + "_key_display";
        $(divID).css("border", "5px groove red");
        setTimeout(function(){
            $(divID).css("border", "none");
        }, 150)
    };
    this.displayCountdownNumber = function(number){
        $("#countDown").text(number).show();
        $("#player_0_key_display").css("background-image", "none");
        $("#player_1_key_display").css("background-image", "none");
        setTimeout(function(){
            $("#countDown").text(number).hide();
        }, 500)
    };
    this.updateBarCounter = function(){
        $('#hp_0').text(game_model.players[0].hp + "/" + game_model.players[0].pokemon.hp);
        $('#hp_1').text(game_model.players[1].hp + "/" + game_model.players[1].pokemon.hp);
        $('#power_0').text(game_model.players[0].completedMoves + "/" + game_model.players[0].completedMovesGoal);
        $('#power_1').text(game_model.players[1].completedMoves + "/" + game_model.players[1].completedMovesGoal);
    }
    this.updateBars = function(){
        var player0HPpercentage = game_model.players[0].hp/game_model.players[0].pokemon.hp;
        var player1HPpercentage = game_model.players[1].hp/game_model.players[1].pokemon.hp;
        var player0Powerpercentage = game_model.players[0].completedMoves/game_model.players[0].completedMovesGoal;
        var player1Powerpercentage = game_model.players[1].completedMoves/game_model.players[1].completedMovesGoal;
        $("#player_0_health_bar").css("width", (player0HPpercentage * 100 + "%"));
        $("#player_1_health_bar").css("width", (player1HPpercentage * 100 + "%"));
        $("#player_0_power_bar").css("width", (player0Powerpercentage * 100 + "%"));
        $("#player_1_power_bar").css("width", (player1Powerpercentage * 100 + "%"))
    }


    this.displayPlayerName = function(player_model) {
        debugger;
        var playerNumber = player_model.index + 1;
        var pokemonName = player_model.pokemon.name;
        if(player_model.index === 0){
            $("#player_0_name").text("Player " + playerNumber + ": " + pokemonName);
        }
        else{
            $("#player_1_name").text("Player " + playerNumber + ": " + pokemonName);
        }

    };

    this.backgroundImage = function() {
        var backgroundImageArray = [
            'images/639ff710788da2f05b1879a6cc5e1f2d.jpg',
            'images/Dahara_City.png',
            // 'images/Gaur Plains.png',
            'images/Pokemon-Sun-and-Moon-ALola-Map-Island-One.jpg',
            'images/Prof_Juniper_Lab_anime-696x392.jpg'
        ];
        var addImageToBackground = function(){
            var randomIndex = Math.floor(Math.random()*backgroundImageArray.length);
            console.log(randomIndex);
            return backgroundImageArray[randomIndex]
        };
        $('body').css('background-image', 'url(' + addImageToBackground() +')');
    };

}



/***************************************************************************************************
 * playerIcon - adds and displays player icons
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

// function displayPlayerIcon() {
//     this.playerIconArray = [
//         "images/trainer_1.jpg",
//         "images/trainer_2.jpg",
//         "images/trainer_3.jpg",
//         "images/trainer_4.jpg",
//         "images/trainer_5.jpg",
//         "images/trainer_6.jpg"
//     ];
//
//     this.randomIndex = Math.floor(Math.random()*this.playerIconArray.length);
//
//     this.removeImageFromArray = this.playerIconArray.splice(this.randomIndex,1);
//
//     $("#player_0_icon_image").attr("src", this.playerIconArray[this.randomIndex]);
//
//     this.removeImageFromArray();
//
//     $("#player_1_icon_image").attr("src", this.playerIconArray[this.randomIndex]);
//
//     this.removeImageFromArray()
//
// }