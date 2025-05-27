function generarQR() {
    const texto = document.getElementById("texto").value;
    const qr = qrcode(0, 'M'); 
    qr.addData(texto);
    qr.make();
    document.getElementById("qr").innerHTML = qr.createSvgTag({ cellSize: 8 });
}