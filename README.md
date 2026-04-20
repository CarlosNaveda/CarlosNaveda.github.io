# carlosnaveda.github.io

Mi sitio web personal — Ingeniero de sistemas, creador de contenido y fundador de [ToNextAxis](https://www.youtube.com/@ToNextAxis).

> *Aprendo, construyo... y voy descubriendo el camino mientras avanzo.*

---

## Website

[carlosnaveda.github.io](https://carlosnaveda.github.io)

---

## Stack

| Tecnología | Uso |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework principal |
| [React 19](https://react.dev/) | UI |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilos |
| [MDX](https://mdxjs.com/) | Contenido del blog |
| [Lucide React](https://lucide.dev/) | Iconos |
| [GitHub Pages](https://pages.github.com/) | Hosting (static export) |

---

## Estructura

```
carlosnaveda.github.io/
├── app/
│   ├── layout.tsx        # Layout global (fuentes, metadata)
│   ├── page.tsx          # Página principal (Hero, Sobre mí, etc.)
│   └── globals.css       # Estilos globales y variables de color
├── public/               # Assets estáticos (imágenes, favicon)
├── next.config.ts        # Configuración de Next.js (static export)
└── package.json
```

---

## Roadmap

- [x] Setup Next.js + Tailwind + GitHub Pages
- [x] Sección Hero
- [ ] Sección Sobre mí
- [ ] Sección Experiencia
- [ ] Sección ToNextAxis
- [ ] Sección Contacto
- [ ] Blog con MDX

---

## Cómo correrlo localmente

**Prerrequisitos:** Node.js 18+ y npm

```bash
# Clonar el repositorio
git clone https://github.com/CarlosNaveda/CarlosNaveda.github.io.git
cd CarlosNaveda.github.io

# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para producción

```bash
npm run build
```

Genera la carpeta `/out` con los archivos estáticos listos para GitHub Pages.

---

## Contacto

- YouTube: [@ToNextAxis](https://www.youtube.com/@ToNextAxis)
- GitHub: [@carlosnaveda](https://github.com/CarlosNaveda)
- Linkedin: [@carlosnavedam](https://www.linkedin.com/in/carlosnavedam/)
- Correo: navedacarlosm@gmail.com 