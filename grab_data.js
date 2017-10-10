function Grab_data(){
    this.make_pokemon_object = function(data){
        available_cards = data.cards;
    }
    this.failed_to_get_data = function(data){
        console.log('failed',data);
    }
    this.get_card_data = function(){
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
    this.get_poke_data = function(name){
        var promise = {
            then:function(resolve,reject){
                this.resolve = resolve;
                this.reject = reject;
            }
        }
        $.ajax({
            dataType:'json',
            url:'http://pokeapi.co/api/v2/pokemon/'+name,
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
    this.random_number_gen = function(end_num){
        var number = Math.floor(Math.random()*end_num+1)
        return number;
    }
    this.make_pokemon = function(){
        var random_pick = this.random_number_gen(1000);
        var pokemon_card = available_cards[random_pick];
        var additional_pokemon_data;
        var poke_stats = {}
        poke_stats.name = pokemon_card.name;
        poke_stats.hp = pokemon_card.hp;
        poke_stats.image = pokemon_card.imageUrl;
        poke_stats.type = pokemon_card.types;
        poke_stats.attack = this.pick_attack(pokemon_card.attacks);
        return poke_stats;
    }
    this.pick_attack = function(card_attack){
        for(var i = 0; i<card_attack.length; i++){
            if(card_attack[i].damage !== "" && Number(card_attack[i].damage)){
                return card_attack[i].damage
            }
            else{
                return 50;
            }
        }
    }
}

