document.addEventListener('DOMContentLoaded', function () {
    const botonSi = document.getElementById('acepto');
    const botonNo = document.getElementById('no-acepto');
    const modal = document.querySelector('.modal');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const mensajePersuasion = document.getElementById('mensaje-persuasion');
    const audioControl = document.getElementById('audio-control');
    const backgroundMusic = document.getElementById('background-music');
    const celebrationMusic = document.getElementById('celebration-music');
    const rosesDecoration = document.getElementById('roses-decoration');
    const floresEfecto = document.getElementById('flores-efecto');
    const imagenesItems = document.querySelectorAll('.imagen-item');
    const imagenTexto = document.querySelector('.imagen-texto');

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
    }

    let musicaReproduciendo = false;
    let musicaInicialReproducida = false;
    let imagenesUsadas = [0];
    let contadorNoClicks = 0;
    let corazonesInterval;

    const textosPersuasion = [
        "Mi vida sería más completa contigo a mi lado",
        "Eres la mujer más hermosa que he conocido",
        "Tu sonrisa ilumina mis días",
        "No imagino mi futuro sin ti",
        "Mi corazón late por ti",
        "¡Ahora eres oficialmente mi novia! Te amo"
    ];

    function mostrarImagen(id) {
        imagenesItems.forEach(img => img.classList.remove('activa'));
        const imagen = document.querySelector(`.imagen-item[data-id="${id}"]`);
        imagen.classList.add('activa');
        imagenTexto.textContent = textosPersuasion[id];
    }

    function obtenerImagenUnica() {
        const disponibles = Array.from(imagenesItems)
            .map(img => parseInt(img.getAttribute('data-id')))
            .filter(id => !imagenesUsadas.includes(id));

        if (disponibles.length === 0) {
            imagenesUsadas = [0];
            return 0;
        }

        const indiceAleatorio = Math.floor(Math.random() * disponibles.length);
        const idSeleccionado = disponibles[indiceAleatorio];

        imagenesUsadas.push(idSeleccionado);
        return idSeleccionado;
    }

    function reproducirMusicaInicial() {
        if (!musicaInicialReproducida) {
            backgroundMusic.play().then(() => {
                musicaReproduciendo = true;
                audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
                musicaInicialReproducida = true;
            }).catch(error => {
                console.log("La reproducción automática fue prevenida:", error);
            });
        }
    }

    window.addEventListener('scroll', reproducirMusicaInicial, { once: true });
    document.addEventListener('click', reproducirMusicaInicial, { once: true });

    function crearRosasDecorativas() {
        for (let i = 0; i < 15; i++) {
            const rose = document.createElement('div');
            rose.classList.add('rose');
            rose.innerHTML = '❀';
            rose.style.left = `${Math.random() * 100}%`;
            rose.style.top = `${Math.random() * 100}%`;
            rose.style.fontSize = `${Math.random() * 20 + 15}px`;
            rose.style.opacity = `${Math.random() * 0.3 + 0.1}`;
            rosesDecoration.appendChild(rose);
        }
    }

    function iniciarLluviaCorazones() {
        corazonesInterval = setInterval(crearCorazon, 250);
    }

    function detenerLluviaCorazones() {
        clearInterval(corazonesInterval);
    }

    function crearCorazon() {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon');

        const tamaño = Math.random() * 25 + 15;
        corazon.style.width = `${tamaño}px`;
        corazon.style.height = `${tamaño}px`;

        corazon.style.left = `${Math.random() * 100}vw`;

        const colores = ['#ff9ec3', '#ffc6d9', '#ff70a0', '#ffb6c1', '#ffd1dc'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        corazon.style.background = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${colorAleatorio}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>') no-repeat center center`;
        corazon.style.backgroundSize = 'contain';

        document.body.appendChild(corazon);

        corazon.style.animation = `caer ${Math.random() * 4 + 3}s linear forwards`;

        setTimeout(() => {
            if (corazon.parentNode) {
                corazon.remove();
            }
        }, 7000);
    }

    function crearFlores() {
        const flor = document.createElement('div');
        flor.classList.add('flor');
        flor.innerHTML = '❀';
        flor.style.left = `${Math.random() * 100}vw`;
        flor.style.fontSize = `${Math.random() * 15 + 10}px`;
        flor.style.color = ['#ff9ec3', '#ffc6d9', '#ff70a0'][Math.floor(Math.random() * 3)];
        floresEfecto.appendChild(flor);
        setTimeout(() => {
            if (flor.parentNode) {
                flor.remove();
            }
        }, 10000);
    }

    function crearFuegosArtificiales(x, y) {
        const colores = ['#ff9ec3', '#ffc6d9', '#ff70a0', '#ffb6c1', '#ffd1dc'];
        for (let i = 0; i < 50; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');

            const angulo = Math.random() * Math.PI * 2;
            const distancia = Math.random() * 150 + 50;
            const tx = Math.cos(angulo) * distancia;
            const ty = Math.sin(angulo) * distancia;

            firework.style.setProperty('--tx', `${tx}px`);
            firework.style.setProperty('--ty', `${ty}px`);

            firework.style.left = `${x}px`;
            firework.style.top = `${y}px`;
            firework.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];

            document.body.appendChild(firework);

            firework.style.animation = `explode ${Math.random() * 0.5 + 0.5}s ease-out forwards`;
            setTimeout(() => {
                if (firework.parentNode) {
                    firework.remove();
                }
            }, 2000);
        }
    }

    function mostrarMensajePersuasion() {
        mensajePersuasion.textContent = [
            "¿Estás segura? ¡Piénsalo bien!",
            "¡Vamos, dale otra oportunidad!",
            "Mi corazón se romperá si dices que no",
            "Eres la mujer de mis sueños",
            "¡No me rechaces! Te amo"
        ][contadorNoClicks - 1];

        mensajePersuasion.classList.add('mostrar');

        setTimeout(() => {
            mensajePersuasion.classList.remove('mostrar');
        }, 2000);
    }

    audioControl.addEventListener('click', function () {
        if (musicaReproduciendo) {
            backgroundMusic.pause();
            celebrationMusic.pause();
            audioControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            if (modal.classList.contains('activo')) {
                celebrationMusic.play();
            } else {
                backgroundMusic.play();
            }
            audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
        musicaReproduciendo = !musicaReproduciendo;
    });

    function moverBotonNo() {
        if (isTouchDevice) {
            const contenedor = document.querySelector('.botones-contenedor');
            const contenedorRect = contenedor.getBoundingClientRect();
            const x = Math.random() * (contenedorRect.width - botonNo.offsetWidth - 20) + 10;
            const y = Math.random() * (contenedorRect.height - botonNo.offsetHeight - 20) + 10;
            botonNo.style.position = 'absolute';
            botonNo.style.left = `${x}px`;
            botonNo.style.top = `${y}px`;
        } else {
            const x = Math.random() * (window.innerWidth - botonNo.offsetWidth - 40) + 20;
            const y = Math.random() * (window.innerHeight - botonNo.offsetHeight - 40) + 20;
            botonNo.style.position = 'fixed';
            botonNo.style.left = `${x}px`;
            botonNo.style.top = `${y}px`;
        }
        contadorNoClicks++;
        mostrarMensajePersuasion();

        const imagenId = obtenerImagenUnica();
        mostrarImagen(imagenId);

        if (contadorNoClicks >= 5) {
            botonNo.style.display = 'none';
            botonSi.style.padding = '25px 70px';
            botonSi.style.fontSize = '1.6rem';
            setTimeout(() => {
                mensajePersuasion.textContent = "¡Ahora no tienes opción! ¡Tienes que decir que sí!";
                mensajePersuasion.classList.add('mostrar');
                setTimeout(() => {
                    mensajePersuasion.classList.remove('mostrar');
                }, 3000);
            }, 1000);
        }
    }

    botonSi.addEventListener('click', function () {
        mostrarImagen(6);
        modal.classList.add('activo');
        if (musicaReproduciendo) {
            backgroundMusic.pause();
            celebrationMusic.play();
            audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
        detenerLluviaCorazones();
        setInterval(crearCorazon, 100);
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                crearFuegosArtificiales(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight / 2
                );
            }, i * 300);
        }
        if (!musicaReproduciendo) {
            celebrationMusic.play();
            musicaReproduciendo = true;
            audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    });

    if (isTouchDevice) {
        let lastMoveTime = 0;
        botonNo.addEventListener('touchstart', function (e) {
            e.preventDefault();
            const currentTime = new Date().getTime();
            if (currentTime - lastMoveTime > 300) {
                moverBotonNo();
                lastMoveTime = currentTime;
            }
        });
    } else {
        botonNo.addEventListener('mouseover', moverBotonNo);
    }

    botonNo.addEventListener('click', function (e) {
        if (!isTouchDevice) {
            e.preventDefault();
            moverBotonNo();
        }
    });

    cerrarModal.addEventListener('click', function () {
        modal.classList.remove('activo');
        if (musicaReproduciendo) {
            celebrationMusic.pause();
            backgroundMusic.play();
        }
    });

    crearRosasDecorativas();
    iniciarLluviaCorazones();
    setInterval(crearFlores, 1000);

    audioControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
});
