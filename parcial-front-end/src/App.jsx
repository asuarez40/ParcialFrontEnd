import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [show, setShow] = useState(true);

  const handlerEnviar = (event) => {
    event.preventDefault();
    if (nombre.length < 3 || nombre.trim() === "" || raza.length < 6) {
      alert("La info no es la adecuada");
    } else {
      setShow(true);
    }
  }

  return (
    <>
      <div > 
      <h1>Ingrese el nombre y raza de su mascota</h1> 
      <form className='form1' onSubmit={handlerEnviar}>
        <label>Raza</label>
       
        <input  placeholder='Raza' value={raza} onChange={e => setRaza(e.target.value)}/>

        <label>Nombre</label>
        <input placeholder='Nombre'  value={nombre} onChange={e => setNombre(e.target.value)}/>
        <button type='submit'>Enviar</button>
      
      </form>
    
      {show && (
          <Card nombre={nombre} raza={raza} />
        )}
      </div>
    </>
  )
}

export default App