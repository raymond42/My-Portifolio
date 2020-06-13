import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Navbar />
      </header>
        <Switch>
          <Route exact path="/" component={Landingpage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
