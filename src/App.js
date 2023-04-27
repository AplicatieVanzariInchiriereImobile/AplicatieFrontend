import logo from './logo.svg';
import './App.css';

import React, {createContext, useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
// import NavigationBar from './navigation-bar'
import Home from './home/home';
import NoutatiContainer from './noutati/noutati-container'
import DespreNoiContainer from './desprenoi/desprenoi-container'
import InchirieriContainer from './inchirieri/inchirieri-container'
import VanzariContainer from './vanzari/vanzari-container'
import ContactContainer from './contact/contact-container'

import ErrorPage from './commons/errorhandling/error-page';
import {AppProvider} from "./AppContext";
// import styles from './commons/styles/project-style.css';

//export const AppContext = createContext();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [emailLoggedUser, setEmailLoggedUser] = useState("");
  const [descriere, setDescriere] = useState("");
  const [adresa, setAdresa] = useState("");
  const [pret, setPret] = useState(0);
  const [tip, setTip] = useState("");

  useEffect(() => {
    //Repunerea datelor:
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
    setIsAdmin(localStorage.getItem("isAdmin"));
    setEmailLoggedUser(localStorage.getItem("emailLoggedUser"));

    //prentru vanzari
    setDescriere(localStorage.getItem("descriere"));
    setAdresa(localStorage.getItem("adresa"));
    setPret(localStorage.getItem("pret"));
    setTip(localStorage.getItem("tip"));
  })

  return (
      <AppProvider
          value={{ isAdmin, isLoggedIn, emailLoggedUser, setIsAdmin, setIsLoggedIn, setEmailLoggedUser,
          descriere, setDescriere, adresa, setAdresa, pret, setPret, tip, setTip}}
      >
        <div className="App">
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
       </AppProvider>
  );
}

export default App;
