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

    this.displayVideo = function () {
        $(".modal-title").text("You won!"); // The text will be the name of the pokemon
        $("#video_display").attr('src', "https://www.youtube.com/embed/w6DW4i-mfbA");
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