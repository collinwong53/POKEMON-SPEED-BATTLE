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

<<<<<<< HEAD
    this.displayVideo = function () {
        console.log(winnerPlayerModel.index);
        $(".modal-title").text("Winner Player " + parseInt(winnerPlayerModel.index +1)); // The text will be the name of the pokemon
=======
    this.displayVideo = function (winnerPlayerModel) {
        $(".modal-title").text("Winner Player " + parseInt(winnerPlayerModel.index +1));
>>>>>>> 5122c618d1290db44b9396740bd9b4f657eefdc9
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

function View(){
    this.displayCards = function(){
        var player0BackgroundImage = game_model.players[0].pokemon.image;
        $("#player_0").css("background-image", "url(" + player0BackgroundImage + ")");
        var player1BackgroundImage = game_model.players[1].pokemon.image;
        console.log(player0BackgroundImage);
        $("#player_1").css("background-image", "url(" + player1BackgroundImage + ")");
    }
    this.displayArrow = function(keyInput, playerModel){
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
        console.log("divID", divID);
        console.log("image", image);
        console.log("url(" + image + ")");
        $(divID).css('"background-image", "url(" + image + ")"')
        $(divID).css("background-image", "url(" + image + ")");
    }
}

/***************************************************************************************************
 * backgroundImage - adds a different background image
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

function backgroundImage() {
    this.backgroundImageArray = [
        'images/639ff710788da2f05b1879a6cc5e1f2d.jpg',
        'images/Dahara_City.png',
        // 'images/Gaur Plains.png',
        'images/Pokemon-Sun-and-Moon-ALola-Map-Island-One.jpg',
        'images/Prof_Juniper_Lab_anime-696x392.jpg'
    ];
    this.imageToAddToBackground = function(){
        var randomIndex = Math.floor(Math.random()*this.backgroundImageArray.length);
        console.log(randomIndex);
        return this.backgroundImageArray[randomIndex]
    };
    $('body').css('background-image', 'url(' + this.imageToAddToBackground() +')');
}


/***************************************************************************************************
 * playerIcon - adds and displays player icons
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

function displayPlayerIcon() {
    this.playerIconArray = [
        "images/trainer_1.jpg",
        "images/trainer_2.jpg",
        "images/trainer_3.jpg",
        "images/trainer_4.jpg",
        "images/trainer_5.jpg",
        "images/trainer_6.jpg"
    ];

    this.randomIndex = Math.floor(Math.random()*this.playerIconArray.length);

    this.removeImageFromArray = this.playerIconArray.splice(this.randomIndex,1);

    $("#player_0_icon_image").attr("src", this.playerIconArray[this.randomIndex]);

    this.removeImageFromArray();

    $("#player_1_icon_image").attr("src", this.playerIconArray[this.randomIndex]);

    this.removeImageFromArray()

}