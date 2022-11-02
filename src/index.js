import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Getinvolved from './components/Getinvolved'
import Updates from './components/Updates'
import Chiefinvestigators from './components/ChiefInvestigator'
import Login from './components/LoginForm'
import ReactGA from 'react-ga4';
ReactGA.initialize('G-TNL0HZPW9P');


ReactDOM.render(
  <Router>
    <React.StrictMode>
      
      <Switch>
        <Route path="/getinvolved">
          <Getinvolved/>
        </Route>
        <Route path="/chiefinvestigators">
          <Chiefinvestigators />
        </Route>
        <Route path="/updates">
          <Updates/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <App />
        </Route>
        
      </Switch>
    </React.StrictMode>
    
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
