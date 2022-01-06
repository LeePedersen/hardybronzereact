import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Sculpture from './components/sculpture';
import About from './components/about';
import reportWebVitals from './reportWebVitals';

function ShowPage(props) {
  const whichPage = props.whichPage;
  if (whichPage == "sculpture") {
    return <Sculpture />;
  } else if (whichPage === "about") {
    return <About />;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ShowPage whichPage={"about"}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
