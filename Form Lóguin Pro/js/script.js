const form = document.getElementById('loginForm');
        
        // Validación Dinámica
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                const isValid = input.checkValidity();
                input.classList.toggle('border-red-400', !isValid);
                input.classList.toggle('neon-glow', isValid);
                
                if(input.type === 'email' && !isValid) {
                    input.nextElementSibling.textContent = 'Correo inválido';
                }
            });
        });

        // Animación de Envío
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            
            if(form.checkValidity()) {
                btn.disabled = true;
                btn.innerHTML = `
                    <div class="flex items-center justify-center space-x-2">
                        <div class="w-4 h-4 border-2 border-white rounded-full animate-spin"></div>
                        <span>Autenticando...</span>
                    </div>
                `;
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = 'Acceso Confirmado!';
                    btn.classList.add('bg-gradient-to-r','from-green-400','to-cyan-400');
                    setTimeout(() => btn.innerHTML = 'Acceder Ahora', 2000);
                }, 2000);
            }
        });