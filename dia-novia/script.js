
window.addEventListener('beforeunload', (event) => {
       event.preventDefault();
              event.returnValue = ''; // Chrome requiere un valor de retorno no vacío, aunque esté vacío
                   });