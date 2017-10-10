$(document).ready(initializeApp)
function initializeApp(){
    var card_list = get_card_data().then(make_pokemon_object,failed_to_get_data);
    console.log('im here');
    return card_list;
}