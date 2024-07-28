import { useTranslation } from "react-i18next";

export default function Input(
  {type,
  id,
  name,
  placeholder,
  inputValue,
  disabled=false,
  tabIndex = 10,
  isRequired = false,
  onChange}
) {
  
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={inputValue}
      placeholder={placeholder}
      disabled={disabled}
      tabIndex={tabIndex}
      required={isRequired}
      onChange={onChange}
    />
  );
}
