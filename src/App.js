import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./context/Login";

class App extends Component {
  handleLoggedIn = (username) => {
    console.log("user" + username);
    const user = { name: "Anu" };
    this.setState({ currentUser: user });
  };
  state = {
    currentUser: { name: null },
  };
  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <div>
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
