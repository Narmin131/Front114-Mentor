import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  }, []);

  // 3 islenulme

  // useEffect(() => {
  //   // her renderda ise dusur
  // });

  // useEffect(() => {
  //   // ilk renderda ise dusur
  // }, []);

  // useEffect(() => {
  //   // paramaterden asili olaraq  ise dusur
  // }, [parametr]);


  return (
    <>
      <div className="container">
        <div className="row">
          {state.map((item, index) => {
            return <UserCard user={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
