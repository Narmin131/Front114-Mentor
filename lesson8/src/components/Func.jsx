import React, { useEffect, useState } from "react";

const Func = () => {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     console.log("Data deyisdi");
  //   }, [data]);

  //   useEffect(() => {
  //     console.log("her render");
  //   });

  return (
    <div>
      <h1>{data}</h1>

      <button onClick={() => setData("Sagol")}>change</button>
    </div>
  );
};

export default Func;
