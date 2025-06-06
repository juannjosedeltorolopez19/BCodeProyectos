
// Toggle mobile menu
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('open');

    // Cambiar ícono
    const icon = this.querySelector('i');
    if (mobileMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Efecto de búsqueda
const searchInputs = document.querySelectorAll('.search-input');
searchInputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.classList.add('ring-2', 'ring-festiveGold');
    });

    input.addEventListener('blur', function () {
        this.parentElement.classList.remove('ring-2', 'ring-festiveGold');
    });
});

// Efecto de desplazamiento para la barra de navegación
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});

// Simular resultados de búsqueda
const desktopSearch = document.querySelector('.desktop-search .search-input');
const mobileSearch = document.querySelector('.mobile-search-container .search-input');

if (desktopSearch) {
    desktopSearch.addEventListener('input', function () {
        const results = document.querySelectorAll('.desktop-search .result-item');
        if (this.value.length > 0) {
            results.forEach(item => {
                item.style.display = 'flex';
            });
        } else {
            results.forEach(item => {
                item.style.display = 'none';
            });
        }
    });
}

if (mobileSearch) {
    mobileSearch.addEventListener('input', function () {
        const results = document.querySelectorAll('.mobile-search-container .result-item');
        if (this.value.length > 0) {
            results.forEach(item => {
                item.style.display = 'flex';
            });
        } else {
            results.forEach(item => {
                item.style.display = 'none';
            });
        }
    });
}

// Animación para las tarjetas
const cards = document.querySelectorAll('.holiday-card');
cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Abrir modal de contacto
function openModal(button) {
    const card = button.closest('.example-card');
    const projectName = card.getAttribute('data-project');
    
    document.getElementById('project-name').textContent = projectName;
    document.getElementById('contact-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    document.getElementById('contact-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Abrir imagen en pantalla completa
    function openFullscreen(button) {
    const card = button.closest('.example-card');
    const img = card.querySelector('.example-image');
    const title = card.querySelector('h3').textContent;
    
    document.getElementById('fullscreen-image').src = img.src;
    document.getElementById('image-caption').textContent = title;
    document.getElementById('image-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Cerrar modal de imagen
function closeImageModal() {
    document.getElementById('image-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Enviar formulario por WhatsApp
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const projectName = document.getElementById('project-name').textContent;
    const audioUrl = document.getElementById('audio-url').value;
    const phrase = document.getElementById('phrase').value;
    const dedicatedTo = document.getElementById('dedicated-to').value;
    const yourName = document.getElementById('your-name').value;
    const specifications = document.getElementById('specifications').value;
    
    // Crear mensaje para WhatsApp
    let message = `¡Hola! Estoy interesado en personalizar: *${projectName}*%0A%0A`;
    message += `*Persona a dedicar:* ${dedicatedTo}%0A`;
    message += `*Mi nombre:* ${yourName}%0A`;
    message += `*Frase personal:* ${phrase}%0A`;
    
    if(audioUrl) {
        message += `*URL de audio:* ${audioUrl}%0A`;
    }
    
    if(specifications) {
        message += `*Especificaciones adicionales:* ${specifications}%0A`;
    }
    
    message += `%0A_Enviado desde BCodeFestS_`;
    
    // Crear enlace de WhatsApp
    const whatsappUrl = `https://wa.me/1234567890?text=${message}`;
    
    // Abrir enlace
    window.open(whatsappUrl, '_blank');
    
    // Cerrar modal
    closeModal();
    
    // Mostrar mensaje de confirmación
    alert('¡Solicitud enviada con éxito! Serás redirigido a WhatsApp para completar el proceso.');
});

// Cerrar modales al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    const contactModal = document.getElementById('contact-modal');
    const imageModal = document.getElementById('image-modal');
    
    if (event.target === contactModal) {
        closeModal();
    }
    
    if (event.target === imageModal) {
        closeImageModal();
    }
});