import React, { useContext } from "react";
import UserContext from "./userContext";

function Login() {
  const userContext = useContext(UserContext);
  return (
    <div>
      <button onClick={() => userContext.onLoggedIn("username")}>Log in</button>
    </div>
  );
}

export default Login;
