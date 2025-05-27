// script.js
// Configuración inicial
document.body.style.margin = '0';
document.body.style.overflow = 'hidden';
document.body.style.background = '#000000';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
document.body.appendChild(renderer.domElement);

// Sistema de iluminación mejorado
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Intensidad aumentada
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5); // Luz principal fuerte
directionalLight.position.set(10, 15, 10);
directionalLight.castShadow = true; // Habilitar sombras
scene.add(directionalLight);

// Helper para visualizar la dirección de la luz
// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(directionalLightHelper);

const pointLight = new THREE.PointLight(0xffaa00, 1.5, 50); // Luz de acento
pointLight.position.set(-5, 5, 15);
scene.add(pointLight);

// Partículas de fondo
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 20;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.03,
    color: 0xffffff,
    transparent: true,
    opacity: 0.6
});
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Texto 3D con materiales ajustados
const loader = new THREE.FontLoader();
loader.load('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/helvetiker_regular.typeface.json', 
    function(font) {
        // Generación de textura
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 512;
        canvas.height = 512;
        
        // Base para textura
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Patrón de grietas
        ctx.fillStyle = '#000000';
        for(let i = 0; i < 200; i++) {
            ctx.beginPath();
            ctx.arc(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() * 3,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }
        
        const texture = new THREE.CanvasTexture(canvas);

        // Geometría del texto
        const textGeometry = new THREE.TextGeometry('BCode', {
            font: font,
            size: 2.5,
            height: 0.6,
            curveSegments: 24,
            bevelEnabled: true,
            bevelThickness: 0.15,
            bevelSize: 0.08,
            bevelOffset: 0,
            bevelSegments: 8
        });

        // Material mejorado
        const material = new THREE.MeshPhysicalMaterial({
            color: 0x00bfff,
            metalness: 0.65, // Reducido para mayor visibilidad del color
            roughness: 0.25,
            clearcoat: 0.9,
            bumpMap: texture,
            bumpScale: 0.2,
            specularColor: 0xffffff,
            emissive: 0x0066ff, // Emisivo añadido
            emissiveIntensity: 0.3,
            transparent: true,
            opacity: 0.97
        });

        const textMesh = new THREE.Mesh(textGeometry, material);
        textGeometry.center();
        textMesh.position.y = 1;
        scene.add(textMesh);
    },
    undefined,
    function(error) {
        console.error('Error loading font:', error);
    }
);

// Posición de cámara ajustada
camera.position.set(0, 3, 15);
camera.lookAt(0, 0, 0);

// Controles Orbitales
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.5;
controls.enableZoom = true;

// Animación
function animate() {
    requestAnimationFrame(animate);
    
    // Rotación del texto
    if(scene.children[4]) {
        scene.children[4].rotation.y += 0.008;
    }
    
    // Movimiento de partículas
    particles.rotation.x += 0.0005;
    particles.rotation.y += 0.0007;
    
    // Actualizar controles
    controls.update();
    
    renderer.render(scene, camera);
}

// Manejo de resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();