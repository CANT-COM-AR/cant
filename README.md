# CANT – Sitio web institucional

Este repositorio contiene una **prueba funcional** del sitio de **CANT (Centro Argentino de Neurodesarrollo y Tecnologias)**.
El objetivo es validar la **arquitectura, mensajes y marco institucional** alineados al plan de posicionamiento (soporte, validacion, implementacion, formacion y soporte continuo).

> **Nota:** Este repo es de prueba. Los contenidos, enlaces y formularios se publican para validar estructura y UX; luego se reemplazaran por los definitivos.

---

## Que incluye esta prueba

- Maquetado **semantico** con `header`, `nav`, `main`, `section`, `footer`.
- Sitio **multipagina** con estructura institucional estable.
- **Menu responsive** (hamburguesa en mobile).
- Paginas tematicas: Inicio, Areas de accion, Como trabajamos, Etica y Datos, Formacion, Alianzas, Recursos, Contacto.
- Estilos integrados en `styles/index.css`, tipografias **Poppins** (titulos) y **Roboto** (cuerpo).
- Contacto con formulario y calendario informativo de formaciones.

---

## Estructura

```script
/ (raiz)
├─ index.html # Inicio
├─ /pages/ # Paginas tematicas
├─ /assets/ # Imagenes y docs publicos
├─ /styles/ # CSS del sitio
└─ /js/ # Integraciones futuras (opcional)
```

---

## Publicacion rapida (GitHub Pages)

1. **Hacer publico** el repositorio.
2. Ir a **Settings → Pages**.
3. En **Source**, elegir `Deploy from a branch`, branch `main`, carpeta `/root`.
4. Guardar. GitHub te dara una URL temporal (`https://<org>.github.io/<repo>`).
5. (Opcional) En **Custom domain**, ingresar `cant.com.ar` cuando el dominio este listo.

### DNS (cuando use dominio propio)
- Crear registros **A** (y/o **CNAME**) segun indique GitHub Pages en *Settings → Pages*.
- Configurarlos en **NIC.ar → Delegacion de dominio**.
- Esperar propagacion (1–24 h).

---

## Como editar contenido

- Abrir `index.html` y los archivos en `pages/`.
- Cambiar textos entre `<h2>`, `<h3>`, `<p>` y etiquetas de los botones `<a class="btn ...">`.
- Mantener las clases existentes para conservar el estilo.

---

## Conexiones (cuando se pase a real)

- **Agenda:** Reemplazar `href="contacto.html"` por el link de **Calendly**.
- **Formularios:** Reemplazar `<form action="#">` por endpoint de **Formspree / Netlify Forms**.
- **Analitica:** Insertar script de **Plausible** o configurar **GA4** (respetando privacidad).

---

## Mensaje institucional (visibilidad)

> Operamos **100% online** y **no brindamos atencion clinica directa**. Trabajamos con instituciones, profesionales y startups para **promover**, **validar**, **implementar**, **formar** y **dar soporte** en tecnologias para TND.

---

## Licencias y terceros

- No se incluyen tests licenciados (p. ej., ADOS/ADI-R).
- Cualquier integracion con materiales protegidos se realizara **solo** mediante licencias validas provistas por las instituciones/partners.

---

## Roadmap minimo

- [ ] Incorporar contenidos finales y validaciones institucionales.
- [ ] Definir PDFs publicos reales en Recursos.
- [ ] Conectar formulario y agenda.
- [ ] Ajustes finales de responsive y QA en mobile.
