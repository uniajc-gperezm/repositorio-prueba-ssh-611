# Explicación del archivo index.html

Este documento describe y explica, en detalle, cada parte del archivo `index.html` provisto. Está pensado para repaso mientras aprendes HTML.

---

## Resumen general

El archivo es una página HTML5 que contiene metadatos para SEO y Open Graph, enlaces a recursos (CSS, favicon, script), contenido semántico (encabezados, secciones, artículos, aside), elementos multimedia (imagen), una tabla, detalles interactivos (`details`, `dialog`) y un formulario con distintos tipos de entrada.

---

## Estructura principal

- `<!DOCTYPE html>`: declara que el documento usa HTML5. Es obligatorio para que el navegador renderice correctamente en modo estándar.
- `<html lang="en">`: elemento raíz; el atributo `lang` indica el idioma principal (aquí inglés). Importante para accesibilidad y motores de búsqueda.
- `<head>`: contiene metadatos, título, enlaces a hojas de estilo y scripts.
- `<body>`: contiene todo el contenido visible y interactivo de la página.

---

## Explicación del `<head>`

- `<meta charset="UTF-8">`: define la codificación de caracteres (UTF-8), evita problemas con caracteres acentuados.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: hace la página responsive en dispositivos móviles.
- `<title>`: texto que aparece en la pestaña del navegador.
- `<meta name="description" content="...">`: descripción corta usada por motores de búsqueda en los resultados.

### Open Graph (para compartir en redes)

- `<meta property="og:title" ...>`: título al compartir.
- `<meta property="og:description" ...>`: descripción al compartir.
- `<meta property="og:image" ...>`: imagen que usan redes sociales al compartir.
- `<meta property="og:image:alt" ...>`: texto alternativo de la imagen para accesibilidad.

### SEO y enlaces importantes

- `<link rel="alternate" href="..." hreflang="es-CO" />`: indica una versión alternativa del sitio en otro idioma/región.
- `<link rel="canonical" href="..." />`: URL canónica para evitar contenido duplicado.
- `<meta name="robots" content="index, follow" />`: indica a los buscadores indexar y seguir enlaces.
- `<meta name="theme-color" content="#09f" />`: color del tema en navegadores móviles.
- `<link rel="icon" type="image/jpg" href="./images/manzana.jpg">`: favicon mostrado en la pestaña.

### Recursos vinculados

- `<link rel="stylesheet" href="css/style.css">`: hoja de estilos externa (nota: en el archivo original se referencia `css/style.css` pero la carpeta en el proyecto es `css/styles.css`; cuidado con nombres).
- `<script src="./js/main.js"></script>`: script externo. También existe un script inline con `console.log`.

---

## Contenido del `<body>` — estructura semántica y elementos

- `<h1 style="color: red">Mi Portafolio</h1>`: encabezado principal. Usa estilo inline (`style`) para color rojo.
- `<p id="description">`: párrafo con `id` para referencia desde CSS/JS; contiene una etiqueta `<em>` para texto en cursiva.

### Uso de `<p>` y `<span>`

- `<p>` es elemento de bloque para párrafos. Dentro se usan múltiples `<span>`, que son elementos en línea para agrupar texto y aplicar estilos.
- Nota: hay un `<p>` anidado dentro de otro `<p>` en el HTML original; eso no es válido semánticamente y los navegadores lo corregirán automáticamente (evita anidar párrafos).

### Listas ordenadas

- `<ol start="4" reversed>`: lista ordenada que comienza en 4 y está en orden descendente por el atributo `reversed`.
- `<li id="uno" class="list-item">`: elementos de lista con `id` y `class` para estilo/selección por JavaScript.

### Imágenes

- `<img id="imagen1" src="images/manzana.jpg" title="Photo-image" width="200" height="200" alt="Foto de Manzana">`:
  - `src`: ruta de la imagen.
  - `alt`: texto alternativo esencial para accesibilidad y SEO.
  - `width`/`height`: dimensiones (atributos HTML que también ayudan al layout al reservar espacio).
  - `title`: texto que aparece como tooltip en algunos navegadores.

### Aside y listado de tecnologías

- `<aside id="tech">` contiene un bloque lateral con un `header` y una lista (`<ol>`) de tecnologías. `aside` se usa para contenido relacionado pero no central.

### Section / Article

- `<section>` y `<article>` organizan el contenido por temas: cada `article` representa un proyecto con su `header`, `p` y `div` para tecnologías utilizadas.

### Separadores y saltos

- `<hr>`: separador horizontal.
- `<br>`: salto de línea (no abusar; usar CSS para separación cuando sea posible).

---

## Tabla HTML

