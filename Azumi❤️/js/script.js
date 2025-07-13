document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "Eres mi sol en los días grises te amor amor mio.",
        "Tu eres mi razón para ser feliz eres mi persona favorita mi universo te amoo.",
        "Cada dia a tu lado es un regalo muy bonito quédate conmigo  hasta el fin te amoo.",
        "Te amo más de lo que las palabras pueden expresar mi niña bonita azumi.",
        "conocerte fue lo mejor que me ha pasado en la vida te amooo señorita  azumi mi amor bonito.",
        "Mi amor por ti crece cada día más mi amoor azumi.",
        "Eres mi todo mi mundo contigo lo quiero todo mi amor azumi."
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