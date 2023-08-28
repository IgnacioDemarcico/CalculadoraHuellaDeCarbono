import React from "react";
import { useState} from "react";
import Boton from "./Boton";
import Resultado from "./Resultado";
import InputForm from "./InputForm";
import  "./Calculadora.css";

function Calculadora() {
    const [usoElectrico, setUsoElectrico] = useState('');
    const [kilometrajeAuto, setKilometrajeAuto] = useState('');
    const [alimentacion, setAlimentacion] = useState('omnivoro');
    const [huellaDeCarbono, setHuellaDeCarbono] = useState(null);
  
    const handleCalculate = () => {
      const factorDeEmisionElectrica = 0.5;
      const factorDeEmisionDeAuto = 2.0; 
  
      const emisionElectrica = usoElectrico * factorDeEmisionElectrica;
      const emisionDeAuto = kilometrajeAuto * factorDeEmisionDeAuto;
  
      const resultadoHuellaDeCarbono = emisionElectrica + emisionDeAuto;
  
      setHuellaDeCarbono(resultadoHuellaDeCarbono);
    };
  
    return (
      <div className="container">
        <h1>Calculadora de Huella de Carbono</h1>
        <InputForm
          label="Consumo de Electricidad (kWh):"
          value={usoElectrico}
          onChange={(e) => setUsoElectrico(e.target.value)}
        />
        <InputForm
          label="Kilometraje del Auto (km):"
          value={kilometrajeAuto}
          onChange={(e) => setKilometrajeAuto(e.target.value)}
        />
        <div className="form-group">
          <label>Elección de Dieta:</label>
          <select
            value={alimentacion}
            onChange={(e) => setAlimentacion(e.target.value)}
            className="form-control"
          >
            <option value="omnivore">Omnívoro</option>
            <option value="vegetarian">Vegetariano</option>
            <option value="vegan">Vegano</option>
          </select>
        </div>
        <Boton onClick={handleCalculate} class="bton" />
        {huellaDeCarbono && <Resultado carbonFootprint={huellaDeCarbono} />}
      </div>
    );
  }
  
  export default Calculadora;
  