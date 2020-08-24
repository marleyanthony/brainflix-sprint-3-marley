import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Upload from './components/Upload'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Redirect path="/home" to="/" />
        <Route path="/" component={App} exact />
        <Route path="/video/:id" component={App} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);