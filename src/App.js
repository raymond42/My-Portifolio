import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage'
import Main from './components/Main';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Navbar />
      </header>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/home" component={Landingpage} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
