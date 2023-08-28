import React, { useState } from 'react';
import './App.css'; // Asegúrate de tener los estilos de Bootstrap cargados

// Componente para el formulario de entrada
function InputForm(props) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        type="number"
        value={props.value}
        onChange={props.onChange}
        className="form-control"
      />
    </div>
  );
}

// Componente para el botón de calcular
function CalculateButton(props) {
  return (
    <button onClick={props.onClick} className="btn btn-primary">
      Calcular
    </button>
  );
}

// Componente para el resultado
function Result(props) {
  return (
    <div className="alert alert-success">
      Tu huella de carbono es: {props.carbonFootprint} kg CO2
    </div>
  );
}

// Componente principal que renderiza la calculadora
function CarbonFootprintCalculator() {
  const [electricityUsage, setElectricityUsage] = useState('');
  const [carMileage, setCarMileage] = useState('');
  const [dietChoice, setDietChoice] = useState('omnivore');
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const handleCalculate = () => {
    // Realizar cálculos aquí utilizando los valores de los estados
    // y los factores de emisión apropiados
    const electricityEmissionFactor = 0.5; // Ejemplo de factor de emisión
    const carEmissionFactor = 2.0; // Ejemplo de factor de emisión

    const electricityEmission = electricityUsage * electricityEmissionFactor;
    const carEmission = carMileage * carEmissionFactor;

    // Calcula la huella de carbono total sumando las emisiones calculadas
    const totalCarbonFootprint = electricityEmission + carEmission;

    setCarbonFootprint(totalCarbonFootprint);
  };

  return (
    <div className="container">
      <h1>Calculadora de Huella de Carbono</h1>
      {/* Usar el componente InputForm para cada entrada */}
      <InputForm
        label="Consumo de Electricidad (kWh):"
        value={electricityUsage}
        onChange={(e) => setElectricityUsage(e.target.value)}
      />
      <InputForm
        label="Kilometraje del Auto (km):"
        value={carMileage}
        onChange={(e) => setCarMileage(e.target.value)}
      />
      {/* Usar el componente nativo select para la elección de dieta */}
      <div className="form-group">
        <label>Elección de Dieta:</label>
        <select
          value={dietChoice}
          onChange={(e) => setDietChoice(e.target.value)}
          className="form-control"
        >
          <option value="omnivore">Omnívoro</option>
          <option value="vegetarian">Vegetariano</option>
          <option value="vegan">Vegano</option>
        </select>
      </div>
      {/* Usar el componente CalculateButton para el botón */}
      <CalculateButton onClick={handleCalculate} />
      {/* Mostrar el componente Result solo si hay un valor calculado */}
      {carbonFootprint && <Result carbonFootprint={carbonFootprint} />}
    </div>
  );
}

export default CarbonFootprintCalculator;
