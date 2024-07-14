import React from "react";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner-border text-white" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
