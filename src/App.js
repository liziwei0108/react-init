
import React, { Component } from "react";
import './App.css';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <div id="main">
          <Router>
            <Sider />
            <Content />
          </Router>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
