import React, { Component } from "react";
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
