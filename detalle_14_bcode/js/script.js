
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = new Audio();
    audioPlayer.src = 'https://bcodestorague.anteroteobaldob.workers.dev/share/anteroteobaldob_gmail_com/AUDIO/those%20eyes%20.mp3';
    audioPlayer.loop = true;
    audioPlayer.volume = 0.3;
    let musicStarted = false;

    const btnAudio = document.getElementById('btnAudio');
    function startAudioAndRemoveListeners() {
        if (!musicStarted) {
            audioPlayer.play();
            if (btnAudio) { 
                btnAudio.innerHTML = '❤️';
            }
            musicStarted = true;
            document.removeEventListener('click', startAudioAndRemoveListeners);
            document.removeEventListener('scroll', startAudioAndRemoveListeners);
        }
    }

    document.addEventListener('click', startAudioAndRemoveListeners);
    document.addEventListener('scroll', startAudioAndRemoveListeners);
    if (btnAudio) { 
        btnAudio.addEventListener('click', () => {
            if (musicStarted) {
                audioPlayer.pause();
                btnAudio.innerHTML = '🎵';
            } else {
                audioPlayer.play();
                btnAudio.innerHTML = '❤️';
            }
            musicStarted = !musicStarted;
        });
    }
    
    const crearEstrellas = () => {
        const estrellas = document.getElementById('estrellas');
        const cantidad = 150;
        
        for (let i = 0; i < cantidad; i++) {
            const estrella = document.createElement('div');
            estrella.classList.add('estrella');
            
            const tamaño = Math.random() * 3;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 4;
            
            estrella.style.width = `${tamaño}px`;
            estrella.style.height = `${tamaño}px`;
            estrella.style.left = `${posX}vw`;
            estrella.style.top = `${posY}vh`;
            estrella.style.animationDelay = `${delay}s`;
            
            estrellas.appendChild(estrella);
        }
    };
    
    const crearPetalos = () => {
        const contenedor = document.getElementById('flotantes');
        const petalos = ['❀', 'te amo', '🌙', '❤️', 'te amo'];
        const cantidad = 30;
        
        for (let i = 0; i < cantidad; i++) {
            const petalo = document.createElement('div');
            petalo.classList.add('petalo');
            petalo.innerHTML = petalos[Math.floor(Math.random() * petalos.length)];
            
            const inicio = Math.random() * 100;
            const duracion = 5 + Math.random() * 10;
            const delay = Math.random() * 5;
            const tamaño = 20 + Math.random() * 20;
            
            petalo.style.left = `${inicio}%`;
            petalo.style.fontSize = `${tamaño}px`;
            petalo.style.animationDuration = `${duracion}s`;
            petalo.style.animationDelay = `${delay}s`;
            petalo.style.color = `hsl(${Math.random() * 360}, 70%, 75%)`;
            
            contenedor.appendChild(petalo);
        }
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.seccion').forEach(seccion => {
        observer.observe(seccion);
    });
    
    crearEstrellas();
    crearPetalos();
});
