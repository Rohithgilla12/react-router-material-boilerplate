import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
