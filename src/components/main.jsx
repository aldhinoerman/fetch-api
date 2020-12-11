import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import China from "./china";
import Turkey from "./turkey";
import Germany from "./germany";



class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Fetching Data API</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/china">China</NavLink></li>
            <li><NavLink to="/turkey">Turkey</NavLink></li>
            <li><NavLink to="/germany">Germany</NavLink></li>

          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/china" component={China}/>
            <Route exact path="/turkey" component={Turkey}/>
            <Route exact path="/germany" component={Germany}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;