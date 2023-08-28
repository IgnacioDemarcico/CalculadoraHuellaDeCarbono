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

      const emisionElectrica = usoElectrico * factorDeEmisionElectrica;
      const emisionDeAuto = kilometrajeAuto * factorDeEmisionDeAuto;
      const emisionAgua=AguaCaliente*factorDeEmisionAguaCaliente;
      const emisionCalefaccion= Calefaccion* factorDeEmisionCalefaccion;
  
      var resultadoHuellaDeCarbono = emisionElectrica + emisionDeAuto + emisionAgua + emisionCalefaccion;
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
        <Boton onClick={handleCalculate} className="bton" />
        </div>
        {huellaDeCarbono && <Resultado carbonFootprint={huellaDeCarbono} />}
      </div>
    );
  }
  //fuente: https://energiaonline.com.ar/como-calcular-la-huella-de-carbono-que-le-dejas-al-planeta/
  //https://www.caranddriver.com/es/coches/planeta-motor/a30780438/emisiones-contaminantes-segun-tipo-coche/
  //https://www.edesur.com.ar/novedades/calefactor-electrico-mas-eficiente-por-consumo/#:~:text=Un%20panel%20est%C3%A1ndar%20consume%20600,aire%20acondicionado%20en%20modo%20calor.
  //https://www.bbva.es/general/sostenibilidad/soluciones-para-personas/huella-de-carbono-personas/repositorio/ducharse-a-diario.html#:~:text=Una%20ducha%20de%20aproximadamente%205,se%20utiliza%20una%20caldera%20el%C3%A9ctrica.


  export default Calculadora;
  