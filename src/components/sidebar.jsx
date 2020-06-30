import React, { Component } from "react";

class SideBar extends Component {
  state = {};

  render() {
    const sideBarStyles = {
      backgroundColor: "white",
      width: "120%",
      height: "100vh",
      allignItems: "center",
      boxShadow: "5px 5px 5px #9E9E9E",
      textAlign: "center",
    };

    const activities = ["Walking", "Running", "Sleeping", "Bending", "Jumping"];

    const sidebarInputstyles = {
      paddingTop: 50,
    };
    return (
      <div style={sideBarStyles}>
        <div className="sidebarInputs" style={sidebarInputstyles}>
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <label className="sr-only">Password</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword2"
                placeholder="User Name"
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Add user
            </button>
          </form>
        </div>
        <div className="activityList" style={{ paddingTop: 40 }}>
          <ul>
            {activities.map((activity) => (
              <li key={activity} style={{ paddingTop: 20, listStyle: "none" }}>
                <button type="button" className="btn btn-outline-success">
                  Set Activity :{activity}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="userImage">
          <img
            style={{ width: "170px", height: "170px", margin: 100 }}
            src={require("./images/user.png")}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default SideBar;
