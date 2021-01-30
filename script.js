const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist')
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
   playBtn.setAttribute('title', 'Pause the song');
   music.play();
}

// Pause a song
function pauseSong(){
   isPlaying = false;
   playBtn.classList.replace('fa-pause', 'fa-play');
   playBtn.setAttribute('title', 'Play the song');
   music.pause();
}


// Event Listeners
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));