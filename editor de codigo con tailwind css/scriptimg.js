function showHtmlInIframe(htmlFile) {
    // Configurar paneles de vista previa
    const previewContainer = document.getElementById('preview-container');
    const terminalPanel = document.getElementById('terminal-panel');
    
    previewContainer.classList.remove('h-0');
    previewContainer.classList.add('h-64');
    terminalPanel.classList.add('h-0');
    terminalPanel.classList.remove('h-64');
    
    // Procesar el HTML para incluir recursos
    let htmlContent = htmlFile.content;
    
    // Obtener el directorio base del archivo HTML
    const baseDir = htmlFile.path.includes('/') ? 
        htmlFile.path.substring(0, htmlFile.path.lastIndexOf('/')) : 
        '';
    
    // Función mejorada para resolver rutas relativas
    function resolvePath(relativePath, requestingFilePath = '') {
        // Ignorar URLs externas
        if (relativePath.startsWith('http://') || relativePath.startsWith('https://') || 
            relativePath.startsWith('data:')) {
            return null;
        }

        // Si es ruta absoluta desde la raíz del proyecto (comienza con /)
        if (relativePath.startsWith('/')) {
            const pathFromRoot = relativePath.substring(1);
            const file = findFileByPath(pathFromRoot);
            return file ? file.content : null;
        }

        // Determinar el directorio base para la resolución
        let basePath = baseDir;
        
        // Si estamos resolviendo desde un archivo específico (como un CSS que referencia una imagen)
        if (requestingFilePath && requestingFilePath.includes('/')) {
            basePath = requestingFilePath.substring(0, requestingFilePath.lastIndexOf('/'));
        }

        // Construir la ruta completa
        const pathParts = [...basePath.split('/'), ...relativePath.split('/')].filter(p => p);
        const resolvedParts = [];

        for (const part of pathParts) {
            if (part === '..') {
                if (resolvedParts.length > 0) resolvedParts.pop();
            } else if (part !== '.') {
                resolvedParts.push(part);
            }
        }

        const resolvedPath = resolvedParts.join('/');
        const file = findFileByPath(resolvedPath);
        
        // Para imágenes, devolver la data URL directamente
        if (file && file.name.match(/\.(png|jpg|jpeg|gif|svg|webp|bmp)$/i)) {
            return file.content;
        }
        
        return file ? file.content : null;
    }

    // Procesar imágenes en el HTML
    const imgTags = htmlContent.match(/<img[^>]+src=['"]([^'"]+)['"][^>]*>/g) || [];
    for (const imgTag of imgTags) {
        const imgPath = imgTag.match(/src=['"]([^'"]+)['"]/)?.[1];
        if (!imgPath) continue;
        
        const imgContent = resolvePath(imgPath);
        
        if (imgContent) {
            // Reemplazar la etiqueta img con la data URL
            htmlContent = htmlContent.replace(
                imgTag, 
                imgTag.replace(/src=['"][^'"]+['"]/, `src="${imgContent}"`)
            );
        } else {
            htmlContent = htmlContent.replace(
                imgTag, 
                `<!-- Imagen no encontrada: ${imgPath} -->`
            );
        }
    }

    // Insertar el script de manejo de errores al final del body
    const errorHandlerScript = `
        <script>
            window.addEventListener('error', function(e) {
                window.parent.postMessage({
                    type: 'iframe-error',
                    message: e.message,
                    filename: e.filename,
                    lineno: e.lineno,
                    colno: e.colno,
                    error: e.error ? e.error.stack : null
                }, '*');
                return true;
            });
            
            window.addEventListener('unhandledrejection', function(e) {
                window.parent.postMessage({
                    type: 'iframe-promise-error',
                    message: e.reason.message || String(e.reason),
                    stack: e.reason.stack
                }, }, '*');
            });
            
            const originalConsole = {
                log: console.log,
                error: console.error,
                warn: console.warn,
                info: console.info
            };
            
            ['log', 'error', 'warn', 'info'].forEach(method => {
                console[method] = function() {
                    originalConsole[method].apply(console, arguments);
                    window.parent.postMessage({
                        type: 'iframe-console',
                        method: method,
                        args: Array.from(arguments).map(arg => 
                            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
                        )
                    }, '*');
                };
            });
        <\/script>
    `;
    
    if (!htmlContent.includes('<\/body>')) {
        htmlContent += '<\/body>';
    }
    htmlContent = htmlContent.replace('<\/body>', errorHandlerScript + '<\/body>');
    
    // Update iframe - FORZAR ACTUALIZACIÓN
    const iframe = document.getElementById('preview-frame');
    iframe.srcdoc = ''; // Limpiar primero
    setTimeout(() => {
        iframe.srcdoc = htmlContent;
    }, 50);
}



