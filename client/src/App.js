import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Join}/>
          <Route path='/chat' component={Chat}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
