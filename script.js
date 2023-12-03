console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('images/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = document.getElementsByClassName('songItem');
let songs = [
    { songName: "Let me Love You", filePath: "images/1.mp3", coverPath: "images/1.jpg" },
    { songName: "Tere Hawale", filePath: "images/2.mp3", coverPath: "images/2.jpg" },
    { songName: "Heeriye", filePath: "images/3.mp3", coverPath: "images/3.jpg" },
    { songName: "Rangsaari", filePath: "images/4.mp3", coverPath: "images/4.jpg" },
    { songName: "Salam-e-Ishq", filePath: "images/5.mp3", coverPath: "images/5.jpg" },
    { songName: "Bhula Dena", filePath: "images/6.mp3", coverPath: "images/6.jpg" },
    { songName: "Kasam Kha ke Kaho", filePath: "images/7.mp3", coverPath: "images/7.jpg" }
]


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// audioElement.play();

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.target.classList.remove('fa-pause-circle');
        element.target.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='images/1.mp3';
        audioElement.currentTime=0;
        audioElement.play();
    })
})