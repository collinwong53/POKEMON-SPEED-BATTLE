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

function displayWinVideo(){

    this.displayVideo = function (winnerPlayerModel) {
        $(".modal-title").text("Winner Player " + (winnerPlayerModel.index +1)); // The text will be the name of the pokemon
        $("#video_display").attr('src', winner_video_link);
        $("#winner_modal").modal('show');
    };
    this.displayVideo();
}

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
        $('#counter').addClass("player").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + random_vid + '" frameborder="0" allowfullscreen"></iframe>');

        console.log('it worked!', data);
    };

    function failed_video (message) {
        $('#counter').addClass("player").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/BMqOLULKonM' + '" frameborder="0" allowfullscreen"></iframe>');
        console.log(message);
    };

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
        'images/Gaur Plains.png',
        'images/Pokemon-Sun-and-Moon-ALola-Map-Island-One.jpg',
        'images/Prof_Juniper_Lab_anime-696x392.jpg'
    ];
    this.randomIndex = function() {
        return Math.floor(Math.random()*this.backgroundImageArray.length)
    };
    this.imageToAddToBackground = function(){
        console.log(this.randomIndex());
        return this.backgroundImageArray[this.randomIndex()]
    };
    $('body').css('background-image', 'url(' + this.imageToAddToBackground() +')');
}

