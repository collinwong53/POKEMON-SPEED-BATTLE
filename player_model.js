function player(){
    this.wins = 0;
    this.pokemon = {};
    this.pokemonName = "";
    this.hp = 0;
    this.attack = 0;
    this.availableKeys = [];
    this.requiredMoves = [];
    this.completedMoves = 0;
    this.missedMoves = 0;

    this.initializeAvailableKeys = function(playerNumber){
        if(playerNumber === 1){
            this.availableKeys = ["w", "a", "s", "d"];
        }
        else{
            this.availableKeys = ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"];
        }
    }
}