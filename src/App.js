import React from 'react';
//import pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//import nav
import Nav from './components/Nav';
//import from route
import {Switch, Route, useLocation} from 'react-router-dom';
//Framer Motion
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  console.log(location);
  return (
      <div className="App">
        <GlobalStyle />
        <Nav />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <AboutUs />
              </Route>
              <Route exact path="/work">
                <OurWork />
              </Route>
              <Route path="/work/:id">
                <MovieDetail />
              </Route>
              <Route>
                <ContactUs path="/contact"/>
              </Route>
            </Switch>
          </AnimatePresence>
      </div>

  );
};

export default App;
