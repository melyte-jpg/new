import React, { useState } from "react";

function SignUp({ users, setUsers }) {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const newUser = { username, fullname, email, phone, location, birthday, password };
    setUsers([...users, newUser]);
    alert("Signed up successfully!");
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br /><br />
      <input type="text" placeholder="Full Name" value={fullname} onChange={e => setFullname(e.target.value)} /><br /><br />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
      <input type="text" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} /><br /><br />
      <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} /><br /><br />
      <input type="date" placeholder="Birthday" value={birthday} onChange={e => setBirthday(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
