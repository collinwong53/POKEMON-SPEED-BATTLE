$(document).ready(initializeApp)
function initializeApp(){
    get_card_data().then(make_pokemon_object,failed_to_get_data);
    console.log('im here');
}