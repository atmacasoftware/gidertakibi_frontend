import { useTranslation } from "react-i18next";

export default function Input(
  {type,
  name,
  placeholder,
  tabIndex = 10,
  isRequired = false,
  onChange}
) {
  
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      tabIndex={tabIndex}
      required={isRequired}
      onChange={onChange}
    />
  );
}
