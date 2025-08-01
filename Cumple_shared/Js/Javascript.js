function mostrarPagina(num) {
      const paginas = document.querySelectorAll('.pagina');
        paginas.forEach(p => p.classList.remove('activa'));
          document.getElementById('pagina' + num).classList.add('activa');
          }

          function createBalloon() {
            const balloon = document.createElement('div');
              balloon.className = 'balloon';
                const colors = ['#ff4d4d', '#ff66cc', '#66ccff', '#ffff66', '#99ff99', '#ff9933'];
                  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
                    balloon.style.left = Math.random() * 100 + 'vw';
                      balloon.style.animationDuration = (6 + Math.random() * 4) + 's';
                        document.body.appendChild(balloon);
                          setTimeout(() => balloon.remove(), 10000);
                          }

                          setInterval(createBalloon, 400);
