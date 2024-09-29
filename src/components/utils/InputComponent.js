const InputComponent = ({
  title,
  type,
  name,
  id,
  placeholder,
  hf,
  label,
  setDate,
  setKeys,
}) => {
  return (
    <div>
      <label htmlFor={hf}>{label}</label>
      <input
        required
        className="form-control"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={title}
        onChange={(e) => setKeys(id, e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
