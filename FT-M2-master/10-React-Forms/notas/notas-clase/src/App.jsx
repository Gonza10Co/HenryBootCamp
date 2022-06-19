import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({ user: "", pass: "" });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log({ data });
  };

  const handleOnChange = (e) => {
    setData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value.toUpperCase(),
      };
    });
    console.log({data})
  };

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Usuario:</label>
          <input onChange={handleOnChange} value={data.user} name="user" />
        </div>
        <div>
          <label>Password:</label>
          <input
            onChange={handleOnChange}
            value={data.pass}
            type="password"
            name="pass"
          />
          {/* <span style={{ color: "red" }}>{passError}</span> */}
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
