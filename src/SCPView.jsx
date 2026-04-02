function SCPView({ scp, onBack }) {
  return (
<div className="details">
<button onClick={onBack}>Back</button>
<h2>{scp.name}</h2>
<img src={scp.image} alt={scp.name} />
<p><strong>Class:</strong> {scp.class}</p>
<p><strong>Description:</strong> {scp.description}</p>
<p><strong>Containment:</strong> {scp.containment}</p>
</div>
  );
}
 
export default SCPView;