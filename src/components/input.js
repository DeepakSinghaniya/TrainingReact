import { useId } from "react";

const Input = ({ label, register, registerName, placeholder, type }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        {...register(registerName)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
