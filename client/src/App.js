import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Annotate from "./components/Annotate";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Annotate} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
