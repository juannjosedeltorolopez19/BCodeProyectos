document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "Eres mi sol en los días grises.",
        "Tu sonrisa es mi razón para ser feliz.",
        "Cada momento a tu lado es un regalo.",
        "Te amo más de lo que las palabras pueden expresar.",
        "Eres la mejor cosa que me ha pasado en la vida.",
        "Mi amor por ti crece cada día más.",
        "Eres mi todo."
    ];

    const messageElement = document.getElementById('message');
    const btn = document.getElementById('btn');

    function getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    btn.addEventListener('click', () => {
        messageElement.textContent = getRandomMessage();
    });
});