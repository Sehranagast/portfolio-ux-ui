export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "14px 0",           // altura pequeña
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",          // para mobile
          gap: "8px",
          fontSize: "0.9rem",
          color: "var(--muted)",
        }}
      >
        <small>© {new Date().getFullYear()} Giselle Fernandez</small>
        <small>
          <a
            href="mailto:gisecrahan@gmail.com"
            style={{
              color: "var(--text)",
              textDecoration: "none",
            }}
          >
            gisecrahan@gmail.com
          </a>
        </small>
      </div>
    </footer>
  );
}
