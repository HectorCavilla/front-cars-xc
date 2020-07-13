import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Title } from './components/Title'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Thanks } from './pages/Thanks'
import { NotFound } from './pages/NotFound'

import './App.css';
import 'bulma/css/bulma.css';


function App() {
  return (
    <div className="App">
      <Title>Ecommerce Autos</Title>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detail/:id' component={Details} />
        <Route exact path='/thanks/:id' component={Thanks} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
