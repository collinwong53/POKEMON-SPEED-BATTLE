function audio_handler(){
    this.sound_object = {
        'main': new Audio('sound/pokemon_battle_music.mp3'),
        'countdown':new Audio('sound/countdown.mp3'),
        'attack01':new Audio('sound/poke_attack_sound01.wav'),
        'victory':new Audio('sound/pokemon_victory_sound.mp3')
    }
}