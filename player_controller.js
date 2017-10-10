function player_controller(pokemon){
    this.takeDamage = function(playerObject, damageAmount) {
        playerObject.hp -= damageAmount;
    };
    this.completeMove = function(playerObject){
        playerObject.completedMoves +=1;
    };
    this.missMove = function(playerObject){
        playerObject.completedMoves -=1;
    }
}