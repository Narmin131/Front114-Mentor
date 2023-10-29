import React, { useContext, useState } from "react";
import Func from "./components/Func";
import { MyContext } from "./context/GlobalContext";

const App = () => {
  const { state, setState } = useContext(MyContext);

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

  const [user, setUser] = useState({
    name: "",
    surname: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(user);
    localStorage.setItem("User", JSON.stringify(user));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          placeholder="email"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="password"
          type="text"
          name="surname"
          onChange={handleChange}
        />
        <button>Submit form</button>
      </form>

      {/* <ol>
        {state.map((item, index) => {
          return <li>{item.title}</li>;
        })}
      </ol> */}
      <button onClick={() => setState("Deyisildi")}>
        change context state
      </button>

      <Func />
    </>
  );
};

export default App;
