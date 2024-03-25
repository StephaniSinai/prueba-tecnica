import { useState } from "react";
import AgeCalculator from "./components/AgeCalculator";
import AgeResult from "./components/AgeResult";
import { differenceInDays, differenceInYears, differenceInMonths } from "date-fns";
import { Label } from "reactstrap";

function App(){
  const [name, setName] = useState('');
  const [temperatura, setTemp] = useState('');
  const [estatura, setEstatura] = useState('');
  const [peso, setPeso] = useState('');
  const [satOxigeno, setSatOx] = useState('');
  const [MotConsult, setConsult] = useState('');
  const [lsex,sex]=useState('No')
  function selectSex(e) { sex(e.target.value)}
  const [age,setAge]=useState(null);
  const calculateAge=(birthDate)=>{
  const today = new Date();
  const birthDateObj =new Date (birthDate);
  const ageYears = differenceInYears(today,birthDateObj);
  const ageMonths = differenceInMonths(today,birthDateObj);
  const ageDays = differenceInDays(today,birthDateObj);
  
  setAge({
    years: ageYears,
    months: ageMonths,
    days: ageDays,
  });

}

  return(
    <div className="contenedor">
      <div className='form-control'>
      <label className="title">Datos del Paciente</label>
      <form className="form-control">
      <label>Nombre Completo:</label>
      <input type="text" name="name"  className="inputNombre" autoComplete="off" value={name} onChange={ev=> setName(ev.target.value)}>
      </input>
      </form>
      <label>Fecha de Nacimiento:</label>
      <AgeCalculator calculateAge={calculateAge}/>
      <form className="form-control">
      
      <label>Sexo:</label>
      <select value={lsex} className="style-input" onChange={selectSex}>
      <option>No</option>
      <option>Mujer</option>
      <option>Hombre</option>
      </select>
      </form>
      <label className="title">Datos Antropométricos</label>
      <form className="form-control">
      <label>Temperatura:</label>
      <input type="number" name="temperatura" className="style-input" autoComplete="off" value={temperatura} onChange={ev=> setTemp(ev.target.value)}></input>
      <label>Estatura:</label>
      <input type="number" name="Estatura" className="style-input" autoComplete="off" value={estatura} onChange={ev=> setEstatura(ev.target.value)}></input>
      </form>
      <form className="form-control">
      <label>Peso:</label>
      <input type="number" name="peso" className="style-input" autoComplete="off" value={peso} onChange={ev=> setPeso(ev.target.value)}></input>
      <label>Saturacion de oxigeno:</label>
      <input type="text" name="satOxigeno" className="style-input" autoComplete="off" value={satOxigeno} onChange={ev=> setSatOx(ev.target.value)}></input>
      </form>
      <label className="title">Datos adicionales</label>
      <form className="form-control">
      <label>Motivo de consulta:</label>
      <input type="text" className="inputNombre" name="MotConsult" autoComplete="off" value={MotConsult} onChange={ev=> setConsult(ev.target.value)}></input>
      </form>
      
      <label className="title">Diagnostico</label>
      <form className="form-control">
      <label>Diagnostico:</label>
      <input type="text" className="inputNombre"></input>
      </form>

      <form className="info">

      <label className="title">Resumen</label>
      <form className="form-control">
        <p>
      <label>Nombre del Paciente:</label> {name}
      </p>
      <label>Edad:</label>{age && <AgeResult age={age}/>}
      <p>
      <label>Sexo:</label> {lsex}
      </p> 
      <p>
      <label>Temperatura:</label> {temperatura}<label> °C</label>
      </p>
      <p>
      <label>Estatura:</label>{estatura}<label> Mts.</label>
      </p> 
      <p>
      <label>Peso:</label>{peso}<label> Kg.</label>
      </p> 
      <p>
      <label>Saturacion de oxigeno:</label>{satOxigeno}
      </p>
      </form>
      <form className="form-control">
      <label>Motivo de la consulta:</label>{MotConsult}
      </form>
      <form className="form-control">
      <label>Diagnostico:</label>
      </form>
      </form>
      </div>

    </div>
  );


}

export default App;