import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Sculpture from './components/sculpture';
import About from './components/about';
import Header from './components/header';
import Video from './components/video';
import { Switch, Route } from 'react-router-dom';

import { SiInstagram } from "react-icons/si";


function ShowPage(props) {
  const whichPage = props.whichPage;
  if (whichPage === "sculpture") {
    return <Sculpture />;
  } else if (whichPage === "about") {
    return <About />;
  } else if (whichPage === "video") {
    return <Video />;
  } else {
    return(
      <p>error</p>
    )
  }
}

class PageControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleSculptureClick = this.handleSculptureClick.bind(this);
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.state = {whichPage: "sculpture"};
  }

  handleSculptureClick() {
    this.setState({whichPage: "sculpture"});
  }

  handleAboutClick() {
    this.setState({whichPage: "about"});
  }

  handleVideoClick() {
    this.setState({whichPage: "video"});
  }

  render() {
    const whichPage = this.state.whichPage;
    if (whichPage === "sculpture") {
      return(
        <div>
          <div className="leftColumn">
            <h1>Hardy Izard</h1>
            <p onClick={() => this.handleSculptureClick()} className="greyed">Sculpture</p>
            <p onClick={() => this.handleVideoClick()}>Videos</p>
            <p onClick={() => this.handleAboutClick()}>About</p>
            <SiInstagram className="instagram"/>
          </div>
          <ShowPage whichPage={"sculpture"} />
        </div>
      )
    } else if (whichPage === "about") {
      return(
        <div>
          <div className="leftColumn">
            <h1>Hardy Izard</h1>
            <p onClick={() => this.handleSculptureClick()}>Sculpture</p>
            <p onClick={() => this.handleVideoClick()}>Videos</p>
            <p className="greyed" onClick={() => this.handleAboutClick()}>About</p>
            <SiInstagram className="instagram"/>
          </div>
          <ShowPage whichPage={"about"} />
        </div>
      )
    } else if (whichPage === "video") {
      return(
        <div>
          <div className="leftColumn">
            <h1>Hardy Izard</h1>
            <p onClick={() => this.handleSculptureClick()}>Sculpture</p>
            <p className="greyed" onClick={() => this.handleVideoClick()}>Videos</p>
            <p onClick={() => this.handleAboutClick()}>About</p>
            <SiInstagram className="instagram"/>
          </div>
          <ShowPage whichPage={"video"} />
        </div>
      )
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <PageControl />
  </React.StrictMode>,
  document.getElementById('root')
);
