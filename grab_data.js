function make_pokemon_object(data){
    console.log('success',data);
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
        datatype:'json',
        url:'https://api.pokemontcg.io/v1/cards?page=5&pageSize=1000',
        method: 'get',
        success:function(data){
            if(data.success){
                promise.resolve(data);
            }
        },
        error:function(data){
            promise.resolve(data);
        }
    })//end call
    return promise;
}//get get data

