import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './Home';
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <div className="Dog-Home">
          <Route path="/dogs">
            <Home dogs={App.defaultProps}/>
          </Route>
        </div>
        <div className="Dog-Nav">
          <Route path="/dogs/:name">
            <Nav dog={App.defaultProps.name}/>
          </Route>
        </div>
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}


export default App;
