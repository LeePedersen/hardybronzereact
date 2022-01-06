import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Sculpture from './components/sculpture';
import About from './components/about';

function ShowPage(props) {
  const whichPage = props.whichPage;
  if (whichPage == "sculpture") {
    return <Sculpture />;
  } else if (whichPage === "about") {
    return <About />;
  }
}

class PageControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleSculptureClick = this.handleSculptureClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.state = {whichPage: "sculpture"};
  }
  handleSculptureClick() {
    this.setState({whichPage: "sculpture"});
  }
  handleAboutClick() {
    this.setState({whichPage: "about"});
  }
  render() {
    const whichPage = this.state.whichPage;
    if (whichPage === "sculpture") {
      return(
        <ShowPage whichPage={"sculpture"} />
      )
    } else if (whichPage === "about") {
      return(
        <ShowPage whichPage={"about"} />
      )
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <PageControl />
  </React.StrictMode>,
  document.getElementById('root')
);
