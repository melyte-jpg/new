import React, { useState } from "react";
import signup from "./components/signup";
import login from "./components/login";

function App() {
  const [users, setUsers] = useState([]); 

  return (
    <div style={{ textAlign: "center",
       marginTop: "30px"
            

     }}>
      <h1>MY-WEBSITE</h1>
      <signup users={users} setUsers={setUsers} />
      <login users={users} />
    </div>
  );
}

export default App;