//
// function get_youtube_data() {
//
//     var promise = { //create an object that will handle the promise itself
//         then: function(resolve, reject){
//             this.reject = reject;
//             this.resolve = resolve;
//         }
//     };
//
//     $.ajax({
//         url: 'http://s-apis.learningfuze.com/hackathon/youtube/search.php',
//         dataType: 'json',
//         method: 'post',
//         data: {
//             q: 'charizard',
//             maxResults: 10,
//             type: "video"
//     },
//         success: function(data) {
//             promise.resolve(data);  //use the promise object to trigger the success function
//         },
//         error: function(){
//             promise.reject('oops!'); //use the promise object to trigger the error function
//         }
//     });
//     return promise;
// }
//
// function winner (data){
//     video_list = data;
//     var random_vid = video_list.video[Math.floor(Math.random() * video_list.video.length)].id;
//     winner_video_link = "https://www.youtube.com/embed/" + random_vid;
//
//     // $('#counter').addClass("player").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + random_vid + '" frameborder="0" allowfullscreen"></iframe>');
//
//     console.log('it worked!',data);
//     return winner_video_link
// }
// function failed_video(message){
//     $('#counter').addClass("player").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/BMqOLULKonM' + '" frameborder="0" allowfullscreen"></iframe>');
//     console.log(message);
// }