function showHtmlInIframe(htmlFile) {
        // Configurar paneles de vista previa
        const previewContainer = document.getElementById('preview-container');
        const terminalPanel = document.getElementById('terminal-panel');
        
        previewContainer.classList.remove('h-0');
        previewContainer.classList.add('h-64');
        terminalPanel.classList.add('h-0');
        terminalPanel.classList.remove('h-64');
        
        // Procesar el HTML para incluir recursos
        let htmlContent = htmlFile.content;
        
        // Obtener el directorio base del archivo HTML
        const baseDir = htmlFile.path.includes('/') ? 
            htmlFile.path.substring(0, htmlFile.path.lastIndexOf('/')) : 
            '';
        
        // Función mejorada para resolver rutas relativas
        function resolvePath(relativePath, requestingFilePath = '') {
    // Ignorar URLs externas
    if (relativePath.startsWith('http://') || relativePath.startsWith('https://') || 
        relativePath.startsWith('data:')) {
        return null;
    }

    // Si es ruta absoluta desde la raíz del proyecto (comienza con /)
    if (relativePath.startsWith('/')) {
        const pathFromRoot = relativePath.substring(1);
        const file = findFileByPath(pathFromRoot);
        return file ? file.content : null;
    }

    // Determinar el directorio base para la resolución
    let basePath = baseDir;
    
    // Si estamos resolviendo desde un archivo específico (como un CSS que referencia una imagen)
    if (requestingFilePath && requestingFilePath.includes('/')) {
        basePath = requestingFilePath.substring(0, requestingFilePath.lastIndexOf('/'));
    }

    // Construir la ruta completa
    const pathParts = [...basePath.split('/'), ...relativePath.split('/')].filter(p => p);
    const resolvedParts = [];

    for (const part of pathParts) {
        if (part === '..') {
            if (resolvedParts.length > 0) resolvedParts.pop();
        } else if (part !== '.') {
            resolvedParts.push(part);
        }
    }

    const resolvedPath = resolvedParts.join('/');
    const file = findFileByPath(resolvedPath);
    
    // Para imágenes, devolver la data URL directamente
    if (file && file.name.match(/\.(png|jpg|jpeg|gif|svg|webp|bmp)$/i)) {
        return file.content;
    }
    
    return file ? file.content : null;
}

        // Procesar CSS (reemplazar links por estilos embebidos)
        const cssLinks = htmlContent.match(/<link[^>]+href=['"]([^'"]+\.css)['"][^>]*>/g) || [];
        for (const link of cssLinks) {
            const cssPath = link.match(/href=['"]([^'"]+\.css)['"]/)?.[1];
            if (!cssPath) continue;
            
            const cssContent = resolvePath(cssPath);
            
            if (cssContent) {
                // Procesar también las referencias dentro del CSS (como imágenes o fuentes)
                let processedCss = cssContent;
                
                // Procesar url() en CSS
                processedCss = processedCss.replace(/url$$['"]?(.*?)['"]?$$/g, (match, urlPath) => {
                    const resolved = resolvePath(urlPath, cssPath);
                    if (resolved) {
                        // Convertir a data URI si es posible
                        const extension = urlPath.split('.').pop().toLowerCase();
                        if (['png', 'jpg', 'jpeg', 'gif', 'svg'].includes(extension)) {
                            return `url(data:image/${extension};base64,${btoa(resolved)})`;
                        }
                        return `url(${resolved})`;
                    }
                    return match;
                });
                
                htmlContent = htmlContent.replace(link, `<style>${processedCss}</style>`);
            } else {
                htmlContent = htmlContent.replace(link, `<!-- Archivo CSS no encontrado: ${cssPath} -->`);
            }
        }

        // Procesar JavaScript (reemplazar scripts por código embebido)
        const jsScripts = htmlContent.match(/<script[^>]+src=['"]([^'"]+\.js)['"][^>]*><\/script>/g) || [];
        for (const script of jsScripts) {
            const jsPath = script.match(/src=['"]([^'"]+\.js)['"]"]/)?.[1];
            if (!jsPath) continue;
            
            const jsContent = resolvePath(jsPath);
            
            if (jsContent) {
                htmlContent = htmlContent.replace(script, `<script>${jsContent}<\/script>`);
            } else {
                htmlContent = htmlContent.replace(script, `<!-- Archivo JS no encontrado: ${jsPath} -->`);
            }
        }

        // Insertar el script de manejo de errores al final del body
        const errorHandlerScript = `
            <script>
                window.addEventListener('error', function(e) {
                    window.parent.postMessage({
                        type: 'iframe-error',
                        message: e.message,
                        filename: e.filename,
                        lineno: e.lineno,
                        colno: e.colno,
                        error: e.error ? e.error.stack : null
                    }, '*');
                    return true;
                });
                
                window.addEventListener('unhandledrejection', function(e) {
                    window.parent.postMessage({
                        type: 'iframe-promise-error',
                        message: e.reason.message || String(e.reason),
                        stack: e.reason.stack
                    }, '*');
                });
                
                const originalConsole = {
                    log: console.log,
                    error: console.error,
                    warn: console.warn,
                    info: console.info
                };
                
                ['log', 'error', 'warn', 'info'].forEach(method => {
                    console[method] = function() {
                        originalConsole[method].apply(console, arguments);
                        window.parent.postMessage({
                            type: 'iframe-console',
                            method: method,
                            args: Array.from(arguments).map(arg => 
                                typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
                            )
                        }, '*');
                    };
                });
            <\/script>
        `;
        
        if (!htmlContent.includes('<\/body>')) {
            htmlContent += '<\/body>';
        }
        htmlContent = htmlContent.replace('<\/body>', errorHandlerScript + '<\/body>');
        
        // Update iframe - FORZAR ACTUALIZACIÓN
        const iframe = document.getElementById('preview-frame');
        iframe.srcdoc = ''; // Limpiar primero
        setTimeout(() => {
            iframe.srcdoc = htmlContent;
        }, 50);
    }
