function player_controller(){
    this.takeDamage = function(playerObject, damageAmount) {
        playerObject.hp -= damageAmount;
    };
    this.completeMove = function(playerObject){
        playerObject.completedMoves +=1;
    };
    this.missMove = function(playerObject){
        playerObject.missedMoves +=1;
    }
}