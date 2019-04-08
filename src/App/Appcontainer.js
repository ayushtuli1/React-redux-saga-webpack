import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import history from "./app.history";
import Home from "../RootComponents/Home/Home.component";
import About from "../RootComponents/About/About.component";
import Header from "../RootComponents/header/header.component";
import Footer from "../RootComponents/footer/footer.component";
import Product from "../RootComponents/product/product.component";

export default class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    // var password = 'password123';
    // var retVal = prompt('Enter your password : ', 'your password here');
    // if (retVal !== password) {
    //     location.assign('');
    // }
  }
  render() {
    return (
      <div>
        <BrowserRouter history={history}>
          <Route path="/" component={Header} />
          <Route path="/" component={Footer} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/product" component={Product} />
            <Route render={() => <h1>NOT FOUND!!</h1>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
