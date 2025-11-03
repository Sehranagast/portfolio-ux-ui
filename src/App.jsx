import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import FigmaEmbed from "./components/FigmaEmbed";
import useReveal from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />

      {/* HERO centrado al píxel */}
      <header id="home" className="hero">
        <div className="container">
          <div className="card hero-inner hero-pop" style={{ padding: 32 }}>
            <h1>Diseño UX/UI</h1>
            <p style={{ maxWidth: 760, margin: "0 auto" }}>
              Interfaces claras con foco en negocio. Portfolio minimalista con animaciones sutiles y excelente legibilidad.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a className="btn solid" href="#proyectos">Ver proyectos</a>
              <a className="btn outline" href="#contacto">Contacto</a>
            </div>
          </div>
        </div>
      </header>

      {/* PROYECTOS — dos columnas 50/50 */}
      <Section id="proyectos" title="Proyectos" subtitle="Dos ejemplos navegables, embebidos.">
        <div className="row row-2">
          <FigmaEmbed
            title="Dashboard — diseño UX/UI"
            url="https://www.figma.com/design/7kFwuFOJPoWTMYMUNps12d/Dashboard-dise%C3%B1o-UX-UI?node-id=1-2&t=mUe0g4tyILxqsWyq-0"
          />
          <FigmaEmbed
            title="AdoptMe — prototipo interactivo"
            url="https://www.figma.com/proto/4R8u9aVRkCxWppnAkuRA48/AdoptMe-UX-UI?page-id=187%3A2044&node-id=191-3412&node-type=frame&viewport=1381%2C137%2C0.51&t=U3I3N4KE6tfogDwo-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=268%3A6231"
          />
        </div>
      </Section>

      {/* SERVICIOS — horizontal (3) */}
      <Section id="servicios" title="Servicios" subtitle="Paquetes simples y transparentes.">
        <div className="row row-3">
          <div className="card">
            <h3>UX Sprint</h3>
            <p>Research rápido, mapa de oportunidades y prototipo navegable.</p>
          </div>
          <div className="card">
            <h3>UI Kit + Design System</h3>
            <p>Componentes consistentes, tokens y guías para escalar el producto.</p>
          </div>
          <div className="card">
            <h3>Auditoría de usabilidad</h3>
            <p>Heurísticas, métricas y plan de mejoras priorizadas.</p>
          </div>
        </div>
      </Section>

      {/* SOBRE MÍ */}
      <Section id="sobre-mi" title="Sobre mí" subtitle="2 años en atención al cliente; foco actual en UX/UI.">
        <div className="row">
          <div className="card" style={{ maxWidth: 820, marginInline: "auto" }}>
            <p>Me especializo en claridad, accesibilidad y micro-interacciones. Itero con hipótesis, datos y tests rápidos.</p>
          </div>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contacto" title="Contacto" subtitle="¿Charlamos sobre tu proyecto?">
        <div className="row">
          <form className="card" name="contact" style={{ maxWidth: 520, marginInline: "auto", width: "100%", display: "grid", gap: 12 }}>
            <input required placeholder="Tu nombre" />
            <input required type="email" placeholder="Tu email" />
            <textarea required placeholder="Contame brevemente" rows="4" />
            <button className="btn solid" type="submit">Enviar</button>
            <small style={{ opacity: .85, textAlign: "center" }}>
              También por mail: <a href="mailto:gisecrahan@gmail.com">gisecrahan@gmail.com</a>
            </small>
          </form>
        </div>
      </Section>

      <Footer />
    </>
  );
}
