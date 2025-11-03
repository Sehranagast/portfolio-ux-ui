# Portfolio UX/UI — Giselle Fernandez

Este es un portfolio para mi pareja de **Diseño UX/UI**, desarrollado con **Vite + React** para lograr un sitio rápido, minimalista, totalmente responsivo y con un foco especial en **claridad, accesibilidad y performance**.

Incluye:
- Presentación profesional  
- Proyectos navegables embebidos desde Figma  
- Animaciones suaves y accesibles  
- Modo claro y modo oscuro (ambos con paleta tierra legible)  
- Diseño centrado y consistente en todas las pantallas  

---

## 🚀 Tecnologías utilizadas

- **Vite** — build ultra rápido  
- **React** — componentes reutilizables  
- **CSS puro** — sin frameworks, con variables personalizadas  
- **IntersectionObserver** — animaciones sutiles on-scroll  
- **Figma Embeds** — prototipos interactivos directamente en el sitio  
- **Light / Dark Mode** con CSS variables  
- **Diseño responsive** (mobile-first)

---

## 🎨 Diseño y decisiones visuales

### ✅ Paleta tierra cálida  
Pensada para transmitir calidez y profesionalismo.  
Funciona perfectamente en modo claro y modo oscuro.

### ✅ Layout centrado  
Todas las secciones están centradas al píxel con un `container` estable de 1200px.

### ✅ Rejilla consistente  
- Proyectos → **2 columnas (50/50)**  
- Servicios → **3 columnas**  
- Mobile → se apila automáticamente

### ✅ Animaciones accesibles  
- “Reveal on scroll” suave con `IntersectionObserver`  
- Respeto a `prefers-reduced-motion`

### ✅ Footer minimalista  
Sin fondo negro, sin ocupar media página, integrado al diseño.

---

## 📦 Instalación y ejecución

### 1. Clonar el repositorio
bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
2. Instalar dependencias
npm install
3. Ejecutar en desarrollo
npm run dev

4. Build para producción
npm run build
npm run preview

🌗 Light & Dark Mode

El sitio cambia entre modo claro y oscuro usando:

CSS variables (:root y [data-theme="dark"])

Persistencia con localStorage

Botón toggle en la navbar

Ambos modos mantienen:

Alto contraste

Colores tierra coherentes

Botones siempre legibles

🧩 Proyectos incluidos

Los prototipos interactivos se muestran directamente desde Figma:

Dashboard — UX/UI
Diseño de tablero funcional, navegación clara y uso de métricas visuales.

AdoptMe — Prototipo
Flujo de adopción con énfasis en interacción y usabilidad.

(Podés agregar más proyectos simplemente duplicando el componente FigmaEmbed.jsx.)

📱 Responsive

Totalmente adaptado para:

Desktop

Laptop

Tablet

Móvil

Gracias al uso de una rejilla controlada (row-2 / row-3) y un container flexible.

🔒 Accesibilidad

Colores con ratio correcto

Estados de foco visibles

Animaciones opcionales (reduced motion)

Elementos semánticos
