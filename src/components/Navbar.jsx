import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light"); // por defecto claro

  useEffect(() => {
    const t = localStorage.getItem("theme") || "light";
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next === "dark" ? "dark" : "light");
  };

  return (
    <>
      <nav className="navbar">
        <div className="container" style={{ display: "flex", alignItems: "center", height: 64, gap: 16 }}>
          <a href="#home" style={{ fontWeight: 700, letterSpacing: .3 }}>Giselle Fernandez</a>
          <div style={{ marginInlineStart: "auto", display: "flex", gap: 12 }}>
            <a href="#proyectos">Proyectos</a>
            <a href="#servicios">Servicios</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#contacto" className="btn outline">Contacto</a>
            <button className="btn solid" aria-label="Cambiar tema" onClick={toggle}>
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </nav>
      <div className="nav-spacer" />
    </>
  );
}
