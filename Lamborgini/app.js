
document.addEventListener('DOMContentLoaded', function() {
    const rightAudio = document.querySelector(".right-audio");

    const playRightAudio = function () {
        rightAudio.load();
        rightAudio.play();
    };

    // Assuming you want to play the audio on some event, e.g., button click
    document.querySelector('.container').addEventListener('click', function() {
        playRightAudio();
    });
});

