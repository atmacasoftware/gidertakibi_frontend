export default function Button({
  type,
  btn_display,
  capitalize,
  position,
  width,
  style,
  children,
}) {
  return (
    <button
      type={type}
      className={`btn btn-${btn_display} text-${capitalize} ${position} ${width} ${style}`}
    >
      {children}
    </button>
  );
}
