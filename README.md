# Plataforma de ventas — Control de Asistencia

Página comercial para vender el servicio de [CONTROL-DE-ASISTENCIA](https://github.com/TheKazutoPe/CONTROL-DE-ASISTENCIA).
Sin build step: HTML + JavaScript. Se despliega igual que el producto (Vercel, carpeta estática).

## Qué editar

Todo vive en `ventas.config.js`:

- `whatsapp` y `correo`: a dónde llegan los contactos (**reemplaza el número de ejemplo**).
- `demoUrl`: enlace a tu demo en vivo (vacío = se oculta el botón).
- `color`, `producto`, `lema`: marca de la página.
- `planes`: nombre, precio, periodo e inclusiones. Los precios actuales son **de ejemplo**.
  `precio: null` muestra "Cotizar".

El formulario de contacto arma un mensaje y abre WhatsApp; no guarda datos en ningún servidor.

## Probar en local

```bash
python -m http.server 8080
```

y abre http://localhost:8080.
