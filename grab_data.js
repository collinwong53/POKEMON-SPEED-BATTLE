function make_pokemon_object(data){
    available_cards = data.cards;
}
function failed_to_get_data(data){
    console.log('failed',data)
}
function get_card_data(){
    var promise = {
        then:function(resolve,reject){
            this.resolve = resolve;
            this.reject = reject;
        }
    }
    $.ajax({
        dataType:'json',
        url:'https://api.pokemontcg.io/v1/cards?page=5&pageSize=1000',
        method: 'get',
        success:function(data){
            if(data !== undefined){
                promise.resolve(data);
            }
        },
        error:function(data){
            promise.reject(data);
        }
    })//end call
    return promise;
}//get get data
function get_poke_data(){

}


