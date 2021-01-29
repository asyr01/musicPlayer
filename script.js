const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Check if playing
let isPlaying = false;

// Play a song
function playSong(){
   isPlaying = true;
   playBtn.classList.replace('fa-play', 'fa-pause');
   music.play();
}

// Pause a song
function pauseSong(){
   isPlaying = false;
   playBtn.classList.replace('fa-pause', 'fa-play');
   music.pause();
}


// Event Listeners
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));