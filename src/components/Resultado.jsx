import PropTypes from "prop-types";

function Resultado(props) {
  var anual = 0;
  anual = props.carbonFootprint * 365;
  
  return (
    <div className="alert alert-success">
      Tu huella de carbono es: {props.carbonFootprint} kg CO2 por día y {anual.toFixed(2)} kg CO2 al año
    </div>
  );
}

Resultado.propTypes = {
  carbonFootprint: PropTypes.number.isRequired, // Validación para la prop "carbonFootprint"
};

export default Resultado;
