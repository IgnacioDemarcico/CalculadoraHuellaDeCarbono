import React, { useState } from 'react';
import './App.css'; // Asegúrate de tener los estilos de Bootstrap cargados

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
      <div className="form-group">
        <label>Consumo de Electricidad (kWh):</label>
        <input
          type="number"
          value={electricityUsage}
          onChange={(e) => setElectricityUsage(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Kilometraje del Auto (km):</label>
        <input
          type="number"
          value={carMileage}
          onChange={(e) => setCarMileage(e.target.value)}
          className="form-control"
        />
      </div>
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
      <button onClick={handleCalculate} className="btn btn-primary">
        Calcular
      </button>
      {carbonFootprint !== null && (
        <div className="result">
          <h2>Tu Huella de Carbono:</h2>
          <p>{carbonFootprint.toFixed(2)} kg CO2</p>
        </div>
      )}
    </div>
  );
}

export default CarbonFootprintCalculator;
