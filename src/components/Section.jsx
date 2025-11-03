export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="reveal">
      <div className="container">
        <h2>{title}</h2>
        {subtitle && <p style={{ marginTop: 6, marginBottom: 28, textAlign: "center" }}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
