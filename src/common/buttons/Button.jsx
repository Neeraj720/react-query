import React from "react";

function Button({ btnClass, lable, type }) {
  return (
    <>
      <button className={btnClass} type={type}>
       {lable}
      </button>
    </>
  );
}

export default Button;  
