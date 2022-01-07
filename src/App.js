import React from 'react';
import './css/App.css';
import Sculpture from './components/sculpture';
import About from './components/about';
import Video from './components/video';
import Header from './components/header';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="background">
      <Header />
      <Switch>
        <Route exact path='/' component={Sculpture} />
        <Route path='/about' component={About} />
        <Route path='/videos' component={Video} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
