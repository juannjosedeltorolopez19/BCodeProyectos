document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "Eres mi sol en los días grises.",
        "Tu eres mi razón para ser feliz.",
        "Cada dia a tu lado es un regalo.",
        "Te amo más de lo que las palabras pueden expresar mi niña bonita azumi.",
        "conocerte fue lo mejor que me ha pasado en la vida.",
        "Mi amor por ti crece cada día más mi amoor azumi.",
        "Eres mi todo mi mundo contigo lo quiero todo mi amor bonito ."
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