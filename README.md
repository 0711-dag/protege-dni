# Protege tu DNI 🛡️

Herramienta web para proteger tu DNI antes de enviarlo a terceros.

## ¿Qué hace?

- **Marca de agua** — Añade un texto visible sobre todo el documento indicando para qué se va a usar (ej: "Solo válido para contrato de alquiler").
- **Censura de datos** — Permite tapar zonas sensibles del documento (número de soporte, firma, foto…) con bloque negro, pixelado o difuminado.

## Privacidad

Todo el procesamiento se hace **en tu navegador**. Tu PDF nunca se sube a ningún servidor.

## Cómo usar

1. Abre la web
2. Sube tu PDF
3. Escribe el motivo del uso
4. (Opcional) Censura las zonas que quieras tapar
5. Descarga tu PDF protegido

## Tecnologías

- [pdf-lib](https://pdf-lib.js.org/) — para editar el PDF
- [PDF.js](https://mozilla.github.io/pdf.js/) — para previsualizar el PDF
