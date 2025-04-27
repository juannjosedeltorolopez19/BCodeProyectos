const language = 'html'; 
monaco.languages.registerCompletionItemProvider(language, {
    provideCompletionItems: function (model, position) {
        const wordInfo = model.getWordUntilPosition(position);
        const range = new monaco.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);

        const keywords = [
                        {
                "label": "html5",
                "documentation": "Crear estructura básica de HTML5",
                "insertText": "<!DOCTYPE html>\n<html lang=\"${1:es}\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>${2:Título de la página}</title>\n</head>\n<body>\n  ${3:Contenido}\n</body>\n</html>",
                "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },

                {
                    "label": "div",
                    "documentation": "Crear un elemento div",
                    "insertText": "<div>${1:content}</div>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "span",
                    "documentation": "Crear un elemento span",
                    "insertText": "<span>${1:content}</span>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "p",
                    "documentation": "Crear un párrafo",
                    "insertText": "<p>${1:text}</p>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "a",
                    "documentation": "Crear un enlace",
                    "insertText": "<a href=\"${1:#}\">${2:text}</a>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "img",
                    "documentation": "Insertar una imagen",
                    "insertText": "<img src=\"${1:source}\" alt=\"${2:description}\"/>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "ul",
                    "documentation": "Lista desordenada",
                    "insertText": "<ul>\n\t<li>${1:item1}</li>\n\t<li>${2:item2}</li>\n</ul>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "ol",
                    "documentation": "Lista ordenada",
                    "insertText": "<ol>\n\t<li>${1:item1}</li>\n\t<li>${2:item2}</li>\n</ol>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "table",
                    "documentation": "Crear una tabla",
                    "insertText": "<table>\n\t<tr>\n\t\t<th>${1:Header1}</th>\n\t\t<th>${2:Header2}</th>\n\t</tr>\n\t<tr>\n\t\t<td>${3:Data1}</td>\n\t\t<td>${4:Data2}</td>\n\t</tr>\n</table>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "form",
                    "documentation": "Formulario",
                    "insertText": "<form action=\"${1:action}\" method=\"${2:get/post}\">\n\t${3:content}\n</form>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input",
                    "documentation": "Elemento input",
                    "insertText": "<input type=\"${1:text}\" name=\"${2:name}\" />",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "button",
                    "documentation": "Elemento botón",
                    "insertText": "<button type=\"${1:button}\">${2:Click me}</button>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "meta",
                    "documentation": "Meta etiqueta",
                    "insertText": "<meta charset=\"${1:UTF-8}\"/>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "link",
                    "documentation": "Enlace a stylesheet",
                    "insertText": "<link rel=\"stylesheet\" href=\"${1:styles.css}\" />",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "h1",
                    "documentation": "Encabezado nivel 1",
                    "insertText": "<h1>${1:Heading}</h1>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "h2",
                    "documentation": "Encabezado nivel 2",
                    "insertText": "<h2>${1:Heading}</h2>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "h3",
                    "documentation": "Encabezado nivel 3",
                    "insertText": "<h3>${1:Heading}</h3>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "h4",
                    "documentation": "Encabezado nivel 4",
                    "insertText": "<h4>${1:Heading}</h4>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "h5",
                    "documentation": "Encabezado nivel 5",
                    "insertText": "<h5>${1:Heading}</h5>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "h6",
                    "documentation": "Encabezado nivel 6",
                    "insertText": "<h6>${1:Heading}</h6>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "strong",
                    "documentation": "Texto en negrita",
                    "insertText": "<strong>${1:text}</strong>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "em",
                    "documentation": "Texto en énfasis (cursiva)",
                    "insertText": "<em>${1:text}</em>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "mark",
                    "documentation": "Texto resaltado",
                    "insertText": "<mark>${1:text}</mark>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "small",
                    "documentation": "Texto pequeño",
                    "insertText": "<small>${1:text}</small>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "del",
                    "documentation": "Texto eliminado",
                    "insertText": "<del>${1:text}</del>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "ins",
                    "documentation": "Texto insertado",
                    "insertText": "<ins>${1:text}</ins>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "sub",
                    "documentation": "Subíndice",
                    "insertText": "<sub>${1:text}</sub>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "sup",
                    "documentation": "Superíndice",
                    "insertText": "<sup>${1:text}</sup>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "code",
                    "documentation": "Código de computadora",
                    "insertText": "<code>${1:code}</code>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "pre",
                    "documentation": "Texto preformateado",
                    "insertText": "<pre>${1:code}</pre>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "blockquote",
                    "documentation": "Cita larga",
                    "insertText": "<blockquote cite=\"${1:source}\">\n\t${2:quote}\n</blockquote>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "q",
                    "documentation": "Cita corta",
                    "insertText": "<q cite=\"${1:source}\">${2:quote}</q>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "abbr",
                    "documentation": "Abreviatura",
                    "insertText": "<abbr title=\"${1:full}\">${2:abbr}</abbr>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "address",
                    "documentation": "Información de contacto",
                    "insertText": "<address>\n\t${1:contact info}\n</address>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "cite",
                    "documentation": "Título de un trabajo",
                    "insertText": "<cite>${1:title}</cite>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "bdo",
                    "documentation": "Dirección del texto",
                    "insertText": "<bdo dir=\"${1:rtl}\">${2:text}</bdo>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "kbd",
                    "documentation": "Entrada de teclado",
                    "insertText": "<kbd>${1:key}</kbd>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "samp",
                    "documentation": "Salida de muestra",
                    "insertText": "<samp>${1:sample}</samp>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "var",
                    "documentation": "Variable",
                    "insertText": "<var>${1:variable}</var>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "time",
                    "documentation": "Fecha/Hora",
                    "insertText": "<time datetime=\"${1:YYYY-MM-DD}\">${2:date}</time>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "a",
                    "documentation": "Enlace",
                    "insertText": "<a href=\"${1:url}\" target=\"${2:_blank}\" rel=\"${3:noopener}\">${4:text}</a>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "img",
                    "documentation": "Imagen",
                    "insertText": "<img src=\"${1:source}\" alt=\"${2:description}\" width=\"${3}\" height=\"${4}\"/>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "picture",
                    "documentation": "Imagen adaptable",
                    "insertText": "<picture>\n\t<source media=\"(min-width: ${1:650px})\" srcset=\"${2:large.jpg}\">\n\t<source media=\"(min-width: ${3:465px})\" srcset=\"${4:medium.jpg}\">\n\t<img src=\"${5:small.jpg}\" alt=\"${6:description}\">\n</picture>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "figure",
                    "documentation": "Figura con leyenda",
                    "insertText": "<figure>\n\t<img src=\"${1:image.jpg}\" alt=\"${2:description}\">\n\t<figcaption>${3:caption}</figcaption>\n</figure>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "audio",
                    "documentation": "Audio",
                    "insertText": "<audio controls>\n\t<source src=\"${1:audio.mp3}\" type=\"audio/mpeg\">\n\t${2:Your browser does not support the audio element.}\n</audio>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "video",
                    "documentation": "Video",
                    "insertText": "<video width=\"${1:320}\" height=\"${2:240}\" controls>\n\t<source src=\"${3:movie.mp4}\" type=\"video/mp4\">\n\t${4:Your browser does not support the video tag.}\n</video>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "source",
                    "documentation": "Fuente multimedia",
                    "insertText": "<source src=\"${1:file}\" type=\"${2:mime/type}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "track",
                    "documentation": "Pista de texto",
                    "insertText": "<track src=\"${1:subtitles.vtt}\" kind=\"${2:subtitles}\" srclang=\"${3:en}\" label=\"${4:English}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "map",
                    "documentation": "Mapa de imagen",
                    "insertText": "<map name=\"${1:mapname}\">\n\t<area shape=\"${2:rect}\" coords=\"${3:x1,y1,x2,y2}\" href=\"${4:link.html}\" alt=\"${5:description}\">\n</map>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "area",
                    "documentation": "Área en mapa de imagen",
                    "insertText": "<area shape=\"${1:rect}\" coords=\"${2:x1,y1,x2,y2}\" href=\"${3:link.html}\" alt=\"${4:description}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },

                // Listas
                {
                    "label": "ul",
                    "documentation": "Lista desordenada",
                    "insertText": "<ul>\n\t<li>${1:item1}</li>\n\t<li>${2:item2}</li>\n</ul>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "ol",
                    "documentation": "Lista ordenada",
                    "insertText": "<ol>\n\t<li>${1:item1}</li>\n\t<li>${2:item2}</li>\n</ol>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "li",
                    "documentation": "Elemento de lista",
                    "insertText": "<li>${1:item}</li>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "dl",
                    "documentation": "Lista de definición",
                    "insertText": "<dl>\n\t<dt>${1:term}</dt>\n\t<dd>${2:definition}</dd>\n</dl>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "dt",
                    "documentation": "Término en lista de definición",
                    "insertText": "<dt>${1:term}</dt>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "dd",
                    "documentation": "Definición en lista de definición",
                    "insertText": "<dd>${1:definition}</dd>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },

                // Tablas
                {
                    "label": "table",
                    "documentation": "Tabla",
                    "insertText": "<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th>${1:Header1}</th>\n\t\t\t<th>${2:Header2}</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>${3:Data1}</td>\n\t\t\t<td>${4:Data2}</td>\n\t\t</tr>\n\t</tbody>\n</table>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "caption",
                    "documentation": "Leyenda de tabla",
                    "insertText": "<caption>${1:table title}</caption>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "th",
                    "documentation": "Celda de encabezado",
                    "insertText": "<th scope=\"${1:col/row}\">${2:header}</th>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "tr",
                    "documentation": "Fila de tabla",
                    "insertText": "<tr>\n\t<td>${1:data}</td>\n</tr>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "td",
                    "documentation": "Celda de datos",
                    "insertText": "<td>${1:data}</td>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "thead",
                    "documentation": "Encabezado de tabla",
                    "insertText": "<thead>\n\t<tr>\n\t\t<th>${1:header}</th>\n\t</tr>\n</thead>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "tbody",
                    "documentation": "Cuerpo de tabla",
                    "insertText": "<tbody>\n\t<tr>\n\t\t<td>${1:data}</td>\n\t</tr>\n</tbody>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "tfoot",
                    "documentation": "Pie de tabla",
                    "insertText": "<tfoot>\n\t<tr>\n\t\t<td>${1:footer}</td>\n\t</tr>\n</tfoot>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "colgroup",
                    "documentation": "Grupo de columnas",
                    "insertText": "<colgroup>\n\t<col span=\"${1:2}\" style=\"background-color:${2:red}\">\n</colgroup>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "col",
                    "documentation": "Columna",
                    "insertText": "<col span=\"${1:1}\" style=\"background-color:${2:red}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },

                // Formularios avanzados
                {
                    "label": "form",
                    "documentation": "Formulario avanzado",
                    "insertText": "<form action=\"${1:script.php}\" method=\"${2:post}\" enctype=\"${3:multipart/form-data}\">\n\t${4:inputs}\n</form>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input",
                    "documentation": "Campo de entrada",
                    "insertText": "<input type=\"${1:text}\" name=\"${2:name}\" id=\"${3:id}\" placeholder=\"${4:placeholder}\" value=\"${5:value}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "textarea",
                    "documentation": "Área de texto",
                    "insertText": "<textarea name=\"${1:name}\" id=\"${2:id}\" rows=\"${3:4}\" cols=\"${4:50}\" placeholder=\"${5:placeholder}\">${6:text}</textarea>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "select",
                    "documentation": "Lista desplegable",
                    "insertText": "<select name=\"${1:name}\" id=\"${2:id}\">\n\t<option value=\"${3:value1}\">${4:Option 1}</option>\n\t<option value=\"${5:value2}\">${6:Option 2}</option>\n</select>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "optgroup",
                    "documentation": "Grupo de opciones",
                    "insertText": "<optgroup label=\"${1:Group}\">\n\t<option value=\"${2:value1}\">${3:Option 1}</option>\n</optgroup>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "option",
                    "documentation": "Opción en lista",
                    "insertText": "<option value=\"${1:value}\">${2:Text}</option>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "label",
                    "documentation": "Etiqueta para control de formulario",
                    "insertText": "<label for=\"${1:id}\">${2:Label text}</label>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "fieldset",
                    "documentation": "Grupo de controles de formulario",
                    "insertText": "<fieldset>\n\t<legend>${1:Title}</legend>\n\t${2:inputs}\n</fieldset>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "legend",
                    "documentation": "Título para fieldset",
                    "insertText": "<legend>${1:Title}</legend>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "datalist",
                    "documentation": "Lista de opciones para input",
                    "insertText": "<datalist id=\"${1:list}\">\n\t<option value=\"${2:Option1}\">\n\t<option value=\"${3:Option2}\">\n</datalist>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "output",
                    "documentation": "Resultado de cálculo",
                    "insertText": "<output name=\"${1:result}\" for=\"${2:input1 input2}\">${3:0}</output>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "meter",
                    "documentation": "Medidor escalar",
                    "insertText": "<meter value=\"${1:0.6}\" min=\"${2:0}\" max=\"${3:1}\">60%</meter>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "progress",
                    "documentation": "Barra de progreso",
                    "insertText": "<progress value=\"${1:70}\" max=\"${2:100}\">70%</progress>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },

                // Contenido interactivo
                {
                    "label": "details",
                    "documentation": "Widget de detalles/desplegable",
                    "insertText": "<details>\n\t<summary>${1:Summary}</summary>\n\t${2:Content}\n</details>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "summary",
                    "documentation": "Resumen para details",
                    "insertText": "<summary>${1:Summary}</summary>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "dialog",
                    "documentation": "Cuadro de diálogo",
                    "insertText": "<dialog open>\n\t${1:Dialog content}\n</dialog>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "menu",
                    "documentation": "Menú de comandos",
                    "insertText": "<menu>\n\t<li><button>${1:Command}</button></li>\n</menu>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "menuitem",
                    "documentation": "Elemento de menú",
                    "insertText": "<menuitem label=\"${1:Command}\" icon=\"${2:icon.png}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },

                // Metadatos
                {
                    "label": "head",
                    "documentation": "Contenedor de metadatos",
                    "insertText": "<head>\n\t${1:metadata}\n</head>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "title",
                    "documentation": "Título del documento",
                    "insertText": "<title>${1:Page Title}</title>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "base",
                    "documentation": "URL base",
                    "insertText": "<base href=\"${1:https://example.com/}\" target=\"${2:_blank}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "link",
                    "documentation": "Relación con recurso externo",
                    "insertText": "<link rel=\"${1:stylesheet}\" href=\"${2:style.css}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "meta",
                    "documentation": "Metadatos",
                    "insertText": "<meta name=\"${1:description}\" content=\"${2:content}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "style",
                    "documentation": "Estilos CSS",
                    "insertText": "<style>\n\t${1:css rules}\n</style>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "script",
                    "documentation": "Script JavaScript",
                    "insertText": "<script>\n\t${1:code}\n<\/script>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "noscript",
                    "documentation": "Contenido alternativo sin scripts",
                    "insertText": "<noscript>\n\t${1:Your browser does not support JavaScript!}\n</noscript>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "template",
                    "documentation": "Plantilla HTML",
                    "insertText": "<template>\n\t${1:content}\n</template>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },

                // Secciones
                {
                    "label": "div",
                    "documentation": "División/Contenedor",
                    "insertText": "<div>\n\t${1:content}\n</div>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "span",
                    "documentation": "Contenedor en línea",
                    "insertText": "<span>${1:content}</span>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "header",
                    "documentation": "Encabezado de sección",
                    "insertText": "<header>\n\t${1:content}\n</header>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "footer",
                    "documentation": "Pie de sección",
                    "insertText": "<footer>\n\t${1:content}\n</footer>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "main",
                    "documentation": "Contenido principal",
                    "insertText": "<main>\n\t${1:content}\n</main>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "section",
                    "documentation": "Sección genérica",
                    "insertText": "<section>\n\t${1:content}\n</section>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "article",
                    "documentation": "Contenido independiente",
                    "insertText": "<article>\n\t${1:content}\n</article>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "aside",
                    "documentation": "Contenido relacionado",
                    "insertText": "<aside>\n\t${1:content}\n</aside>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "nav",
                    "documentation": "Navegación",
                    "insertText": "<nav>\n\t${1:links}\n</nav>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },

                // Elementos incrustados
                {
                    "label": "iframe",
                    "documentation": "Marco incrustado",
                    "insertText": "<iframe src=\"${1:url}\" width=\"${2:300}\" height=\"${3:200}\" title=\"${4:description}\" allow=\"${5:permissions}\"></iframe>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "embed",
                    "documentation": "Contenido externo incrustado",
                    "insertText": "<embed src=\"${1:file}\" type=\"${2:mime/type}\" width=\"${3:300}\" height=\"${4:200}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "object",
                    "documentation": "Objeto incrustado",
                    "insertText": "<object data=\"${1:file}\" type=\"${2:mime/type}\" width=\"${3:300}\" height=\"${4:200}\"></object>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "param",
                    "documentation": "Parámetro para object",
                    "insertText": "<param name=\"${1:name}\" value=\"${2:value}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },

                // SVG y MathML
                {
                    "label": "svg",
                    "documentation": "Gráficos vectoriales",
                    "insertText": "<svg width=\"${1:100}\" height=\"${2:100}\">\n\t<circle cx=\"${3:50}\" cy=\"${4:50}\" r=\"${5:40}\" stroke=\"${6:black}\" stroke-width=\"${7:3}\" fill=\"${8:red}\" />\n</svg>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "math",
                    "documentation": "Notación matemática",
                    "insertText": "<math>\n\t${1:math content}\n</math>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },

                // Scripting
                {
                    "label": "canvas",
                    "documentation": "Gráficos con JavaScript",
                    "insertText": "<canvas id=\"${1:myCanvas}\" width=\"${2:200}\" height=\"${3:100}\"></canvas>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },

                // Tipos de input específicos
                {
                    "label": "input-text",
                    "documentation": "Campo de texto",
                    "insertText": "<input type=\"text\" name=\"${1:name}\" id=\"${2:id}\" placeholder=\"${3:placeholder}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-password",
                    "documentation": "Campo de contraseña",
                    "insertText": "<input type=\"password\" name=\"${1:name}\" id=\"${2:id}\" placeholder=\"${3:placeholder}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-email",
                    "documentation": "Campo de email",
                    "insertText": "<input type=\"email\" name=\"${1:name}\" id=\"${2:id}\" placeholder=\"${3:email@example.com}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-number",
                    "documentation": "Campo numérico",
                    "insertText": "<input type=\"number\" name=\"${1:name}\" id=\"${2:id}\" min=\"${3:1}\" max=\"${4:10}\" step=\"${5:1}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-date",
                    "documentation": "Selector de fecha",
                    "insertText": "<input type=\"date\" name=\"${1:name}\" id=\"${2:id}\" min=\"${3:2020-01-01}\" max=\"${4:2025-12-31}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-checkbox",
                    "documentation": "Casilla de verificación",
                    "insertText": "<input type=\"checkbox\" name=\"${1:name}\" id=\"${2:id}\" value=\"${3:value}\" checked>",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-radio",
                    "documentation": "Botón de opción",
                    "insertText": "<input type=\"radio\" name=\"${1:group}\" id=\"${2:id}\" value=\"${3:value}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-file",
                    "documentation": "Selector de archivos",
                    "insertText": "<input type=\"file\" name=\"${1:name}\" id=\"${2:id}\" accept=\"${3:.jpg,.png}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-submit",
                    "documentation": "Botón de envío",
                    "insertText": "<input type=\"submit\" value=\"${1:Submit}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-reset",
                    "documentation": "Botón de reinicio",
                    "insertText": "<input type=\"reset\" value=\"${1:Reset}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-button",
                    "documentation": "Botón genérico",
                    "insertText": "<input type=\"button\" value=\"${1:Click Me}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-color",
                    "documentation": "Selector de color",
                    "insertText": "<input type=\"color\" name=\"${1:name}\" id=\"${2:id}\" value=\"${3:#ff0000}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-range",
                    "documentation": "Control deslizante",
                    "insertText": "<input type=\"range\" name=\"${1:name}\" id=\"${2:id}\" min=\"${3:0}\" max=\"${4:100}\" value=\"${5:50}\" step=\"${6:1}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-search",
                    "documentation": "Campo de búsqueda",
                    "insertText": "<input type=\"search\" name=\"${1:name}\" id=\"${2:id}\" placeholder=\"${3:Search...}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-tel",
                    "documentation": "Campo de teléfono",
                    "insertText": "<input type=\"tel\" name=\"${1:name}\" id=\"${2:id}\" pattern=\"${3:[0-9]{3}-[0-9]{3}-[0-9]{4}}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-url",
                    "documentation": "Campo de URL",
                    "insertText": "<input type=\"url\" name=\"${1:name}\" id=\"${2:id}\" placeholder=\"${3:https://example.com}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-time",
                    "documentation": "Selector de hora",
                    "insertText": "<input type=\"time\" name=\"${1:name}\" id=\"${2:id}\" min=\"${3:09:00}\" max=\"${4:18:00}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-datetime-local",
                    "documentation": "Selector de fecha y hora local",
                    "insertText": "<input type=\"datetime-local\" name=\"${1:name}\" id=\"${2:id}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-month",
                    "documentation": "Selector de mes",
                    "insertText": "<input type=\"month\" name=\"${1:name}\" id=\"${2:id}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    "label": "input-week",
                    "documentation": "Selector de semana",
                    "insertText": "<input type=\"week\" name=\"${1:name}\" id=\"${2:id}\">",
                    "insertTextRules": monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                }
                ];

        return {
            suggestions: keywords.map(keyword => ({
                label: keyword.label,
                kind: monaco.languages.CompletionItemKind.Snippet,
                documentation: keyword.documentation,
                insertText: keyword.insertText,
                insertTextRules: keyword.insertTextRules,
                range: range
            }))
        };
    }
});
