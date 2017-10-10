function get_youtube_data() {

    var promise = { //create an object that will handle the promise itself
        then: function(resolve, reject){
            this.reject = reject;
            this.resolve = resolve;
        }
    }

    $.ajax({
        url: 's-apis.learningfuze.com/hackathon/youtube/search.php',
        dataType: 'json',
        method: 'post',
        success: function(data) {
            promise.resolve(data);  //use the promise object to trigger the success function
        },
        error: function(){
            promise.reject('oops!'); //use the promise object to trigger the error function
        }
    });
    return promise;
}

function winner (data){
    "https://youtu.be/" + data.video[Math.floor(Math.random(video.length)).id
    console.log('it worked!',data);
}
function failed_video(message){
    "https://www.youtube.com/watch?v=OmJhiUhpa0Y"
    console.log(message);
}

getData().then(winner,failed_video);