import React, { Component, useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import ActivityRecognition from "./components/activity";
import Authenticate from "./components/auth";
import Localization from "./components/localization";
import SideBar from "./components/sidebar";

function App() {
  //--------------------------------------------//
  const butstyle = {
    //-----------Button styles--------------------//
    marginTop: "5vh", //-------------------------------------------//
    width: "40vh",
    heigh: 100,
    alighnContent: "center",
  };
  const [toggleVal, setToggle] = useState(0);
  const [state, setState] = useState({ data: [] });

  //////----------------------------------Fetch data from the api ---------------------------------------------//////////
  useEffect(() => {
    fetchData();
  }, [state]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/get");
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      setState({ data: json });
    } catch (error) {
      console.log(error);
    }
  };

  ////--------------------------------End of Fetch data from the api---------------------------------------//////////

  var { activity, user, location } = "";
  activity = state.data.activity;
  location = state.data.location;
  user = state.data.user;

  return (
    <main>
      <div>
        <NavBar />
      </div>

      <div>
        <div
          className="sideBar"
          style={{ zIndex: 10, position: "fixed", left: toggleVal ? 0 : -500 }}
        >
          <SideBar />
        </div>
        <div className="container-fluid" style={{ zIndex: 0 }}>
          <div className="row">
            <div className="col" style={{ justifyContent: "center" }}>
              <ActivityRecognition activity={activity} />
            </div>
            <div className="col">
              <Authenticate user={user} />
              <Localization location={location} />
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={butstyle}
                  onClick={() => setToggle(!toggleVal)}
                >
                  {toggleVal ? "Done" : "Add User"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
