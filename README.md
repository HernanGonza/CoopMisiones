# CoopMisiones

Propuesta de Tacuara para el Ministerio de Cooperativismo de Misiones. Publicada en https://coopmisiones.tacuara.com.ar

## Desarrollo

```sh
npm install
npm run dev
```

## Scripts

- `npm run build`: chequeo de tipos y build de producción en `dist/`
- `npm run preview`: sirve el build localmente
- `npm run lint` / `npm run format`

## Despliegue en Vercel

`vercel.json` fija el framework Vite y la carpeta `dist`. El formulario de contacto (`api/contact.ts`) necesita la variable `RESEND_API_KEY` (opcionales: `CONTACT_TO`, `CONTACT_FROM`).

## Stack

Vite, React, TypeScript y Tailwind CSS.
