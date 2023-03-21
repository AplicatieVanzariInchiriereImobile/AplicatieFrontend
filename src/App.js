import logo from './logo.svg';
import './App.css';

import React from 'react'
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
// import NavigationBar from './navigation-bar'
import Home from './home/home';
import NoutatiContainer from './noutati/noutati-container'
import DespreNoiContainer from './desprenoi/desprenoi-container'
import InchirieriContainer from './inchirieri/inchirieri-container'
import VanzariContainer from './vanzari/vanzari-container'
import ContactContainer from './contact/contact-container'

import ErrorPage from './commons/errorhandling/error-page';
// import styles from './commons/styles/project-style.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*    Am modificat deci ar trebui sa se modifice*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <Router>
        <div>
          <Switch>

            <Route
                exact
                path='/'
                render={() => <Home/>}
            />

            <Route
                exact
                path='/noutati'
                render={() => <NoutatiContainer/>}
            />

            <Route
                exact
                path='/desprenoi'
                render={() => <DespreNoiContainer/>}
            />

            <Route
                exact
                path='/inchirieri'
                render={() => <InchirieriContainer/>}
            />

            <Route
                exact
                path='/vanzari'
                render={() => <VanzariContainer/>}
            />

            <Route
                exact
                path='/contact'
                render={() => <ContactContainer/>}
            />

            {/*Error*/}
            <Route
                exact
                path='/error'
                render={() => <ErrorPage/>}
            />

            <Route render={() =><ErrorPage/>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
