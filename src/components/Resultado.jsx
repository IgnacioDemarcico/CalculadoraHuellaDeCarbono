function Resultado(props) {
    return (
      <div className="alert alert-success">
        Tu huella de carbono es: {props.carbonFootprint} kg CO2
      </div>
    );
  }
export default Resultado;