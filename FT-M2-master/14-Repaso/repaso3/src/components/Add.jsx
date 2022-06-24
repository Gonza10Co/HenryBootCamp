import { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../store/actions";

function Add({ addUser }) {
  const [input, setInput] = useState({
    name: "",
    username: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Name..."
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="username"
            type="text"
            placeholder="Username..."
            value={input.username}
            onChange={handleChange}
          />
          <input type="submit" value="Add" />
        </div>
      </form>
    </>
  );
}

export default connect(null, { addUser })(Add);
