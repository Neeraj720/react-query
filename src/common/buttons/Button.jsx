import React from "react";

function Button({ btnClass, label, type, item, onAction }) {
  const handleClick = () => {
    if (onAction) {
      onAction(item);
    }
  };
  return (
    <button className={btnClass} type={type} onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
