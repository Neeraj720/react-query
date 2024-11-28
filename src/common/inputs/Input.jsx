function Input({ label, name, value, type, onChange, placeholder }) {
    return (
      <>
        {type === "text" ? (
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              {label}
            </label>
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange} // Ensure onChange is passed
              placeholder={placeholder}
              className="form-control"
            />
          </div>
        ) : (
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              {label}
            </label>
            <textarea
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="form-control"
            />
          </div>
        )}
      </>
    );
  }
  
  export default Input;
  