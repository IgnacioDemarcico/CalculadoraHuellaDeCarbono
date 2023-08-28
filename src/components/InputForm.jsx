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
export default InputForm;