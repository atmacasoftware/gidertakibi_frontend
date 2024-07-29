export default function Button({
  type,
  btn_display,
  capitalize,
  position,
  width,
  style,
  children,
  disabled=false
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn btn-${btn_display} text-${capitalize} ${position} ${width} ${style}`}
    >
      {children}
    </button>
  );
}
