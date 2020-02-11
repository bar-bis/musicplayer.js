var songs = ["Song.mp3", "Song1.mp3", "Song2.mp3", "Song3.mp3"];

var posters = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var song = new Audio();
var poster = new Image();
var currentSong = 0; //it points to current song

window.onload = playSong; //it plays song when the window is load
var play = document.getElementById("play").addEventListener("click", playOrPauseSong);
var next = document.getElementById("next").addEventListener("click", next);
var prev = document.getElementById("prev").addEventListener("click", previous);


function playSong() {
    song.src = songs[currentSong]; //set the source of first song
    songTitle.textContent = songs[currentSong]; //sets title of the song
    song.play(); //plays the song
}

function playOrPauseSong() {
    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
}

song.addEventListener("timeupdate", () => {
    var position = song.currentTime / song.duration;
    fillBar.style.width = position * 100 + '%';
});

function next() {
    currentSong++;
    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    playSong();
    $("#image img").attr("src", posters[currentSong]);
    $("#bg img").attr("src", posters[currentSong]);
}

function previous() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    playSong();
    $("#image img").attr("src", posters[currentSong]);
    $("#bg img").attr("src", posters[currentSong]);
}