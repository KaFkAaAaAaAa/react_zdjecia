import zdjecie from './assets/zdj1.jpg'
import zdjecie2 from './assets/zd2.jpg'
import zdjecie3 from './assets/zdj3.jpg'
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
        <p>{home? <><img src={zdjecie} alt="1" style={{width: 100}}/></> : <>DOM NIE</>}</p>
        <p>{school? <><img src={zdjecie2} alt="2" style={{width: 100}}/><img src={zdjecie3} alt="3" style={{width: 100}}/></> : <>SZKOŁA NIE</>}</p>
    </div>
  )
}

export default App
