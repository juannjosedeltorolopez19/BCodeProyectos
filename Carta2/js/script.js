// script.js
function createLetter() {
    const name = document.getElementById('motherName').value || 'Mamá';
    document.getElementById('letterTitle').textContent = `Querida Mamá ${name}`;
    document.getElementById('formContainer').classList.add('opacity-0', 'scale-75');
    setTimeout(() => {
        document.getElementById('formContainer').classList.add('hidden');
        document.getElementById('letterContainer').classList.remove('hidden');
        document.getElementById('letterContainer').classList.add('animate-[letterOpen_0.6s_ease-out]');
    }, 300);
}

function closeLetter() {
    document.getElementById('letterContainer').classList.remove('animate-[letterOpen_0.6s_ease-out]');
    document.getElementById('letterContainer').classList.add('animate-[letterOpen_0.6s_ease-out_reverse]');
    setTimeout(() => {
        document.getElementById('letterContainer').classList.add('hidden');
        document.getElementById('formContainer').classList.remove('hidden', 'opacity-0', 'scale-75');
        document.getElementById('formContainer').classList.add('animate-[fadeIn_0.4s_ease-in]');
    }, 500);
}            