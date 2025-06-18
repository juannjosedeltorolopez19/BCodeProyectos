const PASSWORD = "bcode";
const accessOverlay = document.getElementById('accessOverlay');
const accessForm = document.getElementById('accessForm');
const passwordInput = document.getElementById('passwordInput');
const accessMessage = document.getElementById('accessMessage');
const mainContent = document.getElementById('mainContent');

accessForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (passwordInput.value === PASSWORD) {
        accessMessage.textContent = "✓ Acceso concedido";
        accessMessage.style.color = "#7bed9f";

        accessOverlay.style.transform = "translateY(-100%)";

        setTimeout(() => {
            mainContent.style.display = "block";
            setTimeout(() => {
                mainContent.style.opacity = "1";
                mainContent.style.transform = "translateY(0)";
            }, 100);
        }, 800);

        setTimeout(() => {
            createHearts();
            setupSurpriseButton();
            animateSections();
        }, 1000);
    } else {
        accessMessage.textContent = "✗ Contraseña incorrecta. Inténtalo de nuevo.";
        accessMessage.style.color = "#ff6b8b";

        passwordInput.style.animation = "shake 0.5s";
        setTimeout(() => {
            passwordInput.style.animation = "";
        }, 500);
    }
});

function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heartCount = 50;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-icon');
        heart.innerHTML = '<i class="fas fa-heart"></i>';

        heart.style.left = `${Math.random() * 100}vw`;

        const size = Math.random() * 30 + 20;
        heart.style.fontSize = `${size}px`;

        const colors = ['#ff6b8b', '#ff99ac', '#ffc3d0', '#ff4757'];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];

        heart.style.animationDelay = `${Math.random() * 10}s`;

        heartsContainer.appendChild(heart);
    }
}

function setupSurpriseButton() {
    const surpriseBtn = document.getElementById('surpriseBtn');

    surpriseBtn.addEventListener('click', function () {
        createConfetti();

        const specialMessage = document.createElement('div');
        specialMessage.innerHTML = `
                    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); display: flex; justify-content: center; align-items: center; z-index: 2000;">
                        <div style="background: linear-gradient(135deg, #f8d7da, #fad2e1, #fde2e4); padding: 2.5rem; border-radius: 20px; text-align: center; max-width: 90%; max-height: 90%; overflow: auto; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
                            <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: #a66378; display: flex; align-items: center; justify-content: center; gap: 15px;">
                                <i class="fas fa-heart" style="color: #ff6b8b;"></i> ¡Te Amo! <i class="fas fa-heart" style="color: #ff6b8b;"></i>
                            </h2>
                            <p style="font-size: 1.4rem; line-height: 1.6; margin-bottom: 2rem; color: #5a3a44;">
                                Eres la persona más increíble que he conocido. <br>
                                Gracias por estar en mi vida y por hacerme tan feliz cada día. <br>
                                Prometo amarte, cuidarte y hacerte sonreír por siempre.
                            </p>
                            <button id="closeBtn" style="background: #a66378; color: white; border: none; padding: 1rem 2.5rem; border-radius: 50px; font-size: 1.2rem; cursor: pointer; transition: all 0.3s ease;">
                                Cerrar
                            </button>
                        </div>
                    </div>
                `;

        document.body.appendChild(specialMessage);

        document.getElementById('closeBtn').addEventListener('click', function () {
            document.body.removeChild(specialMessage);
        });
    });
}

function createConfetti() {
    const colors = ['#ff6b8b', '#ff99ac', '#ffc3d0', '#f8d7da', '#fad2e1', '#fde2e4'];

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        confetti.style.left = `${Math.random() * 100}vw`;

        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;

        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }

        const animation = confetti.animate([
            { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
            { transform: `translateY(${Math.random() * 100 + 100}vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0,0.9,0.57,1)'
        });

        animation.onfinish = () => confetti.remove();

        document.body.appendChild(confetti);
    }
}

function animateSections() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.visibility = 'visible';
            section.style.animation = 'slideUp 1s ease-out forwards';
        }, 500 * index);
    });
}

const style = document.createElement('style');
style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                20%, 60% { transform: translateX(-10px); }
                40%, 80% { transform: translateX(10px); }
            }
        `;
document.head.appendChild(style);
