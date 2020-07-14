import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import List from './List';
import Received from './Received';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/list" exact component={List} />
            <Route path="/received" exact component={Received} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
