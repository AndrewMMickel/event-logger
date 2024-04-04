import React from "react";
import Header from "./Header";
import EventControl from "./EventControl";
import './../App.css'

function App() {
  return (
    <React.Fragment>
      <div id="bodyStyle" style={{ backgroundImage: `url(https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=600)`, backgroundSize: `auto`, }}>
        <Header />
        <EventControl />
      </div>
    </React.Fragment>
  );
}

export default App;
