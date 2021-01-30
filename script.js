const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist')
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
   {
     name: 'jacinto-1',
     displayName: 'Electric Chill Machine',
     artist: 'Jacinto Design'
   },
   {
      name: 'jacinto-2',
      displayName: 'Seven Nation Army',
      artist: 'Jacinto Design'
    },
   {
      name: 'jacinto-3',
      displayName: 'Goodnight, Disco Queen',
      artist: 'Jacinto Design'
    },
    {
      name: 'metric-1',
      displayName: 'Front Row (Remix)',
      artist: 'Metric/Jacinto Design'
    }
]


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

// Updating DOM with current song
function loadSong(song) {
   title.textContent = song.displayName;
   artist.textContent = song.artist;
   music.src = `music/${song.name}.mp3`;
   image.src = `img/${song.name}.jpg`;
}

// On Load - Select First song
loadSong(songs[3]);


// Event Listeners
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);