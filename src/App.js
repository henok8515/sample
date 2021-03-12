import React from "react";
import "./App.css";
import Card from "./Component/Card/Card";
import Display from "./Component/Display/Display";
import Header from "./Component/Header/Header";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Display} />
      </Switch>
    </div>
  );
}

export default App;
