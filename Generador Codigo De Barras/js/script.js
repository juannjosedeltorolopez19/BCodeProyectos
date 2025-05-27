// script.js

function generateBarcode() {
    const input = document.getElementById('barcode-input');
    const container = document.querySelector('.barcode-container');
    const spinner = document.querySelector('.loading-spinner');
    const downloadBtn = document.querySelector('.download-btn');

    if (!input.value.trim()) {
        input.style.animation = 'shake 0.4s';
        setTimeout(() => input.style.animation = '', 400);
        return;
    }

    spinner.style.display = 'block';
    
    setTimeout(() => {
        const svg = document.getElementById('barcode-output');
        svg.innerHTML = '';
        
        JsBarcode(svg, input.value.trim(), {
            format: 'CODE128',
            lineColor: '#000000',
            background: '#ffffff',
            width: 2,
            height: 100,
            displayValue: true,
            font: 'Inter',
            textAlign: 'center',
            fontSize: 16,
            margin: 15,
            valid: function(valid) {
                if(!valid) {
                    alert('Código no válido! Use solo caracteres permitidos');
                    svg.innerHTML = '';
                }
            }
        });

        spinner.style.display = 'none';
        container.classList.add('visible');
        downloadBtn.style.display = 'flex';
    }, 800);
}

function downloadPNG() {
    const svg = document.getElementById('barcode-output');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Configurar dimensiones
    const svgRect = svg.getBoundingClientRect();
    canvas.width = svgRect.width * 2;
    canvas.height = svgRect.height * 2;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    

    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
    
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        
        const link = document.createElement('a');
        link.download = `codigo-barras-premium-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };
}
