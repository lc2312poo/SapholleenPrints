# 🖨️ Print3D Store — Sitio Web

Sitio web estático para tienda de impresiones 3D.
Hecho con HTML5, Bootstrap 5 y CSS personalizado.

---

## 📁 Estructura de carpetas

```
tienda-3d/
│
├── index.html                        ← Página principal (abre esta en el navegador)
│
├── assets/
│   ├── css/
│   │   └── style.css                 ← Estilos personalizados
│   │
│   ├── js/
│   │   └── main.js                   ← Scripts y animaciones
│   │
│   └── images/
│       ├── products/                 ← 📸 COLOCA AQUÍ tus fotos de productos
│       └── icons/                    ← Íconos o logotipos adicionales
│
└── views/                            ← Páginas adicionales (detalle, categorías, etc.)
```

---

## 🖼️ Cómo agregar imágenes a los productos

1. Copia tu imagen dentro de `assets/images/products/`
   - Ejemplo: `silla.jpg`, `macetero-verde.png`

2. Abre `index.html` en un editor de texto (VS Code recomendado)

3. Busca el producto que quieres actualizar y reemplaza el bloque `<div class="img-placeholder">` por:
   ```html
   <img src="assets/images/products/tu-imagen.jpg" alt="Nombre del producto" />
   ```

4. ¡Listo!

---

## ✏️ Cómo editar los productos

Dentro de `index.html` busca el comentario `<!-- ── Producto 1 ──` y edita:
- **Nombre** → etiqueta `<h3 class="product-name">`
- **Descripción** → etiqueta `<p class="product-desc">`
- **Precio** → etiqueta `<div class="product-price">`

Para **agregar más productos**, copia un bloque de producto completo y pégalo dentro del `<div class="row g-4">`.

---

## 📞 Cómo editar la sección de contacto

En `index.html`, busca la sección `<!-- CONTACTO -->` y actualiza:
- Teléfono / WhatsApp
- Correo electrónico
- Horarios
- Links de redes sociales

---

## 🌐 Cómo publicar gratis

Opciones gratuitas para subir el sitio:
- **GitHub Pages**: sube la carpeta a un repositorio y activa Pages
- **Netlify**: arrastra la carpeta a netlify.com/drop
- **Vercel**: conecta tu repositorio de GitHub

---

## 📐 Tamaño recomendado de imágenes

- Formato: `.jpg` o `.webp`
- Proporción: 4:3 (ej. 800 × 600 px)
- Peso máximo: 300 KB por imagen
