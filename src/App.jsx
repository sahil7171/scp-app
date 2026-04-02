import { useState } from "react";
import data from "./data.json";
import SCPList from "./SCPList";
import SCPView from "./SCPView";
import "./App.css";
 
function App() {

  const [selected, setSelected] = useState(null);
 
  return (
<div>
<header className="header">
<h1>SCP Archive System</h1>
</header>
 
      {!selected ? (
<SCPList data={data} onSelect={setSelected} />

      ) : (
<SCPView scp={selected} onBack={() => setSelected(null)} />

      )}
</div>

  );

}
 
export default App;
 