import React from "react";

const FunctionComp = () => {
  console.log("Salam");

  const getMessage = () => {
    alert("Salam");
  };

  return (
    <div>
      <h1>Salam hamiya</h1>
      <p>Bu function componentdir</p>

      <button onClick={getMessage}>Submit</button>
    </div>
  );
};

export default FunctionComp;

// function componentimiz
// render metodu yoxdur
// rafce
