

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./components/addUser";
import Transactions from "./components/transactions";
import Nav from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
// import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/adduser">
            <AddUser />
          </Route>
          <Route exact path="/transactions">
            <Transactions />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

