import React, { useState } from "react";

function Login({ users }) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = users.find(
      u => (u.email === emailOrPhone || u.phone === emailOrPhone) && u.password === password
    );
    if (user) {
      alert(`Welcome back, ${user.fullname}!`);
    } else {
      alert("Invalid login info.");
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Login</h2>
      <input type="text" placeholder="Email or Phone" value={emailOrPhone} onChange={e => setEmailOrPhone(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;