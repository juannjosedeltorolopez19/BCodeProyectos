document.addEventListener('DOMContentLoaded', function () {
    function createFloatingHearts() {
        const container = document.getElementById('floating-elements');
        const colors = ['#ff69b4', '#ff1493', '#d10b63', '#ff8eb4'];
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            const size = Math.random() * 24 + 8;
            heart.style.width = size + 'px';
            heart.style.height = size + 'px';
            const color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.animationDuration = (Math.random() * 10 + 5) + 's';
            heart.style.animationDelay = (Math.random() * 5) + 's';
            heart.innerHTML = `
                        <svg viewBox="0 0 24 24" width="100%" height="100%">
                            <path fill="${color}" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    `;
            container.appendChild(heart);
        }
    }
    createFloatingHearts();
    const photoContainer = document.getElementById('photo-container');
    const imageUrl = 'https://bcodestorague.anteroteobaldob.workers.dev/share/anteroteobaldob_gmail_com/IMG/Amor_pag.jpg';
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Mi amor';
    img.onerror = function () {
        photoContainer.innerHTML = 'Tu foto aquí';
        photoContainer.style.display = 'flex';
        photoContainer.style.justifyContent = 'center';
        photoContainer.style.alignItems = 'center';
        photoContainer.style.fontSize = '16px';
        photoContainer.style.color = '#ff69b4';
        photoContainer.style.padding = '20px';
    };
    photoContainer.appendChild(img);
    const audioButton = document.getElementById('audio-button');
    const loveAudio = document.getElementById('love-audio');
    let audioPlaying = false;
    audioButton.addEventListener('click', function () {
        if (audioPlaying) {
            loveAudio.pause();
            audioButton.innerHTML = `
                        <svg viewBox="0 0 24 24">
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                        </svg>
                        Escuchar mensaje
                    `;
        } else {
            loveAudio.play();
            audioButton.innerHTML = `
                        <svg viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        </svg>
                        Pausar mensaje
                    `;
        }
        audioPlaying = !audioPlaying;
    });
    let scrollAudioPlayed = false;
    window.addEventListener('scroll', function () {
        if (!scrollAudioPlayed) {
            loveAudio.play();
            audioButton.innerHTML = `
                        <svg viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        </svg>
                        Pausar mensaje
                    `;
            audioPlaying = true;
            scrollAudioPlayed = true;
            const message = document.createElement('div');
            message.style.position = 'fixed';
            message.style.bottom = '20px';
            message.style.left = '50%';
            message.style.transform = 'translateX(-50%)';
            message.style.backgroundColor = 'rgba(209, 11, 99, 0.9)';
            message.style.color = 'white';
            message.style.padding = '10px 20px';
            message.style.borderRadius = '50px';
            message.style.zIndex = '1000';
            message.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            message.textContent = 'Reproduciendo mensaje...';
            document.body.appendChild(message);
            setTimeout(() => {
                document.body.removeChild(message);
            }, 4000);
        }
    });
    const namePlaceholder = document.getElementById('name-placeholder');
    const name = "Stephanie ";
    let i = 0;
    function typeWriter() {
        if (i < name.length) {
            namePlaceholder.innerHTML += name.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    namePlaceholder.innerHTML = '';
    setTimeout(typeWriter, 1000);
    const animateElements = function () {
        const elements = document.querySelectorAll('.message, .quote, .audio-control');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.animation = `fadeIn 1s ease forwards`;
                element.style.opacity = '0';
            }, index * 200);
        });
    };
    setTimeout(animateElements, 500);
});
