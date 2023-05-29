const doc = document;

const songsList = [
    {
        id: 'xxx-01',
        title: 'Opium',
        author: 'Mili',
        path: '../music/Opium.mp3',
        bgPath: '../image/1.jpg',
        time: 0
    },
    {
        id: 'xxx-02',
        title: 'Bento Box Bivouac',
        author: 'Mili',
        path: '../music/Bento Box Bivouac.mp3',
        bgPath: '../image/3.jpg',
        time: 0
    },
    {
        id: 'xxx-03',
        title: 'Extension of you',
        author: 'Mili',
        path: '../music/Extension of you.mp3',
        bgPath: '../image/2.jpg',
        time: 0
    }
];

const audio = doc.querySelector('#audio'); 
const bgImg = doc.querySelector('#bg-img');
const controls = doc.querySelector('#controls'); 
const title = doc.querySelector('#title'); 
const author = doc.querySelector('#author'); 
const playBtn = doc.querySelector('#play'); 
const voiceBtn = doc.querySelector('#voice'); 

let curSongIndex = 1;
let isPlay = false;


function init() {
    render(songsList[curSongIndex]);
}


controls.addEventListener('click', e => {
    switch (e.target?.id) {
        case 'list': 
            break;
        case 'voice':
            voiceControl();
            break;
        case 'pre': 
            preSong();
            break;
        case 'play':
            togglePlay();
            break;
        case 'next': 
            nextSong();
            break;
        case 'mode': 
            break;
        default:
            break;
    }
});


function togglePlay() {
    if (!isPlay) {
        songPlay();
    } else {
        songPause();
    }
}

function songPlay() {
    isPlay = true;
    playBtn.classList.remove('icon-24gf-play');
    playBtn.classList.add('icon-iconstop');
    audio.play();
}

function songPause() {
    isPlay = false;
    playBtn.classList.remove('icon-iconstop');
    playBtn.classList.add('icon-24gf-play');
    audio.pause();
}

function preSong() {
    if (curSongIndex > 0) {
        curSongIndex--;
        render(songsList[curSongIndex]);
        songPlay();
    }
}

function nextSong() {
    if (curSongIndex < songsList.length - 1) {
        curSongIndex++;
        render(songsList[curSongIndex]);
        songPlay();
    }
}

function voiceControl() {
    if (audio.volume > 0) {
        voiceOff();
    } else {
        voiceOn();
    }
}

function voiceOn() {
    audio.volume = 1;
    voiceBtn.classList.remove('icon-volume-mute-fill');
    voiceBtn.classList.add('icon-shengyin_shiti');
}

function voiceOff() {
    audio.volume = 0;
    voiceBtn.classList.remove('icon-shengyin_shiti');
    voiceBtn.classList.add('icon-volume-mute-fill');
}

function render(song) {
    title.innerHTML = song.title;
    author.innerHTML = song.author;
    bgImg.src = song.bgPath; 
    audio.volume = 1; 
    audio.src = song.path; 
}


init();