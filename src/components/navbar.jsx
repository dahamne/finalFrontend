import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar navbar-dark bg-dark">
        <h3 style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          Realtime User recognition
        </h3>
      </div>
    );
  }
}

export default NavBar;
