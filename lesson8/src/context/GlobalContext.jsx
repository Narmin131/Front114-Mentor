import { useEffect, useState } from "react";
import { createContext } from "react";

// 1.context yaratmaq
export const MyContext = createContext();

// 2. provider yaratmaq

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data.products)
        setState(data.products)
    })
  }, [])

  return (
    <MyContext.Provider value={{ setState, state }}>
      {children}
    </MyContext.Provider>
  );
};
