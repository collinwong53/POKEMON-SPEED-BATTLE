//****************************************Model****************************************//

/***************************************************************************************************
 * grab pokemon api - gets the information from the pokemon api
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * grab card api - gets the information from the card api
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * grab youtube api - gets the information from the youtube api
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * text appear - starts showing text on page for game play (called by start game function)
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * attack with hp - attacks with hp
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */



//****************************************Controller****************************************//

/***************************************************************************************************
 * initialize - starts loading everything needed (tells model to load apis)
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */
$(document).ready(initializeApp);
var available_cards = null;
function initializeApp(){
   get_card_data().then(make_pokemon_object, failed_to_get_data);
}

// var card_list = get_card_data().then(make_pokemon_object,failed_to_get_data);
// console.log(card_list);
/***************************************************************************************************
 * start game - starts function in model to make text appear for player (called by start button)
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */



//****************************************View****************************************//

/***************************************************************************************************
 * card animation - card slides in and flips after start
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * button light - lights up buttons
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * start button - starts game, calls start game function in controller
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

var game_model = null;
var game_controller = null;
function initializeApp(){
    get_card_data().then(make_pokemon_object,failed_to_get_data);
    console.log('im here');
    game_model = new Game_model()
    game_controller = new Game_controller();
}


