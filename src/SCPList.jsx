function SCPList({ data, onSelect }) {
  return (
<div className="grid">
      {data.length > 0 ? (
        data.map((scp) => (
<div key={scp.id} className="card">
<img src={scp.image} alt={scp.name} />
<h3>{scp.name}</h3>
<p className="badge">{scp.class}</p>
<p>{scp.description}</p>
<button onClick={() => onSelect(scp)}>View</button>
</div>
        ))
      ) : (
<p>No SCP records found.</p>
      )}
</div>
  );
}
 
export default SCPList;