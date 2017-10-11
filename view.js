//****************************************View****************************************//

/***************************************************************************************************
 * card animation - card slides in and flips after start
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * button light - lights up buttons
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

function displayWinVideo(){

    this.displayVideo = function (winnerPlayerModel) {
        $(".modal-title").text("Winner Player " + (winnerPlayerModel.index +1)); // The text will be the name of the pokemon
        $("#video_display").attr('src', winner_video_link);
        $("#winner_modal").modal('show');
    };
    this.displayVideo();
}


function View(){
    this.displayCards = function(){
        var player0BackgroundImage = game_model.players[0].pokemon.image;
        console.log(player0BackgroundImage);
        $("#player_0").css("background-image", "url(" + player0BackgroundImage + ")");
        var player1BackgroundImage = game_model.players[1].pokemon.image;
        $("#player_1").css("background-image", "url(" + player1BackgroundImage + ")");
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

