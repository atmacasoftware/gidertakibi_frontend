import Spinner from "./Spinner";

export default function Button({
  type,
  btn_display,
  capitalize,
  position,
  width,
  style,
  children,
  apiProgress,
}) {
  return (
    <>
      {!apiProgress ? (
        <button
          type={type}
          className={`btn btn-${btn_display} text-${capitalize} ${position} ${width} ${style}`}
        >
          {children}
        </button>
      ) : (
        <button
          type={type}
          disabled
          className={`btn btn-${btn_display} text-${capitalize} ${position} ${width} ${style} d-flex justify-content-center align-items-center`}
        >
          <Spinner color={"white"}/>
          <span className="ms-3">{children}</span>
        </button>
      )}
    </>
  );
}
