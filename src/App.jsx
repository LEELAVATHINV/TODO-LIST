import React, { useState } from "react";
import Login from "./components/Login.jsx";
import ToDoList from "./components/ToDoList.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <ToDoList /> : <Login onLogin={() => setIsLoggedIn(true)} />}
    </div>
  );
}

export default App;

