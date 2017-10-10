function Player_controller(){
    this.getPokemon = function(player_model){

    };
    this.takeDamage = function(player_model, damageAmount) {
        player_model.hp -= damageAmount;
    };
    this.completeMove = function(player_model){
        player_model.completedMoves +=1;
        console.log(player_model.index + " Completed Move!  Now has " + player_model.completedMoves);
        this.getRequiredMove(player_model);
        this.checkIfWinRound(player_model);

    };
    this.missMove = function(player_model){
        player_model.completedMoves -=1;
        if(player_model.completedMoves < 0){
            player_model.completedMoves = 0;
        }
        console.log(player_model.index + " MISSED!  Now has " + player_model.completedMoves);
        this.getRequiredMove(player_model);
    };
    this.getRequiredMove = function(player_model){
        var availableKeys = player_model.availableKeys;
        var randomIndex = Math.floor(Math.random()*availableKeys.length);
        console.log(player_model.availableKeys[randomIndex]);
        player_model.requiredMove = player_model.availableKeys[randomIndex];
    };
    this.checkIfWinRound = function(){

        //IF win, run game_model.roundStarted = false;
    }
}