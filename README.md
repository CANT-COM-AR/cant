# CANT – Sitio web (prueba de maquetado)

Este repositorio contiene una **prueba funcional** del sitio de **CANT (Centro Argentino de Neurodesarrollo y Tecnologías)**.  
El objetivo es validar la **arquitectura, mensajes y embudos** alineados al plan de posicionamiento (soporte, validación, implementación, formación y soporte continuo).

> **Nota:** Este repo es de prueba. Los contenidos, enlaces y formularios se publican para validar estructura y UX; luego se reemplazarán por los definitivos.

---

## ✅ Qué incluye esta prueba

- Maquetado **semántico** con `header`, `nav`, `main`, `article`, `aside`, `footer`.
- **Home** con secciones: Hero, Pilares, Cómo trabajamos, Áreas de acción, Recursos (lead magnet).
- **CTAs** pensados para los embudos: *Agendar reunión*, *Solicitar marco de validación*, *Ver calendario*.
- Estilos integrados (modo oscuro suave), tipografías **Poppins** (títulos) y **Roboto** (cuerpo).
- Preparado para conectar **Calendly**, **Formspree/Netlify Forms** y **Plausible/GA4**.

---

## 🧱 Estructura

/ (raíz)  
├─ index.html # Página principal (mockup funcional)  
├─ /assets/ # Imágenes, íconos, docs públicos (vacío o mínimo en esta prueba)  
├─ /css/ # style.css si se separa el CSS (en esta prueba el CSS está inline)  
└─ /js/ # main.js si se agregan integraciones (opcional)  



> En esta prueba el CSS está embebido en `index.html` para simplificar. En producción se puede mover a `/css/style.css`.

---

## 🚀 Publicación rápida (GitHub Pages)

1. **Hacer público** el repositorio.
2. Ir a **Settings → Pages**.
3. En **Source**, elegir `Deploy from a branch`, branch `main`, carpeta `/root`.
4. Guardar. GitHub te dará una URL temporal (`https://<org>.github.io/<repo>`).
5. (Opcional) En **Custom domain**, ingresar `cant.com.ar` cuando el dominio esté listo.

### DNS (cuando use dominio propio)
- Crear registros **A** (y/o **CNAME**) según indique GitHub Pages en *Settings → Pages*.
- Configurarlos en **NIC.ar → Delegación de dominio**.
- Esperar propagación (1–24 h).

---

## ✏️ Cómo editar contenido

- Abrir `index.html` y buscar los marcadores de sección:
  - `<!-- HERO -->`, `<!-- PILARES -->`, `<!-- COMO TRABAJAMOS -->`, `<!-- AREAS DE ACCION -->`, `<!-- RECURSOS -->`.
- Cambiar textos entre `<h2>`, `<h3>`, `<p>` y etiquetas de los botones `<a class="btn ...">`.
- Mantener las clases existentes para conservar el estilo.

---

## 🔗 Conexiones (cuando se pase a real)

- **Agenda:** Reemplazar `href="#contacto"` por el link de **Calendly**.
- **Formularios:** Reemplazar `<form action="#">` por endpoint de **Formspree / Netlify Forms**.
- **Analítica:** Insertar script de **Plausible** o configurar **GA4** (respetando privacidad).

---

## 📌 Mensaje institucional (visibilidad)

> Operamos **100% online** y **no brindamos atención clínica directa**. Trabajamos con instituciones, profesionales y startups para **promover**, **validar**, **implementar**, **formar** y **dar soporte** en tecnologías para TND.

---

## ⚖️ Licencias y terceros

- No se incluyen tests licenciados (p. ej., ADOS/ADI-R).  
- Cualquier integración con materiales protegidos se realizará **solo** mediante licencias válidas provistas por las instituciones/partners.

---

## 🧩 Roadmap mínimo

- [ ] Integrar logo temporal de CANT.
- [ ] Conectar CTAs (Calendly/Formspree).
- [ ] Separar CSS a `/css/style.css`.
- [ ] Subir a GitHub Pages.
- [ ] Apuntar `cant.com.ar` desde NIC.ar.