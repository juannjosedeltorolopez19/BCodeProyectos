// script.js
// Efecto de corazones flotando
const cantidad = 30;
for (let i = 0; i < cantidad; i++) {
  let heart = document.createElement("div");
    heart.innerHTML = "❤️";
      heart.style.position = "absolute";
        heart.style.top = Math.random() * 100 + "vh";
          heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = Math.random() * 20 + 10 + "px";
              heart.style.opacity = 0.8;
                document.body.appendChild(heart);

                  animate(heart);
                  }

                  function animate(el) {
                    let top = parseFloat(el.style.top);
                      const interval = setInterval(() => {
                          top -= 0.5;
                              if (top < -10) {
                                    top = 100;
                                          el.style.left = Math.random() * 100 + "vw";
                                              }
                                                  el.style.top = top + "vh";
                                                    }, 100);
                                                    }