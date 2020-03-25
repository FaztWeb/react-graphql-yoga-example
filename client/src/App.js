import React from "react";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navigation } from "./components/Navbar";

import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={MessageList} />
          <Route exact path="/new-message" component={MessageForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
