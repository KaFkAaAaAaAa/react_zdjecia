
import './App.css'
import {useState} from "react";

function App() {
    const [school, setSchool] = useState(true);
    const [home, setHome] = useState("");

  return (
    <div>
        <h2>Fotki plotki</h2>
        <input type="checkbox" id="school" defaultChecked onChange={ (e) => {setSchool(e.target.checked)}}></input>
        <label htmlFor="school">Szkoła</label>
        <input type="checkbox" id="home" onChange={ (e) => {setHome(e.target.checked)} }></input>
        <label htmlFor="school">Dom</label>
        <p>{home? <>DOM TAK</> : <>DOM NIE</>}</p>
        <p>{school? <>SZKOŁA TAK</> : <>SZKOŁA NIE</>}</p>
    </div>
  )
}

export default App
