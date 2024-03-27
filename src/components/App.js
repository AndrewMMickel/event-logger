import React from "react";
import Header from "./Header";
import EventControl from "./EventControl";

function App() {
  return (
    <React.Fragment>
      <div id="body">
        <Header />
        <EventControl />
      </div>
    </React.Fragment>
  );
}

export default App;
