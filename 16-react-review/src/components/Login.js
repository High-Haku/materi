import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    // cara 1
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })

    // cara 2
    // setUser(prevState => ({
    //   ...prevState,
    //   [event.target.name] : event.target.value
    // }))
  }

  const handleSubmit = () => {
    console.log(user)
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        value={user.password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
