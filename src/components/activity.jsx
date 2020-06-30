import React, { Component } from "react";

class ActivityRecognition extends Component {
  render() {
    const authStye = {
      color: "black",
      backgroundColor: "#f0f0f0",
      width: "100%",
      height: "80vh",
      alighnContent: "center",
      paddingTop: "25vh",
      marginTop: "5vh",
      textAlign: "center",
      boxShadow: "5px 5px 5px #9E9E9E",
      margin: "10 10 0 0",
      borderRadius: 10,
    };
    return (
      <div style={authStye}>
        <h1> Activity : {this.props.activity} </h1>
        <img
          style={{ paddingTop: "5vh" }}
          width="100px"
          height="300px"
          src={require("./images/running.png")}
          alt=""
        />
      </div>
    );
  }
}

export default ActivityRecognition;
