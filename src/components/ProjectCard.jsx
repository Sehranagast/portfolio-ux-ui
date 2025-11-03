export default function ProjectCard({ title, tags = [], img, url }) {
  return (
    <article className="card reveal" style={{display:"grid", gap:12}}>
      {img && (
        <a href={url} target="_blank" rel="noreferrer">
          <img loading="lazy" src={img} alt={title} style={{borderRadius:12}} />
        </a>
      )}
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <h3 style={{margin:0, fontSize:18}}>{title}</h3>
        {url && <a className="btn" href={url} target="_blank" rel="noreferrer">ver proyecto ↗</a>}
      </div>
      {!!tags.length && (
        <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
          {tags.map(t => (
            <span key={t} className="card" style={{padding:"6px 10px", borderRadius:999, fontSize:12}}>{t}</span>
          ))}
        </div>
      )}
    </article>
  );
}
