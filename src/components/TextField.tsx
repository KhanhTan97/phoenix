/**
 * Types
 */
type TextFieldProps = {
  classes?: string;
  helperText?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  fieldClasses?: string;
  type?: string;
  required?: boolean;
  autoFocus?: boolean;
};

const TextField = ({
  classes = "",
  helperText,
  label,
  name,
  placeholder = "",
  fieldClasses = "",
  type,
  required,
  autoFocus,
  ...rest
}: TextFieldProps) => {
  return (
    <div className={`text-field-wrapper ${classes || ""}`}>
      <label htmlFor={name} className="label-text">
        {label}
      </label>

      <input
        type={type}
        className={`text-field ${fieldClasses || ""}`}
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
        required={required}
        autoFocus={autoFocus}
      />
      {helperText && <p className="helper-text">{helperText}</p>}
    </div>
  );
};

export default TextField;
