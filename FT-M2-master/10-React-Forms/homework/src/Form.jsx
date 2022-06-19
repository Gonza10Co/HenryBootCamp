import React, { useState } from "react";

export function validate(input) {
  let errors = {};
  let emailPattern = /\S+@\S+\.\S+/; // Expresion Regular para validar Emails.
  let passPattern = /(?=.*[0-9])/; // Expresion Regular para validar passwords.
  if (!input.username) 
    errors.username = "Username is required";
   else if (!emailPattern.test(input.username)) 
    errors.username = "Username is invalid";
  
  if (!input.password) 
    errors.password = "Password is required";
   else if (!passPattern.test(input.password)) 
    errors.password = "Password is invalid";
  
  return errors;
}

export default function Form() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // const errores = React.useMemo(() => {//otra forma con usememo
  //   return validate(input);
  // }, [input]);
  
  const handleChange = (e) => {
    const { value, name } = e.target;

    setInput((prev) => {
      const newState = { ...prev, [name]: value };
      setErrors(validate(newState));
      return newState;
    });
  };

  return (
    <div>
      <form action="">
        <div>
          <label>Username:</label>
          <input
            className={errors.username && 'danger'}
            type="text"
            name="username"
            placeholder="username..."
            onChange={handleChange}
            value={input.username}
          />
          {errors.username && <p className="danger">{errors.username}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            className={errors.password && 'danger'}
            type="password"
            name="password"
            placeholder="enter your password..."
            onChange={handleChange}
            value={input.password}
          />
          {errors.password && <p className="danger">{errors.password}</p>}
        </div>
        <input type="submit" value="Submit" disabled={Object.keys(errors).length} />
      </form>
    </div>
  );
}

//usar npm t -- --verbose
