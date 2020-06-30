import React, { Component } from "react";
class Autheticate extends Component {
  render() {
    const authStye = {
      color: "black",
      backgroundColor: "#f0f0f0",
      width: "100%",
      height: "20%",
      alighnContent: "center",
      paddingTop: "5vh",
      marginTop: "5vh",
      textAlign: "center",
      boxShadow: "5px 5px 5px #9E9E9E",
      margin: "5 0 0 0",
      borderRadius: 10,
    };
    return (
      <div style={authStye}>
        <h1> User: {this.props.user} </h1>
      </div>
    );
  }
}

export default Autheticate;
