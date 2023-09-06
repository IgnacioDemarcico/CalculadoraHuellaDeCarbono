import React from "react";
import { useState} from "react";
import Boton from "./Boton";
import Resultado from "./Resultado";
import InputForm from "./InputForm";
import  "./calculadora.css";

function Calculadora() {
    const [usoElectrico, setUsoElectrico] = useState('');
    const [kilometrajeAuto, setKilometrajeAuto] = useState('');
    const [alimentacion, setAlimentacion] = useState('omnivoro');
    const [huellaDeCarbono, setHuellaDeCarbono] = useState(null);
    const [AguaCaliente,setUsoAguaCaliente]=useState('')
    const [Calefaccion,setCalefaccion]=useState('')
    

    const handleCalculate = () => {
      const factorDeEmisionElectrica = 0.48;
      const factorDeEmisionDeAuto = 0.143;
      const factorDeEmisionAguaCaliente= 0.03;
      const factorDeEmisionCalefaccion=0.12;
      const fatorDeEmisionOmnivoro=2.5;
      const fatorDeEmisionVegetariana=1.8;
      const fatorDeEmisionVegana=1.5;

      
      const emisionElectrica = usoElectrico * factorDeEmisionElectrica;
      const emisionDeAuto = kilometrajeAuto * factorDeEmisionDeAuto;
      const emisionAgua=AguaCaliente*factorDeEmisionAguaCaliente;
      const emisionCalefaccion= Calefaccion* factorDeEmisionCalefaccion;
      
      if (alimentacion=="omnivoro") {
        
        var resultadoHuellaDeCarbono = emisionElectrica + emisionDeAuto + emisionAgua + emisionCalefaccion+fatorDeEmisionOmnivoro;
      }
      else if(alimentacion=="vegetarian"){
        var resultadoHuellaDeCarbono = emisionElectrica + emisionDeAuto + emisionAgua + emisionCalefaccion+fatorDeEmisionVegetariana;

      }
      else{
        var resultadoHuellaDeCarbono = emisionElectrica + emisionDeAuto + emisionAgua + emisionCalefaccion+fatorDeEmisionVegana;
      }
      resultadoHuellaDeCarbono=resultadoHuellaDeCarbono.toFixed(2)
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
        <InputForm 
        label="Cuanto tiempo te bañas(min) :"
        value={AguaCaliente}
        onChange={(e)=>setUsoAguaCaliente(e.target.value)}
        />
        <InputForm 
        label="Cuanto tiempo tenes la calefaccion prendida (hs) :"
        value={Calefaccion}
        onChange={(e)=>setCalefaccion(e.target.value)}
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
        <div className="bton">
        <button onClick={handleCalculate} className="btn btn-primary">Calcular</button>
        </div>
        {huellaDeCarbono && <Resultado carbonFootprint={huellaDeCarbono} />} 
      </div>
    );
  }

  


  export default Calculadora;
  