# Proyecto Next.js con Autenticación y Estilos

Este proyecto es una aplicación construida con Next.js que incluye un sistema de autenticación con formularios de inicio de sesión y una estructura organizada de componentes y estilos. Se han aplicado principios de accesibilidad, semántica HTML y buenas prácticas de SEO.

## 📂 Estructura del Proyecto

```
/public
/src
  ├── app
  │   ├── auth
  │   ├── library
  │   ├── layout
  │   ├── layout.tsx
  │   ├── page.tsx
  │
  ├── components
  │   ├── auth
  │   ├── layout
  │   ├── library
  │   ├── ui
  │
  ├── styles
  │   ├── global.css
  |   ├── login.module.css|
  ├── .gitignore
  ├── eslint.config.mjs
  ├── global.d.ts
  ├── next-env.d.ts
  ├── next.config.ts
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.mjs
  ├── README.md
  ├── tailwind.config.js
  ├── tsconfig.json
```

## 🚀 Instalación de Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```sh
npm install
```

## 🛠️ Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web.
- **TypeScript**: Tipado estático para mejorar la seguridad del código.
- **Tailwind CSS**: Framework de estilos para una rápida maquetación.
- **React Icons**: Biblioteca de íconos para mejorar la interfaz de usuario.

### 🔍 Accesibilidad y SEO

- **Atributos ARIA**: Se han implementado `aria-label` en los formularios y botones.
- **Semántica HTML**: Se usaron etiquetas adecuadas como `<form>`, `<label>`, `<button>`.
- **SEO**: Uso de etiquetas semánticas para mejorar la indexación en motores de búsqueda.

### 🎨 CSS: Especificidad y Jerarquía

- Se han aplicado estilos con Tailwind CSS asegurando modularidad y reutilización.
- Se respeta la jerarquía de estilos para evitar conflictos.
- Se ha configurado `postcss.config.mjs` y `tailwind.config.js` para manejar los estilos.

## 🏃‍♂️ Ejecución del Proyecto

Para iniciar el servidor en modo desarrollo, usa:

```sh
npm run dev
```

Esto iniciará la aplicación en `http://localhost:3000`.

## 📝 Notas

Si encuentras errores con los estilos CSS o el uso de hooks como `useState`, asegúrate de que los archivos React que los usan estén marcados como `"use client"` al inicio del archivo.

```tsx
"use client";
import { useState } from "react";
```

