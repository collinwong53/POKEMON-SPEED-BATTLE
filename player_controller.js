function Player_controller(){
    this.takeDamage = function(playerObject, damageAmount) {
        playerObject.hp -= damageAmount;
    };
    this.completeMove = function(playerObject){
        playerObject.completedMoves +=1;
        playerObject.getRequiredMove();
    };
    this.missMove = function(playerObject){
        playerObject.completedMoves -=1;
        if(playerObject.completedMoves < 0){
            playerObject.completedMoves = 0;
        }
        playerObject.getRequiredMove();
    };
    this.getRequiredMove = function(player_model){
        var availableKeys = player_model.availableKeys;
        var randomIndex = Math.floor(Math.random()*availableKeys.length);
        player_model.requiredMove = player_model.availableKeys[randomIndex];
    };
}