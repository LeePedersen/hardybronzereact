import React, { useState } from 'react';
import './css/App.css';
import Header from './components/header';
import Menu from './components/menu';
import Sculpture from './components/sculpture';
import About from './components/about';
import Video from './components/video';
import Contact from './components/contact';
import ViewImage from './components/viewImage';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      useMenu: false,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    const currentUseMenu = (window.innerWidth <= 768);
    const currentUseHeader = (window.innerWidth >= 768);
    if (currentUseMenu !== this.state.useMenu) {
      this.setState({useMenu: currentUseMenu});
    }
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.resize.bind(this));
  }

  render() {
    return (
      <div className="background">
        {this.state.useMenu ? <Menu /> : <Header />}
        <Switch>
          <Route exact path='/' component={Sculpture} />
          <Route path='/about' component={About} />
          <Route path='/video' component={Video} />
          <Route path='/contact' component={Contact} />
          <Route path='/viewImage' component={ViewImage} />
          <Route component={Error404} />
        </Switch>
      </div>
    );

  }
}

export default App;
