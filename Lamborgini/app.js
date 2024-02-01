
function playsound(audioname){
    let audio = new Audio(audioname);
    audio.loop = true;
    audio.play();
}
playsound("sound.mp3")