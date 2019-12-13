
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import Footer from './Footer';


function App() {
  return (
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
  );
}

export default App;
