const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const messageDiv = document.getElementById('message');

yesButton.addEventListener('click', () => {
    messageDiv.textContent = '¡Yuju! ¡Aceptaste! 🥰';
    messageDiv.style.color = '#4CAF50';
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
});

noButton.addEventListener('click', () => {
    // Mover el botón "No" aleatoriamente
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});