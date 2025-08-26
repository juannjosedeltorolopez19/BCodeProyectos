document.addEventListener('DOMContentLoaded', function () {
    const playBtn = document.getElementById('playBtn');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const timeDisplay = document.getElementById('timeDisplay');
    const lyricsContainer = document.getElementById('lyrics-container');
    const musicPlayer = document.getElementById('musicPlayer');

    let isPlaying = false;
    let lyricsTimeouts = [];
    const lyrics = [
        { text: "I wanna da-", time: 1 },
        { text: "I wanna dance in the lights", time: 2 },
        { text: "I wanna ro-", time: 3 },
        { text: "wanna rock your body", time: 4.05 },
        { text: "I wanna go", time: 8 },
        { text: "I wanna go for a ride", time: 9 },
        { text: "Hop in the music and", time: 11 },
        { text: "Rock your body", time: 12.05 },
        { text: "I wanna da-", time: 14 },
        { text: "I wanna dance in the lights", time: 15},
        { text: "I wanna ro-", time: 18},
        { text: "Wanna rock your body", time: 19},
        { text: "I wanna go", time: 22},
        { text: "I wanna go for a ride", time: 23},
        { text: "Hop in the music and ", time: 25},
        { text: "Rock your body", time:27},
        { text: "come on, come on", time: 29 },
        { text: "Rock that body", time: 31 },
        { text: "(Rock your body)", time: 35 },
        { text: "Rock that body", time: 38 },
        { text: "come on, come on", time: 40 },
        { text: "Rock", time: 42 }
    ];

    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    }
    function updateProgress() {
        const currentTime = musicPlayer.currentTime;
        const duration = musicPlayer.duration;
        if (duration) {
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
        }
    }

    progressContainer.addEventListener('click', function (e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = musicPlayer.duration;

        if (duration) {
            musicPlayer.currentTime = (clickX / width) * duration;
        }
    });

    function clearAllLyricsTimeouts() {
        lyricsTimeouts.forEach(timeout => clearTimeout(timeout));
        lyricsTimeouts = [];
    }
    function displayLyrics() {
        clearAllLyricsTimeouts();
        lyricsContainer.innerHTML = '';
        lyrics.forEach(line => {
            const timeout = setTimeout(() => {
                const lineElement = document.createElement('div');
                lineElement.classList.add('lyrics-line');
                lineElement.innerHTML = `<span class="prompt">$</span> <span class="typing-text">${line.text}</span>`;
                lyricsContainer.appendChild(lineElement);
                setTimeout(() => {
                    lineElement.classList.add('visible');
                }, 10);
                lyricsContainer.scrollTop = lyricsContainer.scrollHeight;
            }, line.time * 1000);
            
            lyricsTimeouts.push(timeout);
        });
    }

    playBtn.addEventListener('click', function () {
        if (!isPlaying) {
            isPlaying = true;
            musicPlayer.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            displayLyrics();
        } else {
            isPlaying = false;
            musicPlayer.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            clearAllLyricsTimeouts();
        }
    });

    musicPlayer.addEventListener('timeupdate', updateProgress);
    musicPlayer.addEventListener('ended', function () {
        isPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        progressBar.style.width = '0%';
        timeDisplay.textContent = '00:00 / 00:00';
        musicPlayer.currentTime = 0;
        clearAllLyricsTimeouts();
        lyricsContainer.innerHTML = '';
    });
    musicPlayer.addEventListener('loadedmetadata', function () {
        timeDisplay.textContent = `00:00 / ${formatTime(musicPlayer.duration)}`;
    });
    musicPlayer.addEventListener('seeked', function() {
        clearAllLyricsTimeouts();
        lyricsContainer.innerHTML = '';
        if (isPlaying) {
            displayLyrics();
        }
    });
});