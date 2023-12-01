import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  state = {};
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List{" "}
            {userContext.currentUser.name ? userContext.currentUser.name : ""}
            <MovieRow></MovieRow>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
