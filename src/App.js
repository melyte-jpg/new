import React, { useState } from "react";
import SignUp from "./components/signup.js";
import Login from "./components/login.js";

function App() {
  const [users, setUsers] = useState([]); 

  return (
    <div style={{ textAlign: "center",
       marginTop: "30px"
            

     }}>
      <h1>MY-WEBSITE</h1>
      <SignUp users={users} setUsers={setUsers} />
      <Login users={users} />
    </div>
  );
}

export default App;