- La tabla contiene `<thead>` y `<tbody>`. Se usan atributos `colspan` y `rowspan` para combinar celdas:
  - `colspan="2"`: combina 2 columnas horizontalmente.
  - `rowspan="2"`: combina 2 filas verticalmente.

Usar `style="border-collapse: collapse;"` para colapsar los bordes y el atributo `border="1"` para mostrar bordes (mejor aplicar en CSS).

---

## Elementos interactivos nativos

- `<details>` / `<summary>`: control nativo para mostrar/ocultar contenido (útil para FAQs).
- `<dialog id="dialog">`: elemento nativo para modales. El script asociado muestra y cierra el diálogo mediante `showModal()` y `close()`.

### Script asociado al diálogo

```html
<script>
  window.show.addEventListener('click', () => {
    window.dialog.showModal();
  });
  window.hide.addEventListener('click', () => {
    window.dialog.close();
  });
</script>
```

- Aquí se usan referencias globales `window.show` y `window.dialog`. Funciona porque los elementos tienen `id="show"` y `id="dialog"`, y los navegadores exponen elementos por `id` en el objeto global (aunque no es la mejor práctica: es preferible usar `document.getElementById`).

---

## Formulario de contacto

El formulario usa `<form method="post" action="/">` y varios `fieldset` con `legend` para agrupar la información.

Elementos relevantes:

- `<input type="text" id="name" placeholder="Digita tu nombre" required>`: campo de texto con `required`.
- `<input type="email" placeholder="email@gmail.com" required>`: validación de correo por el navegador.
- `<input type="tel" pattern="[0-9]{9}" required>`: campo de teléfono con `pattern` que exige exactamente 9 dígitos (ajustar según formato deseado).
- `<select name="why" id="why">` con `<option>`: lista desplegable.
- `<input type="checkbox" name="terms" id="terms" required>`: checkbox requerido para aceptar términos.
- `<datalist id="languages">` con `<input list="languages">`: ofrece sugerencias libres en un campo de texto.
- `<button>` (sin `type`) actúa por defecto como `type="submit"` en la mayoría de los navegadores.

Buenas prácticas en formularios:

- Añadir `name` a todos los inputs que deben enviarse al servidor.
- Evitar duplicar `id` (en el HTML original varios inputs usan `id="name"` repetido; cada `id` debe ser único).
- Validaciones adicionales deben implementarse en el servidor (nunca confiar solo en la validación del cliente).

---

## Footer y enlaces especiales

- En el `footer` hay enlaces `mailto:`, `tel:` y un esquema `whatsapp://send?text=...` para compartir por WhatsApp. Estos esquemas permiten acciones desde dispositivos compatibles.

---

## Observaciones, errores y sugerencias de mejora

- Evitar anidar `<p>` dentro de otro `<p>`; en su lugar usar `<div>` o separar párrafos.
- Revisar nombres de archivos CSS (el archivo HTML enlaza `css/style.css` pero en el repositorio aparece `css/styles.css`). Asegurarse de que la ruta y nombre coincidan.
- No repetir `id` (`id="name"` se usa en múltiples inputs). `id` debe ser único.
- Evitar depender de la exposición global de elementos por `id` (usar `document.getElementById` o `querySelector`).
- Mover scripts al final del `body` (como ya está) o usar `defer` en el `<head>` para mejorar rendimiento.
- Preferir estilos en archivos CSS en lugar de `style` inline.

---

## Conceptos clave para repasar

- Semántica HTML: entender cuándo usar `section`, `article`, `aside`, `header`, `footer`.
- Atributos globales: `id`, `class`, `title`, `hidden`, `lang`, `data-*`.
- Formularios y tipos de input: `email`, `tel`, `checkbox`, `select`, `datalist`, validación.
- Multimedia: `<img>`, atributos `alt`, `width`, `height`, `poster` para video.
- Accesibilidad: texto alternativo, relaciones `label` ↔ `input` (usar `for` y `id`), evitar elementos no navegables.

---

## Cómo practicar con este archivo

1. Abrir el archivo en el navegador y usar las herramientas de desarrollador (Inspector).
2. Corregir los `id` duplicados y probar el formulario.
3. Probar compartir la página en redes: verificar las metaetiquetas Open Graph.
4. Convertir `console.log` inline a un archivo JS y usar `document.getElementById` para manipular elementos.

---

Si quieres, puedo:

- Corregir automáticamente los `id` duplicados y la ruta del CSS en el proyecto.
- Añadir comentarios inline en el `index.html` explicando cada segmento (versión anotada del propio HTML).

Archivo generado: [index_explanation.md](index_explanation.md)
