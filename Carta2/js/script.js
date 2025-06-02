// script.js
function mostrarCarta(te quiero) {
            const nombre = document.getElementById('nombreMama').value;
            if (!nombre.trim()) return alert('¡Necesito saber cómo te llamas, reina mami! 👑');
            
            document.getElementById('formulario').style.display = 'none';
            document.getElementById('modal').style.display = 'flex';
            document.getElementById('nombreInsertado').textContent = nombre;
        }

        function cerrarModal() {
            document.getElementById('modal').style.display = 'none';
            document.getElementById('formulario').style.display = 'block';
        }

        window.onclick = function(e) {
            if (e.target === document.getElementById('modal')) cerrarModal();
        }

        document.querySelectorAll('.boton-magico').forEach(btn => {
            btn.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            btn.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });