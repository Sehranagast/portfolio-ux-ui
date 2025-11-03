export default function FigmaEmbed({ url, title = "Proyecto" }) {
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
  return (
    <article className="card" style={{ padding: 18 }}>
      <div style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 10",
        borderRadius: 16,
        overflow: "hidden",
        background: "var(--surface)"
      }}>
        <iframe
          title={title}
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          src={embedUrl}
          allowFullScreen
        />
      </div>
      <div style={{ paddingTop: 12, textAlign: "left" }}>
        <h3 style={{ margin: 0, fontSize: 18 }}>{title}</h3>
        <p style={{ marginTop: 6 }}>Interactuá sin salir del sitio.</p>
      </div>
    </article>
  );
}
