# Kokoro

Un proyecto de fitness y bienestar desarrollado con diseño minimalista japonés en blanco y negro.

## Acerca de Kokoro

Kokoro es una aplicación web para un centro de fitness y bienestar que se enfoca en transformar vidas a través del movimiento y el bienestar. El proyecto presenta un diseño minimalista japonés con una paleta de colores en blanco y negro, animaciones suaves y una experiencia de usuario centrada en la tranquilidad y la funcionalidad.

### Características principales

- **Diseño minimalista japonés**: Inspirado en los principios del diseño japonés con espacios en blanco, tipografía limpia y elementos visuales simples
- **Paleta monocromática**: Utiliza exclusivamente colores blanco y negro para crear una experiencia visual serena
- **Animaciones suaves**: Transiciones y animaciones fluidas que mejoran la experiencia del usuario sin ser intrusivas
- **Responsive**: Diseño completamente adaptable a todos los dispositivos
- **Traducido al español latino**: Todo el contenido está en español latinoamericano

### Tecnologías utilizadas

- [Next.js](https://nextjs.org) - Framework de React
- [Tailwind CSS](https://tailwindcss.com) - Framework de CSS
- [TypeScript](https://www.typescriptlang.org) - Tipado estático

## Comenzando

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente mientras editas el archivo.

## Estructura del proyecto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── Programs.tsx
    ├── Team.tsx
    ├── Schedule.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Aprende más

Para aprender más sobre Next.js, consulta los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

## Despliegue en Vercel

La forma más fácil de desplegar tu aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.